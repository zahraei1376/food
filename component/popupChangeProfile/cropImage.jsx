// ////////////////////////////////////////////
// import { useState } from 'react';
// import ReactCrop from 'react-image-crop';
// import 'react-image-crop/dist/ReactCrop.css';
// /////////////////////////////////////////////
// // function CropImage({ src }) {
// //     const [crop, setCrop] = useState({ aspect: 16 / 9 });
// //     return <ReactCrop src={src} crop={crop} onChange={newCrop => setCrop(newCrop)} />;
// // };

// // export default CropImage;

// function CropImage({ src , setCropImage}) {
//     const [upImg, setUpImg] = useState();
//     // const imgRef = useRef(null);
//     // const previewCanvasRef = useRef(null);
//     const [crop, setCrop] = useState({aspect: 16 / 9 });
//     const [completedCrop, setCompletedCrop] = useState(null);

//     const handle = (c) =>{
//         setCompletedCrop(c)
//         // setCropImage(c)
//     }
//     return <ReactCrop
//     src={src}
//     // onImageLoaded={onLoad}
//     crop={crop}
//     onChange={(c) => setCrop(c)}
//     onComplete={(c) => handle(c)}
//   />;
// };

// export default CropImage;

//////////////////////////////////
import React, {useState} from "react";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
// import demoImage from "./demo-image.jpg";

function ImageCropper(props) {
    const {imageToCrop, onImageCropped} = props;

    const [cropConfig, setCropConfig] = useState(
        // default crop config
        {
            unit: '%',
            width: 30,
            aspect: 9 / 9,
            // aspect: 16 / 9,
        }
    );

    const [imageRef, setImageRef] = useState();

    async function cropImage(crop) {
        if (imageRef && crop.width && crop.height) {
            const croppedImage = await getCroppedImage(
                imageRef,
                crop,
                'croppedImage.jpeg' // destination filename
            );

            // calling the props function to expose
            // croppedImage to the parent component
            onImageCropped(croppedImage);
        }
    }

    function getCroppedImage(sourceImage, cropConfig, fileName) {
        // creating the cropped image from the source image
        const canvas = document.createElement('canvas');
        const scaleX = sourceImage.naturalWidth / sourceImage.width;
        const scaleY = sourceImage.naturalHeight / sourceImage.height;
        canvas.width = cropConfig.width;
        canvas.height = cropConfig.height;
        const ctx = canvas.getContext('2d');
        props.previewCanvasRef.current = canvas;

        ctx.drawImage(
            sourceImage,
            cropConfig.x * scaleX,
            cropConfig.y * scaleY,
            cropConfig.width * scaleX,
            cropConfig.height * scaleY,
            0,
            0,
            cropConfig.width,
            cropConfig.height
        );

        return new Promise((resolve, reject) => {
            canvas.toBlob(
                (blob) => {
                    // returning an error
                    if (!blob) {
                        reject(new Error('Canvas is empty'));
                        return;
                    }

                    blob.name = fileName;
                    // creating a Object URL representing the Blob object given
                    const croppedImageUrl = window.URL.createObjectURL(blob);

                    resolve(croppedImageUrl);
                }, 'image/jpeg'
            );
        });
    }

    return (
        <ReactCrop
            src={imageToCrop}
            crop={cropConfig}
            ruleOfThirds
            onImageLoaded={(imageRef) => setImageRef(imageRef)}
            onComplete={(cropConfig) => cropImage(cropConfig)}
            onChange={(cropConfig) => setCropConfig(cropConfig)}
            crossorigin="anonymous" // to avoid CORS-related problems
        />
    );
}

ImageCropper.defaultProps = {
    onImageCropped: () => {}
}

export default ImageCropper;
