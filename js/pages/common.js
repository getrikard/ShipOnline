let companiesActive = document.getElementById("companiesActive");
let topMenuButtons = document.getElementsByClassName('topMenuButtons');
//companiesActive.classList.toggle("active");

function highlightActive(activeElement) {
    element = activeElement;
    for (let i = 0; i < topMenuButtons.length; i++) {
        if (i == i) {
            activeElement.classList.toggle("active");
        }
    }
}

function getCompanyAndCountryHTML() {
    return `<div class="countryInfoDiv">
        MarineExpo
    </div>
    <div class="countryInfoDiv">
        NOR Norway
    </div>`;
}