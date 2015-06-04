// Injects all the scripts into the body of the page

var scripts = ["jquery.js", "dymo.js", "sn-plugin.js"];

(function() {
    for (var s in scripts) {
        var js = document.createElement('script');
        js.src = chrome.extension.getURL(scripts[s]);
        document.body.appendChild(js);
    }

})();