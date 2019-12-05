let companiesActive = document.getElementById("companiesActive");
let topMenuButtons = document.getElementsByClassName('topMenuButtons');
//companiesActive.classList.toggle("active");

function highlightActive(activeElement) {
    element = activeElement;

    !activeElement.classList.contains("active") ? activeElement.classList.add("active")
    : activeElement.classList.remove("active");
}

function getCompanyAndCountryHTML() {
    return `<div class="countryInfoDiv">
        MarineExpo
    </div>
    <div class="countryInfoDiv">
        NOR Norway
    </div>`;
}