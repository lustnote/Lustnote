document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.querySelector(".search-section input");
    const searchButton = document.querySelector(".search-section button");
    const resultsBox = document.getElementById("search-results");

    if (!searchInput || !resultsBox) return;

    function doSearch() {
        const q = searchInput.value.toLowerCase().trim();
        resultsBox.innerHTML = "";

        if (q.length < 2) {
            resultsBox.style.display = "none";
            return;
        }

        resultsBox.style.display = "block";
        let found = false;

        // -------- STORIES --------
        const allStories = document.querySelectorAll(".story");

        allStories.forEach(story => {
            const titleEl = story.querySelector("h4");
            const bodyEl = story.querySelector("p");
            const url = story.getAttribute("data-url");

            const title = titleEl ? titleEl.textContent.toLowerCase() : "";
            const body = bodyEl ? bodyEl.textContent.toLowerCase() : "";

            if ((title.includes(q) || body.includes(q)) && url) {
                found = true;

                resultsBox.innerHTML += `
                    <a href="${url}" class="search-item">
                        <span class="search-tag tag-story">Story</span>
                        <strong>${titleEl.textContent}</strong>
                    </a>
                `;
            }
        });

        // -------- CATEGORIES --------
        const categories = document.querySelectorAll(".categories-list li");

        categories.forEach(cat => {
            const text = cat.textContent.toLowerCase();
            const url = cat.getAttribute("data-url");

            if (text.includes(q) && url) {
                found = true;

                resultsBox.innerHTML += `
                    <a href="${url}" class="search-item">
                        <span class="search-tag tag-category">Category</span>
                        <strong>${cat.textContent}</strong>
                    </a>
                `;
            }
        });

        // -------- NO RESULTS --------
        if (!found) {
            resultsBox.innerHTML = `
                <div class="search-item">
                    <small>No results found</small>
                </div>
            `;
        }
    }

    searchInput.addEventListener("input", doSearch);
    searchButton.addEventListener("click", doSearch);

});
