function showLandingPage() {
    model.view.mainContent = `  <div id="content">
    <div class="LandingPage">
    <div class="landingbutton" onclick="showCompanies()"><img src="IMG/company.png" alt="picture"></div>
    <div class="landingbutton" onclick="showShipsList()"><img src="IMG/Ship icon blue.png" alt="picture"></div>
    <div class="landingbutton" onclick="showContactsList()"><img  src="IMG/contract.png" alt="picture"></div>
</div>
</div>`;
    show();
}