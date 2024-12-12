const shareButton = document.getElementById("share-button");
const sharePlatforms = document.getElementById("share-platforms");

shareButton.addEventListener("click", function () {
  shareButton.classList.toggle("active");
  if (shareButton.classList.contains("active")) {
    sharePlatforms.style.visibility = "visible";
  } else {
    sharePlatforms.style.visibility = "hidden";
  }
});
