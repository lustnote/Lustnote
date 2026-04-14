(function(){

  const box = document.getElementById("related-stories");
  if(!box || typeof stories === "undefined") return;

  const currentPath = window.location.pathname;

  let currentStory = stories.find(s => currentPath.includes(s.link));

  if(!currentStory){
    console.log("❌ Current story not found");
    return;
  }

  let related = stories.filter(s => 
    s.category === currentStory.category &&
    s.language === currentStory.language &&
    s.link !== currentStory.link
  );

  if(related.length === 0){
    box.innerHTML = "<p>No related stories found</p>";
    return;
  }

  function shuffleArray(arr){
    for(let i = arr.length - 1; i > 0; i--){
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  related = shuffleArray(related).slice(0,4);

  let html = "";

  related.forEach(story => {
    html += `
      <a href="${story.link}" class="suggest-card">
        <span class="suggest-tag">${story.category}</span>
        <h4>${story.title}</h4>
        <p>${story.desc.substring(0,60)}...</p>
      </a>
    `;
  });

  box.innerHTML = html;

})();
