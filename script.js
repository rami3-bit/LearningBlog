const viewMoreBtn = document.getElementById("view-more-btn");

const hiddenArticle = document.getElementById("hidden-article")

viewMoreBtn.addEventListener("click", function() {
 if (hiddenArticle.style.display === "none" || hiddenArticle.style.display === "") {
    hiddenArticle.style.display = "block";
    viewMoreBtn.textContent = "Show Less";  // Byt knapptext till "Show Less"
  } else {
    // Om artikeln är synlig, dölj den
    hiddenArticle.style.display = "none";
    viewMoreBtn.textContent = "View More";  // Återställ knapptexten till "View More"
  }
});