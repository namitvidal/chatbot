jQuery(
    (function ($) {
        $(".accordion > li:eq(0) .faq-head").addClass("active").next().slideDown();
        $(".accordion .faq-head").on("click", function (j) {
            var dropDown = $(this).closest("li").find(".faq-content");
            $(this).closest(".accordion").find(".faq-content").not(dropDown).slideUp(300);
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
            } else {
                $(this).closest(".accordion").find(".faq-head.active").removeClass("active");
                $(this).addClass("active");
            }
            dropDown.stop(false, true).slideToggle(300);
            j.preventDefault();
        });
    })(jQuery)
);
function setTheme(themeName) {
    localStorage.setItem("medsev_theme", themeName);
    document.documentElement.className = themeName;
}
function toggleTheme() {
    if (localStorage.getItem("medsev_theme") === "theme-dark") {
        setTheme("theme-light");
    } else {
        setTheme("theme-dark");
    }
}
(function () {
    if (localStorage.getItem("medsev_theme") === "theme-dark") {
        setTheme("theme-dark");
        document.getElementById("slider").checked = false;
    } else {
        setTheme("theme-light");
        document.getElementById("slider").checked = true;
    }
})();
