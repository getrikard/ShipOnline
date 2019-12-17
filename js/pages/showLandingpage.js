function showLandingPage() {
    model.view.mainContent = `<div id="content">
        <div class="LandingPage">
            <div class="landingbutton" onclick="showCompanies()">
                <img src="IMG/company.png" alt="picture">
                <br>
                <strong style="color: #325986">Companies</strong>
            </div>
            <div class="landingbutton" onclick="showShipsList()">
                <img src="IMG/Ship icon blue.png" alt="picture">
                <br>
                <strong style="color: #325986">Vessels</strong>
            </div>
            <div class="landingbutton" onclick="showContactsList()">
                <img  src="IMG/contact.png" alt="picture">
                <br>
                <strong style="color: #325986">Contacts</strong>
            </div>
        </div>
    </div>`;

    model.view.mainContentIsGrid = false;
    model.view.showTopNavigation = false;
    model.view.showLeftNavigation = false;

    show();
}