<!-- DATA For Search Box -->
<script src="../../stories.js"></script>

<!-- SCRIPT For Saerch Box-->
<script>

const input = document.getElementById("searchInput");
const results = document.getElementById("searchResults");
const clearBtn = document.getElementById("clearBtn");

// 🔍 SEARCH
input.addEventListener("keyup", () => {

  let value = input.value.toLowerCase().trim();
  results.innerHTML = "";

  clearBtn.style.display = value ? "block" : "none";

  if (value === "") return;

  let filtered = stories.filter(s =>
  s.title.toLowerCase().includes(value) ||
  (s.desc && s.desc.toLowerCase().includes(value)) ||
  s.category.toLowerCase().includes(value)
);

  if (filtered.length === 0) {
    results.innerHTML = "<li style='padding:10px;color:#888'>No results found</li>";
    return;
  }

  filtered.forEach(s => {

    let li = document.createElement("li");
    li.classList.add("result-item");

    li.innerHTML = `
      <a href="${window.location.origin + s.link}">
        <div style="color:#facc15;">
          ${highlight(s.title, value)}
        </div>
        <div class="category-tag">
          ${s.category.toUpperCase()}
        </div>
      </a>
    `;

    results.appendChild(li);
  });

});

// ❌ CLEAR BUTTON
clearBtn.onclick = () => {
  input.value = "";
  results.innerHTML = "";
  clearBtn.style.display = "none";
  input.focus();
};

// 🔥 HIGHLIGHT TEXT
function highlight(text, keyword) {
  const regex = new RegExp(`(${keyword})`, "gi");
  return text.replace(regex, `<b style="color:white">$1</b>`);
}

// 🖱️ CLICK OUTSIDE → HIDE
document.addEventListener("click", function(e) {

  const searchBox = document.querySelector(".search-box");

  if (searchBox.contains(e.target)) return;

  results.innerHTML = "";
});

// 🔁 INPUT FOCUS → SHOW AGAIN
input.addEventListener("focus", () => {
  if (input.value.trim() !== "") {
    input.dispatchEvent(new Event("keyup"));
  }
});

</script>
