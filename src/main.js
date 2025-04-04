import getImagesByQuery from "./js/pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import createGallery from "./js/render-function";
import { clearGallery, showLoader, hideLoader } from "./js/render-function"

const searchForm = document.querySelector(".form");

searchForm.addEventListener("submit", searchImage);

function searchImage(e) {
    e.preventDefault();
    showLoader();
    clearGallery()
    const query = searchForm.elements[0].value.toLowerCase().trim();
    getImagesByQuery(query)
        .then((response) => {
            const dataImg = response.data.hits;
            if(!(dataImg.length)){
                iziToast.show(messageError);
                return;
            }
            createGallery(dataImg);            
       })
        .catch((error) => console.log(error))
        .finally(() => {
            hideLoader();
            searchForm.reset();
        });
};

const messageError = {
    message: "Sorry, there are no images matching your search query. Please try again!",
    theme: "light",
    iconColor: "#fafafb",
    color: "#ef4040",
    messageColor: "#fafafb",
    position: "topRight",
    messageSize: "16px",
    messageSize: "150%",
    iconUrl: "./img/bi_x-octagon.png"
};