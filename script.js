// Colour Logos
// https://img.icons8.com/color/48/twitter--v1.png
// https://img.icons8.com/fluency/48/instagram-new.png
// https://img.icons8.com/color/48/facebook.png
// https://img.icons8.com/color/48/tiktok--v1.png
// https://img.icons8.com/color/48/linkedin.png
// https://img.icons8.com/color/48/youtube-play.png

function iconHover(imgElement, hoverImg) {
  const nonHoverImg = imgElement.src;

  imgElement.addEventListener("mouseover", function () {
    imgElement.src = hoverImg;
  });

  imgElement.addEventListener("mouseout", function () {
    imgElement.src = nonHoverImg;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Select all images you want to apply the hover effect to
  const images = document.querySelectorAll(".hover-img");

  images.forEach(function (img) {
    // Call the iconHover function for each image
    iconHover(img, img.getAttribute("data-hover-src"));
  });
});
