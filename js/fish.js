fish();
function fish() {
    return (
        $("#footer-wrap").css({
            position: "absolute",
            "text-align": "center",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
        }),
            $("footer").append(
                '<div class="container" id="jsi-flying-fish-container"></div>'
            ),
            $("body").append(
                '<script src="https://cdn.jsdelivr.net/gh/xiabo2/CDN@latest/fish.js"></script>'
            ),
            this
    );
}

var mobile_sidebar_menus = document.getElementById("mobile-sidebar-menus");
var menus_item_child = mobile_sidebar_menus.getElementsByClassName(
    "menus_item_child"
);
var menus_expand = mobile_sidebar_menus.getElementsByClassName("menus-expand");
for (var i = 0; i < menus_item_child.length; i++) {
    menus_item_child[i].style.display = "none";
    menus_expand[i].className += " menus-closed";
}
