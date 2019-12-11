let content = document.getElementById('mainContent');

showLandingPage();
function show() {
    content.innerHTML = model.view.mainContent;
    if (model.view.mainContentIsGrid === true) {
        content.style.display = 'grid';
    }
    else {
        content.style.display = 'block';
    }
}