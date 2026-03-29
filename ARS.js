(function(){

  const box = document.getElementById("related-stories");
  if(!box || typeof stories === "undefined") return;

  // current file name extract
  const currentPath = window.location.pathname;
  const currentFile = currentPath.substring(currentPath.lastIndexOf("/") + 1).toLowerCase();

  // find current story
  let currentStory = stories.find(s => {
    let storyFile = s.link.substring(s.link.lastIndexOf("/") + 1).toLowerCase();
    return storyFile === currentFile;
  });

  if(!currentStory){
    console.log("❌ Current story not found");
    return;
  }

  // filter related
  let related = stories.filter(s => 
    s.category === currentStory.category &&
    s.language === currentStory.language &&
    s.link !== currentStory.link
  );

  // if less than 4, fill extra
  if(related.length < 4){
    let extra = stories.filter(s => s.link !== currentStory.link);
    related = [...related, ...extra];
  }

  // shuffle + pick 4
  related = related.sort(() => 0.5 - Math.random()).slice(0,4);

  // render
  box.innerHTML = "";

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
