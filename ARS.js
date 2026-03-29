(function(){

  const box = document.getElementById("related-stories");
  if(!box || typeof stories === "undefined") return;

  const currentPath = window.location.pathname;
  const currentFile = currentPath.substring(currentPath.lastIndexOf("/") + 1).toLowerCase();

  let currentStory = stories.find(s => {
    let storyFile = s.link.substring(s.link.lastIndexOf("/") + 1).toLowerCase();
    return storyFile === currentFile;
  });

  if(!currentStory) return;

  let related = stories.filter(s => 
    s.category === currentStory.category &&
    s.language === currentStory.language &&
    s.link !== currentStory.link
  );

  if(related.length < 4){
    let extra = stories.filter(s => 
      s.link !== currentStory.link &&
      s.language === currentStory.language
    );
    related = [...related, ...extra];
  }

  // 🔥 real random shuffle
  function shuffleArray(arr){
    for(let i = arr.length - 1; i > 0; i--){
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  related = shuffleArray(related).slice(0,4);

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
