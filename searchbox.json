document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.querySelector(".search-section input");

    // Story cards
    const stories = document.querySelectorAll(".story");

    // Category list items
    const categories = document.querySelectorAll(".categories-list li");

    function doSearch() {
        const q = searchInput.value.toLowerCase().trim();

        // 1) Search in Stories
        stories.forEach(story => {
            const title = story.querySelector("h4").textContent.toLowerCase();
            const body = story.querySelector("p").textContent.toLowerCase();
            
            if (title.includes(q) || body.includes(q)) {
                story.style.display = "block";
            } else {
                story.style.display = "none";
            }
        });

        // 2) Search in Categories
        categories.forEach(cat => {
            const text = cat.textContent.toLowerCase();

            if (text.includes(q)) {
                cat.style.display = "inline-block";
            } else {
                cat.style.display = "none";
            }
        });
    }

    // On typing
    searchInput.addEventListener("input", doSearch);

    // Search button support (optional)
    const searchButton = document.querySelector(".search-section button");
    searchButton.addEventListener("click", doSearch);

});
