function openTab(evt, favName) {
    var tabItem, tabLinks;

    tabItem = document.querySelectorAll(".tabItem");
    tabItem.forEach(function (item) {
        item.style.display = "none";
    });
    tabLinks = document.querySelectorAll(".tabLinks");
    tabLinks.forEach(function (link) {
        link.className = link.className.replace(" active", "");
    });
    document.getElementById(favName).style.display = "block";
    evt.currentTarget.className += " active";

    console.log(favName);
}