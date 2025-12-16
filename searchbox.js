
function doSearch() {
    const q = searchInput.value.toLowerCase().trim();
    const resultsBox = document.getElementById("search-results");

    // Safety check
    if (!resultsBox) return;

    resultsBox.innerHTML = "";

    // Minimum 2 letters
    if (q.length < 2) {
        resultsBox.style.display = "none";
        return;
    }

    resultsBox.style.display = "block";

    let found = false;

    // -------- STORIES RESULTS --------
    const allStories = document.querySelectorAll(".story");

    allStories.forEach(story => {
        const titleEl = story.querySelector("h4");
        const bodyEl = story.querySelector("p");

        const title = titleEl ? titleEl.textContent.toLowerCase() : "";
        const body = bodyEl ? bodyEl.textContent.toLowerCase() : "";

        if (title.includes(q) || body.includes(q)) {
            found = true;

            resultsBox.innerHTML += `
                <div class="search-item">
                    <span class="search-tag tag-story">Story</span>
                    <strong>${titleEl.textContent}</strong>
                </div>
            `;
        }
    });

    // -------- CATEGORY RESULTS --------
    const categories = document.querySelectorAll(".categories-list li");

    categories.forEach(cat => {
        const text = cat.textContent.toLowerCase();

        if (text.includes(q)) {
            found = true;

            resultsBox.innerHTML += `
                <div class="search-item">
                    <span class="search-tag tag-category">Category</span>
                    <strong>${cat.textContent}</strong>
                </div>
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
