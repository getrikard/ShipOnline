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
        <div id="contentL">
            <div class="LandingPage ABC" style="padding:50px;" onkeydown="if (event.keyCode===13) { login(); }">
                <table class="login-form">
                <h2>Sign In</h2>

                <input type="text" id="login-username" placeholder="Username" onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Username'">
        
        
                <input type="password" id="login-passwd" placeholder="Password" onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Password'">
        
                <button id="login" onclick="login()">Login</button>
                </table>
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