// --------------------------------------------
// SEARCH + LATEST STORIES AUTO-LOAD SYSTEM
// --------------------------------------------
document.addEventListener("DOMContentLoaded", () => {

    // -----------------------------
    // SELECTORS
    // -----------------------------
    const searchInput = document.querySelector(".search-section input");
    const searchButton = document.querySelector(".search-section button");
    const categories = document.querySelectorAll(".categories-list li");
    const latestContainer = document.getElementById("latest-stories");

    if (!searchInput) {
        console.warn("Search input not found");
        return;
    }

    // -----------------------------
    // 1) SEARCH SYSTEM (STATIC + JSON STORIES)
    // -----------------------------
    function doSearch() {
        const q = searchInput.value.toLowerCase().trim();

        // 🔁 Always get latest .story elements
        const allStories = document.querySelectorAll(".story");

        allStories.forEach(story => {
            const title =
                story.querySelector("h4")?.textContent.toLowerCase() || "";
            const body =
                story.querySelector("p")?.textContent.toLowerCase() || "";

            // CSS-safe display toggle
            story.style.display =
                (title.includes(q) || body.includes(q)) ? "" : "none";
        });

        // Search in categories list
        categories.forEach(cat => {
            const text = cat.textContent.toLowerCase();
            cat.style.display = text.includes(q) ? "inline-block" : "none";
        });
    }

    searchInput.addEventListener("input", doSearch);
    searchButton?.addEventListener("click", doSearch);

    // -----------------------------
    // 2) LOAD LATEST 3 STORIES FROM JSON
    // -----------------------------
    if (latestContainer) {
        fetch("searchbox.json?ts=" + Date.now(), { cache: "no-store" })
            .then(res => res.json())
            .then(data => {

                // Sort by date (newest first)
                data.sort((a, b) => new Date(b.date) - new Date(a.date));

                // Pick latest 3
                const latest = data.slice(0, 3);
                latestContainer.innerHTML = "";

                latest.forEach(story => {
                    const card = document.createElement("div");
                    card.className = "story";

                    card.innerHTML = `
                        <h4>${story.title}</h4>
                        <p>${story.desc}</p>
                        <p style="color:#ffa550;font-size:13px;">
                            Uploaded: ${story.date}
                        </p>
                        <a href="${story.link}" class="button">Read More</a>
                    `;

                    latestContainer.appendChild(card);
                });
            })
            .catch(err =>
                console.error("Error loading latest stories:", err)
            );
    }

});
