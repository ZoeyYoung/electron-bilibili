var webview = document.getElementById("bilibili");
webview.addEventListener('new-window', function (e) {
  console.log(e);
  webview.src = e.url;
});
