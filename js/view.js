let content = document.getElementById('mainContent');
let topMenuButtons = document.getElementsByClassName('topMenuButtons');
let topNav = document.getElementById('topMenu');
let topNavHtml = `
    <span class="topMenuButtons" onclick="highlightActive(0); showCompanies();">Companies</span>
    <span class="topMenuButtons" onclick="highlightActive(1); showShipsList();">Ships</span>
    <span class="topMenuButtons" onclick="highlightActive(2); showContactsList();">Contacts</span>`;

showLandingPage();
function show() {
    content.innerHTML = model.view.mainContent;
    content.style.display = model.view.mainContentIsGrid ? 'grid' : 'block';

    for (let i = 0; i < topMenuButtons.length; i++) {
        element = topMenuButtons[i];
        element.classList.remove("active");
    }
    topNav.innerHTML = model.view.showTopNavigation ? topNavHtml : '';
    topMenuButtons[model.view.topNavigationActive].classList.add("active");
}