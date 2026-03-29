(function(){
  const box = document.getElementById("related-stories");
  if(!box || typeof stories === "undefined") return;

  const currentUrl = window.location.pathname;

  // current story find
  let currentStory = stories.find(s => currentUrl.includes(s.link));

  if(!currentStory) return;

  // same category + same language filter
  let related = stories.filter(s => 
    s.category === currentStory.category &&
    s.language === currentStory.language &&
    s.link !== currentStory.link
  );

  // if less than 3, fill with latest
  if(related.length < 3){
    let extra = stories.filter(s => s.link !== currentStory.link);
    related = [...related, ...extra];
  }

  // random 4 select
  related = related.sort(() => 0.5 - Math.random()).slice(0,4);

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
