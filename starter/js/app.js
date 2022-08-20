function init(){
    const hamburger = document.querySelector(".hamburger");
    const sidebar = document.querySelector(".sidebar-container");
    const closeBtn = document.querySelector(".close-button");

    function openSidebar(){
        console.log("hai")
        sidebar.classList.add("show-sidebar")
    }

    function closeSidebar(){
        console.log("Haui")
        sidebar.classList.remove("show-sidebar")

    }
    hamburger.addEventListener("click",openSidebar)

    closeBtn.addEventListener("click", closeSidebar)
}
init();

function stickyNav(){
    const navbarContainer = document.querySelector(".nav-container");

    window.addEventListener("scroll",function(){
    const scrollNumber = this.window.scrollY;
    const targetNumber = this.window.innerWidth >= 992 ? 70:50;
    if(scrollNumber>=targetNumber){
        navbarContainer.classList.add("sticky-nav")

    } 
    else{
        navbarContainer.classList.remove("sticky-nav")
    }
})
}
stickyNav()

