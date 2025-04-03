import getImagesByQuery from "./js/pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import createGallery from "./js/render-function";

const searchForm = document.querySelector(".form");
const gallery = document.querySelector(".gallery");

searchForm.addEventListener("submit", searchImage);

function searchImage(e) {
    e.preventDefault();
    const query = searchForm.elements[0].value.toLowerCase().trim();

    getImagesByQuery(query)
        .then((response) => {
            const dataImg = response.data.hits;
            console.log(dataImg);
            if(!(dataImg.length)){
                iziToast.show({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    color: "red",
                    position: "topRight"
                });
                return;
            }
            createGallery(dataImg);
            
       })
        .catch((error) => console.log(error))
        .finally(() => {});
};