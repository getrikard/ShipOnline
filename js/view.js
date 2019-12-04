let content = document.getElementById('mainContent');

showLandingPage();
function show() {
    content.innerHTML = model.view.mainContent;
}