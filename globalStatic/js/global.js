function loadJavaScriptCSS(url) {
    var sheet = document.createElement("link");
    sheet.setAttribute("href", url);
    sheet.setAttribute("rel", "stylesheet");
    sheet.setAttribute("type", "text/css");
    document.head.appendChild(sheet);
}