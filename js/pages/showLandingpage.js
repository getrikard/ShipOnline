function showLandingPage() {
    model.view.mainContentIsGrid = false;
    model.view.showTopNavigation = false;
    model.view.mainContent = `<div id="content">
        <div class="LandingPage">
            <div class="landingbutton" onclick="showCompanies()">
                <img src="IMG/company.png" alt="picture">
                <br>
                <strong>Companies</strong>
            </div>
            <div class="landingbutton" onclick="showShipsList()">
                <img src="IMG/Ship icon blue.png" alt="picture">
                <br>
                <strong>Ships</strong>
            </div>
            <div class="landingbutton" onclick="showContactsList()">
                <img  src="IMG/contact.png" alt="picture">
                <br>
                <strong>Contacts</strong>
            </div>
        </div>
    </div>`;
    show();

}