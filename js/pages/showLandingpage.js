function showLandingPage() {
    model.view.mainContent = `<div id="landingPage">
        <span onclick="showCompanies()">Companies</span>
        <span onclick="">Ships</span>
        <span onclick="">Contacts</span>
    </div>
    <div id="leftSide"></div>`;
    show();
}