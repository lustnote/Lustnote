document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.querySelector(".search-section input");
    const searchButton = document.querySelector(".search-section button");
    const resultsBox = document.getElementById("search-results");

    function doSearch() {
        const q = searchInput.value.toLowerCase().trim();
        resultsBox.innerHTML = "";

        if (q.length < 2) {
            resultsBox.style.display = "none";
            return;
        }

        resultsBox.style.display = "block";
        let found = false;

        stories.forEach(item => {
            const title = item.title.toLowerCase();
            const desc = item.desc.toLowerCase();

            if (title.includes(q) || desc.includes(q)) {
                found = true;

                resultsBox.innerHTML += `
                    <a href="${item.link}" class="search-item">
                        <span class="search-tag tag-story">${item.language}</span>
                        <strong>${item.title}</strong><br>
                        <small>${item.desc}</small>
                    </a>
                `;
            }
        });

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
