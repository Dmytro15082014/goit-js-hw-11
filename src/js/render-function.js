// У файлі render-functions.js створи екземпляр SimpleLightbox для роботи з модальним вікном та зберігай функції для відображення елементів інтерфейсу:

// createGallery(images). Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї, додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
// clearGallery(). Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
// showLoader(). Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
// hideLoader(). Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

const createGallery = (images)=> {
    const constructor = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => 
       `<li class="image-item">
            <div class="gallery-card"><a href="${webformatURL}"><img src="${largeImageURL}" alt="${tags}" class="image"/></a></div>
            <ul class="image-info">
                <li>Likes<p>${likes}</p></li>
                <li>Views<p>${views}</p></li>
                <li>Comments<p>${comments}</p></li>
                <li>Downloads<p>${downloads}</p></li>
            </ul>
        </li>`).join("");
    const galleryConstructor = new SimpleLightbox('.gallery-card a', { captionDelay: "250" });
    gallery.innerHTML = constructor;
    galleryConstructor.refresh();
}

export default createGallery;