//Where I learned about async functions: https://javascript.info/async-await
// https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
  loadBanner()});

async function loadBanner(navFile = "navigation.html", footerFile = "footer.html") {
    let navPlaceholder = document.getElementById('nav-placeholder');
    let footerPlaceholder = document.getElementById('footer-placeholder');

    try {
        if (navPlaceholder) {
            let navResponse = await fetch(navFile);
            let navHTML = await navResponse.text();
            navPlaceholder.innerHTML = navHTML;
        }

        if (footerPlaceholder) {
            let footerResponse = await fetch(footerFile);
            let footerHTML = await footerResponse.text();
            footerPlaceholder.innerHTML = footerHTML;
        }
    } catch (error) {
        console.error('Error loading nav or footer:', error);
    }
}