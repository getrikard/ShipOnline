function showLandingPage() {
    if (model.data.username === undefined) {
        showLoginPage();
    }
    else {
        showRealLandingPage();
    }
}

function showRealLandingPage() {
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

function showLoginPage() {
    let html = `
        <div id="content"><div id="imgContainerShip">
            <div class="LandingPage" style="padding:50px;" onkeydown="if (event.keyCode===13) { login(); }">
                <table class="login-form">
                    <tr>
                        <td>
                            <label>
                                Username:<br>
                                <input id="login-username" type="text">
                            </label>
                        </td>
                        <td>
                            <label>
                                Password:<br>
                                <input id="login-passwd" type="password">
                            </label>
                        </td>
                        <td>
                            &nbsp;<br>
                            <button onclick="login()">Log in</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        </div>
    `;

    model.view.mainContent = html;

    model.view.mainContentIsGrid = false;
    model.view.showTopNavigation = false;
    model.view.showLeftNavigation = false;

    show();
}

function login() {
    let username = document.getElementById('login-username').value;
    let passwd = document.getElementById('login-passwd').value;
    
    if (username == '' || username.length < 3 || passwd == '' || passwd.length < 3) {
        return;
    }
    
    console.log(`Logged in as "${username}".`);

    model.data.username = username;

    showRealLandingPage();
}