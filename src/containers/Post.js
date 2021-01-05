import React, { PureComponent } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";

import * as utils from '../utilities/utilities';

class Publish extends PureComponent {
    constructor(props) {
        super(props);

        this.fileRef = React.createRef();
    }

    onImageUpload = () => {
        const files = this.fileRef.current.files;

        const formatData = new FormData();

        for (const img of files) {
            formatData.append('photos[]', img);
            console.log(img);
        }
    }

    render() {

        return (
            <LazyLoadComponent>
                <section className="post">
                    <div className="post__wrapper">
                        <div className="post__head">
                            <div className="container">
                                <div className="post__headwrap">
                                    <h2 className="heading heading__2">Post new add</h2>
                                </div>
                            </div>
                        </div>
                        <div className="post__main">

                        </div>
                    </div>
                </section>
            </LazyLoadComponent>
        );
    }
}

export default Publish;

// {/* <button className="post__btn btn btn__secondary btn__secondary--outline">
//     Premiumalize
//     <svg className="icon--dark icon icon--8 ml-5" dangerouslySetInnerHTML={{__html: utils.use('thumbs-up')}} />
// </button> */}


// document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
//     const dropZoneElement = inputElement.closest(".drop-zone");
  
//     dropZoneElement.addEventListener("click", (e) => {
//       inputElement.click();
//     });
  
//     inputElement.addEventListener("change", (e) => {
//       if (inputElement.files.length) {
//         updateThumbnail(dropZoneElement, inputElement.files[0]);
//       }
//     });
  
//     dropZoneElement.addEventListener("dragover", (e) => {
//       e.preventDefault();
//       dropZoneElement.classList.add("drop-zone--over");
//     });
    
//     dropZoneElement.addEventListener("drop", (e) => {
//       e.preventDefault();
  
//       if (e.dataTransfer.files.length) {
//         inputElement.files = e.dataTransfer.files;
//         updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
//       }
  
//       dropZoneElement.classList.remove("drop-zone--over");
//     });
  
//     ["dragleave", "dragend"].forEach((type) => {
//       dropZoneElement.addEventListener(type, (e) => {
//         dropZoneElement.classList.remove("drop-zone--over");
//       });
//     });
  
    
//   });
  
//   /**
//    * Updates the thumbnail on a drop zone element.
//    *
//    * @param {HTMLElement} dropZoneElement
//    * @param {File} file
//    */
//   function updateThumbnail(dropZoneElement, file) {
//     let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");
  
//     // First time - remove the prompt
//     if (dropZoneElement.querySelector(".drop-zone__prompt")) {
//       dropZoneElement.querySelector(".drop-zone__prompt").remove();
//     }
  
//     // First time - there is no thumbnail element, so lets create it
//     if (!thumbnailElement) {
//       thumbnailElement = document.createElement("div");
//       thumbnailElement.classList.add("drop-zone__thumb");
//       dropZoneElement.appendChild(thumbnailElement);
//     }
  
//     thumbnailElement.dataset.label = file.name;
  
//     // Show thumbnail for image files
//     if (file.type.startsWith("image/")) {
//       const reader = new FileReader();
  
//       reader.readAsDataURL(file);
//       reader.onload = () => {
//         thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
//       };
//     } else {
//       thumbnailElement.style.backgroundImage = null;
//     }
//   }
  