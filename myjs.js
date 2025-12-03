// Ee code antha DOM (page) load ayyaka run avvali
document.addEventListener("DOMContentLoaded", function() {
    
    // Manam HTML lo pettina IDs ni select chesthunnam
    const menuButton = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("main-menu");

    // Menu button click chesinappudu
    menuButton.addEventListener("click", function() {
        // navLinks (menu) ki 'active' ane class ni add/remove cheyi
        navLinks.classList.toggle("active");
    });

});
