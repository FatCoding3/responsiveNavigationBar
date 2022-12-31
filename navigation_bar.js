var lastScrollTop = 0;
var changeDegree = 0;
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document
        .documentElement.scrollTop;
    var scrollChange = scrollTop - lastScrollTop;
    headingHeight = $(window).height()/10;
    changeDegree += (scrollChange/headingHeight)*10;

    changeDegree = (changeDegree < 0) ? 0 : changeDegree;
    changeDegree = (changeDegree > 10) ? 10 : changeDegree;

    var changeValueInString = '-' + changeDegree +'%';
    document.getElementById("heading").style.top = changeValueInString;

    lastScrollTop =  scrollTop;
})

var sidebarOn = false

function toggleSidebar(listId, glassId) {
    document.getElementById("menu_icon").size = "6vh";
    if (sidebarOn) {
        hideSidebar(listId, glassId);
        sidebarOn = false;
    }else {
        showSidebar(listId, glassId);
        sidebarOn = true;
    }
}

function showSidebar(listId, glassId) {
    document.getElementById("body").style.overflowY = "hidden";
    $('#'+listId).animate({width: '100%'}, "0.5s");
    $('#'+glassId).animate({width: '100%'}, "0.5s");
}

function hideSidebar(listId, glassId) {
    document.getElementById("body").style.overflowY = "auto";
    $('#'+listId).animate({width: '0%'}, "0.5s");
    $('#'+glassId).animate({width: '0%'}, "0.5s");
}