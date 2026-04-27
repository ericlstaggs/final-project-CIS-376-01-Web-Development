const  BANNER_HTML = 
`  <div id="title"
    class="mt-4 p-5 bg-primary text-white rounded align-content-center align-items-center d-flex flex-column">
    <h1 id="mssc" class="title-text">Muscle Shoals Sailing Club</h1>
  </div>`;






// banner.js (continued)

function insertBanner() {
    const bannerContainer = document.getElementById("banner-container");
    if (bannerContainer) {
        bannerContainer.innerHTML = BANNER_HTML;
    } else {
        console.error("Banner container element not found!");
    }
}
// export to the page
insertBanner();