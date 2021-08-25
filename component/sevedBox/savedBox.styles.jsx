import styled ,{keyframes , css} from "styled-components";
import { IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// var width = window.innerWidth;
// var height = window.innerHeight;

const fadeRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }

  100%{
    opacity: 1;
    transform: translateX(0);
  }
`;

const fade = keyframes`
  0% {
    opacity: 0;
    // transform: translateX(10rem);
  }

  100%{
    opacity: 1;
    // transform: translateX(0);
  }
`;

export const SaveCloseButton = styled(IconButton)`
    margin:1rem !important;
    // display:inline !important;
    background-color:rgba(0,0,0,.4) !important;
    color:#fff !important;
`;
export const CloseButtonContainer = styled.div`
  width:100%;
  height:20%;
`;

export const SaveCloseIcon = styled(CloseIcon)`
    font-size:2rem !important;
`;

export const ImageSaveBoxContainer = styled.div`
    width:100%;
    height: 80%;
    display:flex;
    align-items:center;
    flex-direction:column;
    // overflow:auto;
`;

export const ImageSaveBox = styled.div`
  width:100%;
  height: 80%;
  display:flex;
  align-items:center;
  flex-direction:column;
  overflow:auto;
`;


export const SaveBoxContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-end;
`;

export const SaveBoxImage = styled.img`
    width:20%;
    height:auto;
`;

export const TiTleSaveBox = styled.p`
  font-size:2rem;
  font-family:Bnazanin;
  margin-right:1rem;
`;

export const SeeAllButton = styled.button`
  width:100%;
  height:20%;
  border:none;
  font-size:2.5rem;
  font-family:Bnazanin;
  background-color:rgba(0,0,0,.8);
  color:#fff;
  // bottom:0;
  cursor:pointer;
  // align-self:flex-end;
`;

export const SavedBoxContainer = styled.div`
    position:absolute;
    ${props => props.location && 25 * 16  + props.location.x < props.width ?
      css`left: ${props.location.x}px;
      display:flex;
      flex-direction:column;
      align-items:flex-start;
    ` : props.location && 25 * 16  + props.location.x > props.width ?
      css`left: ${props.location.x}px;
          transform: translate(-100%,0);
          display:flex;
          flex-direction:column;
          align-items:flex-start;`
          :css`display:none;`
      // :css`left:-60rem;`
    }

    ${props => props.location.y  ?
      css`top: ${props.location.y}px;`: css`display:none;`
      // :css`left:-60rem;`
    }
    // left:${props => props.location && props.location.x ? `${props.location.x}px` : "-60rem"};
    // top:${props => props.location && props.location.y ? `${props.location.y + 15}px` : "-10rem"};
    // display:${props => props.location.x ? "block" : "none"};
    // scroll:auto;
    // display:flex;
    // flex-direction:column;
    // align-items:flex-end;
    width:25rem;
    height:40rem;
    background-color:#fff;
    border-radius:1rem;
    transition:all .5s;
    overflow:hidden;
`;

export const SavedBox = styled.div`
//   scroll:auto;
  display:flex;
  justify-content:flex-end;
  align-items:center;
  padding:1rem 5px;
`;

export const SavedImage = styled.img`
  width:7rem;
  height:auto;
  margin-left:3rem;
//   border-radius:50%;
`;

export const SavedTitle = styled.pre`
    font-size:2rem;
    font-family:Bnazanin;
    text-align:right;
    white-space: pre-wrap;     
    white-space: -moz-pre-wrap;  
    white-space: -pre-wrap;      
    white-space: -o-pre-wrap;  
    word-wrap: break-word; 
`;

export const MyTypography = styled(Typography)`
    font-size:2rem !important;
    font-family:Bnazanin !important;
    color:#999;
    text-align:right;
    padding:1rem !important;
`;

export const MySaveButton = styled(IconButton)`
    // margin-right:3rem;
    background-color:rgba(0,0,0,.4) !important;
    color:#fff !important;
    animation-name:${fadeRight};
    // animation-direction: alternate;
    animation-iteration-count: 1;
    animation-fill-mode:both;
    animation-duration: .7s;
`;

export const MySaveIcon = styled(ExpandMoreIcon)`
    font-size:3rem !important;
`;