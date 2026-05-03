const FOOTER_HTML =
    `<footer class="mt-auto py-3 bg-light border-top">
      <div class="container">
        <div class="container">
            <div class="d-flex justify-content-center align-items-center gap-4 small text-muted flex-wrap">

        <a href="https://www.facebook.com/muscleshoalssailingclub"
            class="text-decoration-none text-muted border border-secondary-subtle rounded-pill px-3 py-1"
            target="_blank">
            <i class="bi bi-facebook"></i> Muscle Shoals Sailing Club
        </a>

        <span>
        <a href="https://www.google.com/maps/dir//Muscle+Shoals+Sailing+Club,+1350+Co+Rd+411,+Killen,+AL+35645/@34.9042002,-87.5593571,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8862b64091b7ae7d:0x4337be535d1e4183!2m2!1d-87.4373987!2d34.8127421?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D">
            1350 County Road 411
            Killen, AL 35645
        </span>

        <a href="https://github.com/ericlstaggs"
            class="text-decoration-none text-muted border border-secondary-subtle rounded-pill px-3 py-1"
            target="_blank">
            <i class="bi bi-github"></i>
            <i class="bi bi-person-circle"></i>
            GitHub Profile
        </a>
    </div>

  </div>
</footer>`;


// footer.js (continued)

function insertFooter() {
    const footerContainer = document.getElementById("footer-container");
    if (footerContainer) {
        footerContainer.innerHTML = FOOTER_HTML;
    } else {
        console.error("Footer container element not found!");
    }
}

// Optional: Automatically run the function when the script loads
insertFooter();