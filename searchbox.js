
function doSearch() {
    const q = searchInput.value.toLowerCase().trim();
    const resultsBox = document.getElementById("search-results");
    resultsBox.innerHTML = "";

    if (q.length < 2) return;

    // -------- STORIES --------
    const allStories = document.querySelectorAll(".story");

    allStories.forEach(story => {
        const title = story.querySelector("h4")?.textContent.toLowerCase() || "";
        const body = story.querySelector("p")?.textContent.toLowerCase() || "";

        if (title.includes(q) || body.includes(q)) {
            resultsBox.innerHTML += `
                <div class="search-result-item">
                    <span class="search-tag tag-story">Story</span>
                    <strong>${story.querySelector("h4").textContent}</strong>
                </div>
            `;
        }
    });

    // -------- CATEGORIES --------
    const categories = document.querySelectorAll(".categories-list li");

    categories.forEach(cat => {
        const text = cat.textContent.toLowerCase();

        if (text.includes(q)) {
            resultsBox.innerHTML += `
                <div class="search-result-item">
                    <span class="search-tag tag-category">Category</span>
                    <strong>${cat.textContent}</strong>
                </div>
            `;
        }
    });
}
