let content = document.getElementById('mainContent');
let topMenuButtons = document.getElementsByClassName('topMenuButtons');
let leftSideButtons = document.getElementsByClassName('leftSideButtons');
let topNav = document.getElementById('topMenu');
let leftMenuButtons = document.getElementsByClassName('leftSideButtons');

let topNavHtml = `
    <span class="topMenuButtons" onclick="showCompanies();">Companies</span>
    <span class="topMenuButtons" onclick="showShipsList();">Vessels</span>
    <span class="topMenuButtons" onclick="showContactsList();">Contacts</span>`;

showLandingPage();
function show() {
    content.innerHTML = model.view.mainContent;
    content.style.display = model.view.mainContentIsGrid ? 'grid' : 'block';

    topNav.innerHTML = model.view.showTopNavigation ? topNavHtml : '';
    if (model.view.showTopNavigation) {
        for (let i = 0; i < topMenuButtons.length; i++) {
            element = topMenuButtons[i];
            element.classList.remove("active");
        }
        topMenuButtons[model.view.topNavigationActive].classList.add("active");
    }

    if (model.view.showLeftNavigation) {
        for (let i = 0; i < leftSideButtons.length; i++) {
            element = leftSideButtons[i];
            element.classList.remove("active-left");
        }
        leftSideButtons[model.view.leftNavigationActive].classList.add("active-left");
    }
}
