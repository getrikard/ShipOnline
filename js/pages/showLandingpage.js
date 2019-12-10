function showLandingPage() {
    model.view.mainContent = `  <div id="content">
    <div class="LandingPage">
    <div id="companiesIcon" onclick="showCompanies()"><img src="IMG/company.png" alt="picture"></div>
    <div id="shipsIcon" onclick="showShipsList()"><img src="IMG/Ship icon blue.png" alt="picture"></div>
    <div id="contractIcon" onclick="showContactsList()"><img  src="IMG/contract.png" alt="picture"></div>
</div>
        </div>
</div>`;
    show();
}