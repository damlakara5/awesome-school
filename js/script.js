document.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery-item")) {
    const src = e.target.getAttribute("src");

    document.querySelector(".modal-img").src = src;
    console.log(document.querySelector(".modal-img").src);
    const myModal = new bootstrap.Modal(
      document.getElementById("galleryModal")
    ); //creae modal via javascript
    myModal.show();
  }
});
