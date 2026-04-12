(function(){

  // 🔥 Prevent multiple load
  if(window.adsLoaded) return;
  window.adsLoaded = true;

  // =========================
  // 🔥 POPUNDER (1 only)
  // =========================
  var pop = document.createElement("script");
  pop.src = "https://pl29119062.profitablecpmratenetwork.com/a4/79/3f/a4793f0382614a906b1efbab458ae65a.js";
  pop.async = true;
  document.body.appendChild(pop);


  // =========================
  // 🔥 SOCIAL BAR
  // =========================
  var social = document.createElement("script");
  social.src = "https://pl29119070.profitablecpmratenetwork.com/19/dc/50/19dc50f8f1576576f08c337eacb6715e.js";
  social.async = true;
  document.body.appendChild(social);


  // =========================
  // 🔥 TOP BANNER (320x50)
  // =========================
  var topBanner = document.createElement("div");
  topBanner.style.textAlign = "center";
  topBanner.style.margin = "10px 0";

  topBanner.innerHTML = `
    <script>
      atOptions = {
        'key' : 'ff4214c3194c0db10fa12cc62da2593e',
        'format' : 'iframe',
        'height' : 50,
        'width' : 320
      };
    </script>
    <script src="https://www.highperformanceformat.com/ff4214c3194c0db10fa12cc62da2593e/invoke.js"></script>
  `;

  document.body.insertBefore(topBanner, document.body.firstChild);


  // =========================
  // 🔥 MIDDLE BANNER (300x250)
  // =========================
  function insertMiddleAd(){
    var paragraphs = document.querySelectorAll("p");
    if(paragraphs.length > 3){
      var midAd = document.createElement("div");
      midAd.style.textAlign = "center";
      midAd.style.margin = "20px 0";

      midAd.innerHTML = `
        <script>
          atOptions = {
            'key' : 'b50c5c7c989589ab4e1e4c81aaa9d1f1',
            'format' : 'iframe',
            'height' : 250,
            'width' : 300
          };
        </script>
        <script src="https://www.highperformanceformat.com/b50c5c7c989589ab4e1e4c81aaa9d1f1/invoke.js"></script>
      `;

      paragraphs[2].parentNode.insertBefore(midAd, paragraphs[2].nextSibling);
    }
  }

  setTimeout(insertMiddleAd, 1000);


  // =========================
  // 🔥 NATIVE AD (BOTTOM)
  // =========================
  var nativeAd = document.createElement("div");
  nativeAd.style.margin = "20px 0";
  nativeAd.style.textAlign = "center";

  nativeAd.innerHTML = `
    <script async="async" data-cfasync="false" src="https://pl29119063.profitablecpmratenetwork.com/9327a275c203e579e618711fe595555f/invoke.js"></script>
    <div id="container-9327a275c203e579e618711fe595555f"></div>
  `;

  document.body.appendChild(nativeAd);


  // =========================
  // 🔥 SMARTLINK FUNCTION
  // =========================
  window.openSmartAd = function(){
    window.open("https://www.profitablecpmratenetwork.com/sgtdj96rhz?key=29a2fc33dfc2632681a83cdb18590966", "_blank");
  };


})();
