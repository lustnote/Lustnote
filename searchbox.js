// --------------------------------------------
// SEARCH + LATEST STORIES AUTO-LOAD SYSTEM
// --------------------------------------------
document.addEventListener("DOMContentLoaded", () => {

    // Inputs
    const searchInput = document.querySelector(".search-section input");
    const searchButton = document.querySelector(".search-section button");

    // Story cards (index page static stories)
    const staticStories = document.querySelectorAll(".story");

    // Categories list items
    const categories = document.querySelectorAll(".categories-list li");

    // -----------------------------
    // 1) SEARCH SYSTEM
    // -----------------------------
    function doSearch() {
        const q = searchInput.value.toLowerCase().trim();

        // Search in static stories
        staticStories.forEach(story => {
            const title = story.querySelector("h4")?.textContent.toLowerCase() || "";
            const body = story.querySelector("p")?.textContent.toLowerCase() || "";

            story.style.display = (title.includes(q) || body.includes(q))
                ? "block"
                : "none";
        });

        // Search in categories
        categories.forEach(cat => {
            const text = cat.textContent.toLowerCase();
            cat.style.display = text.includes(q) ? "inline-block" : "none";
        });
    }

    // Input event
    searchInput?.addEventListener("input", doSearch);
    searchButton?.addEventListener("click", doSearch);

    // -----------------------------
    // 2) LOAD LATEST 3 STORIES FROM JSON
    // -----------------------------
    const latestContainer = document.getElementById("latest-stories");

    if (latestContainer) {
        fetch("searchbox.json?ts=" + Date.now(), { cache: "no-store" })
            .then(res => res.json())
            .then(data => {

                // Sort by date DESC (new → old)
                data.sort((a, b) => new Date(b.date) - new Date(a.date));

                // Pick latest 3
                const latest = data.slice(0, 3);

                latestContainer.innerHTML = ""; // clear

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
            .catch(err => console.error("Error loading latest stories:", err));
    }

});
