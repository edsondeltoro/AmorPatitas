var currentIndex = 0;

function openLightbox(imageId) {
    currentIndex = imageId - 1;
    document.getElementById("lightbox").style.display = "block";
    showImage();
    showImageText();
    adjustImageSize();
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function showImage() {
    var lightboxImage = document.getElementById("lightbox-image");
    var imageUrl = document.getElementById(currentIndex + 1).src;
    lightboxImage.src = imageUrl;
}

function showImageText() {
    var lightboxText = document.getElementById("lightbox-text");
    var textToShow = document.getElementById(currentIndex + 1).getAttribute("data-text");
    lightboxText.textContent = textToShow;
}

function adjustImageSize() {
    var lightboxImage = document.getElementById("lightbox-image");
    lightboxImage.style.maxWidth = "90%";
    lightboxImage.style.maxHeight = "90%";

    var widthRatio = lightboxImage.naturalWidth / window.innerWidth;
    var heightRatio = lightboxImage.naturalHeight / window.innerHeight;

    if (widthRatio > 1 || heightRatio > 1) {
        if (widthRatio > heightRatio) {
            lightboxImage.style.width = "90%";
            lightboxImage.style.height = "auto";
        } else {
            lightboxImage.style.width = "auto";
            lightboxImage.style.height = "90%";
        }
    } else {
        lightboxImage.style.width = "auto";
        lightboxImage.style.height = "auto";
    }
}

function changeImage(n, s) {
    currentIndex += n;

    if (currentIndex >= s) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = s - 1;
    }
    showImage();
    showImageText()
    adjustImageSize();
}

window.addEventListener("resize", adjustImageSize);
