// Theme
var theme = "auto";
if (document.location.search.indexOf("theme=") >= 0) {
    theme = document.location.search.split("theme=")[1].split("&")[0];
}

// Init App
var app = new Framework7({
    id: "io.framework7.testapp",
    root: "#app",
    theme: theme,
    routes: routes
});



var $ = require("jquery");

const shell = require("electron").shell;

// assuming $ is jQuery
$(document).on("click", "a[href^=\"http\"]", function(event) {
    event.preventDefault();
    shell.openExternal(this.href);
});