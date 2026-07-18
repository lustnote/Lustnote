// ==============================
// AUTO RELATED STORIES
// Supports:
// category: "aunty"
// categories: ["aunty","hyderabad"]
// ==============================

const currentPath = window.location.pathname;

// 🔍 Find current story
function getCurrentStory() {
  return stories.find(s => currentPath.includes(s.link)) || null;
}

// 🚀 Load Related Stories
function loadRelated() {

  const container = document.getElementById("relatedStories");
  if (!container) return;

  const current = getCurrentStory();
  if (!current) return;

  // Current Story Tags
  const currentTags = current.categories || [current.category];

  // Filter Related Stories
  let filtered = stories.filter(s => {

    if (s.link === current.link) return false;

    const storyTags = s.categories || [s.category];

    // Match at least one common tag
    return storyTags.some(tag => currentTags.includes(tag));

  });

  // Shuffle
  filtered.sort(() => Math.random() - 0.5);

  // Pick 5
  const selected = filtered.slice(0, 5);

  container.innerHTML = "";

  selected.forEach(s => {

    const tags = s.categories || [s.category];

    let card = document.createElement("a");
    card.href = "#";

    card.className =
      "group glass rounded-2xl p-5 transition-all hover:-translate-y-1";

    card.innerHTML = `
      <div class="text-xs text-primary mb-1">
        ${tags.join(" • ").toUpperCase()}
      </div>

      <h3 class="font-display text-lg">
        ${s.title}
      </h3>

      <p class="text-xs text-muted-foreground mt-1">
        ${s.date}
      </p>
    `;

    // 💰 Smartlink + Redirect
    card.onclick = function(e) {

      e.preventDefault();

      trackSmartlink("related_story", function() {

        window.open(
          "https://endedstrung.com/zyupp5ax0?key=5f4d94b85b6419b4dbd642d3ea5649d1",
          "_blank"
        );

        setTimeout(() => {
          window.location.href = window.location.origin + s.link;
        }, 800);

      });

    };

    container.appendChild(card);

  });

}

// Run
loadRelated();
