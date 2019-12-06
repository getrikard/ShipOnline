let topMenuButtons = document.getElementsByClassName('topMenuButtons');
//companiesActive.classList.toggle("active");

function highlightActive(activeElement) {
    for (element of topMenuButtons) {
        element.classList.remove("active");
    }
    activeElement.classList.add("active");
}

function getCompanyAndCountryHTML() {
    return `<div class="countryInfoDiv">
        MarineExpo
    </div>
    <div class="countryInfoDiv">
        NOR Norway
    </div>`;
}