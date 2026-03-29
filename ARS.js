(function(){

  const box = document.getElementById("related-stories");
  if(!box || typeof stories === "undefined") return;

  // current page URL
  const currentUrl = window.location.href.toLowerCase();

  // find current story
  let currentStory = stories.find(s => 
    currentUrl.endsWith(s.link.toLowerCase())
  );

  // if not found, stop
  if(!currentStory){
    console.log("❌ Current story not found");
    return;
  }

  // filter related (same category + language)
  let related = stories.filter(s => 
    s.category === currentStory.category &&
    s.language === currentStory.language &&
    s.link !== currentStory.link
  );

  // if less than 4, add extra
  if(related.length < 4){
    let extra = stories.filter(s => s.link !== currentStory.link);
    related = [...related, ...extra];
  }

  // shuffle + pick 4
  related = related.sort(() => 0.5 - Math.random()).slice(0,4);

  // clear old content
  box.innerHTML = "";

  // render cards
  related.forEach(story => {
    box.innerHTML += `
      <a href="${story.link}" class="suggest-card">
        <span class="suggest-tag">${story.category}</span>
        <h4>${story.title}</h4>
        <p>${story.desc.substring(0,60)}...</p>
      </a>
    `;
  });

})();
