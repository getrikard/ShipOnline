let content = document.getElementById('content');

show();
function show() {
    content.innerHTML = model.view.currentContent;
}