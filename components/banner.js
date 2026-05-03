const  BANNER_HTML = 
`<div id="title"
    class="mt-4 p-5 bg-primary text-white rounded align-content-center align-items-center d-flex flex-column">
    <h1 id="mssc" class="title-text">Muscle Shoals Sailing Club</h1>
  </div>
  
  
    <!-- navbar code -->

    <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-light pointer-events: none disabled">
        <div class="container-fluid">
            <a class="navbar-brand" href="../index.html">
                <i class="bi bi-compass"></i></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">

                    <li class="about">
                        <a class="nav-link active" aria-current="page" href="../pages/about.html">About</a>
                    </li>
                    <li class="navTemplate">
                        <a class="nav-link active" aria-current="page" href="../pages/membership.html">Membership</a>
                    </li>
                    <li class="navTemplate">
                        <a class="nav-link active" aria-current="page" href="../pages/schedule.html">Schedule</a>
                    </li>
                    <li class="navTemplate">
                        <a class="nav-link active" aria-current="page" href="../pages/photos.html">Photos</a>
                    </li>
                    <li class="navTemplate">
                        <a class="nav-link active" aria-current="page" href="../pages/lear-to-sail.html">Learn to
                            Sail</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  `;
  
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