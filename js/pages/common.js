function getCompanyAndCountryHTML() {
    let company = model.data.companies[model.data.currentCompanyID];
    return `<div class="countryInfoDiv">
        ${company.name}
    </div>
    <div class="countryInfoDiv" style="margin-bottom: 30px">
        ${company.country}
    </div>`;
}

function getShipButton() {
    return `<span id="companyButton"><b>SP</b>SHIPBASE Vessels ➡ </span>
        <a href="javascript:showAddShip();checkFunction();">Add Vessel</a>
        </div>`;
}

function getLeftBarHTML() {
    return `<div id="leftSide">
        <div class="leftSideButtons" onclick="showCompany()">Company</div>
        <div class="leftSideButtons" onclick="showAddress()">Address</div>
        <div class="leftSideButtons" onclick="showCommunication()">Communication</div>
        <div class="leftSideButtons" onclick="showContact()">Contacts</div>
        <div class="leftSideButtons" onclick="showCategory()">Category</div>
        <div class="leftSideButtons" onclick="showCompanyIdNo()">Company ID no</div>
        <div class="leftSideButtons" onclick="showDocuments()">Documents/Notes</div>
        <div class="leftSideButtons" onclick="showFleet()">Fleet</div>
    </div>`
}

function getInnerFooter() {
    let company = model.data.companies[model.data.currentCompanyID];
    let number, email, web;

    // Sette variablene til sine verdier hvis de finnes i modellen.
    for (comm of company.communications) {
        if (comm.type === 'phone') {
            number = comm.number;
        }
        else if (comm.type === 'email') {
            email = comm.number;
        }
        else if (comm.type === 'web') {
            web = comm.number;
        }
    }

    return `<div class="blueDiv">
        <span id="bottomBarCompanySpan">${company.name}</span>
        <span>${number !== undefined ? '+' + company.phonePrefix + ' ' + number : ''}</span>
        <span>${email !== undefined ? email : ''}</span>
        <span>${web !== undefined ? web : ''}</span>
    </div>`;
}

function getShipsTable() {
    return `    
<table>
    <tr>
    <th>Name:</th>
    <th>GT</th>
    <th>MDWT</th>
    <th>Built</th>
    <th>Callsign</th>
    <th>Fish ID</th>
    <th>Flag</th>`;
};
function getShipTable() {
    return `    
<table>
    <tr>
    <th><i>Type</i>:</th>
    <th>Name:</th>
    <th>GT</th>
    <th>MDWT</th>
    <th>Built</th>
    <th>Callsign</th>
    <th>Fish ID</th>
    <th>Flag</th>`;
};

function getInnerAddOrSave() {
    if (model.data.companies[model.data.currentCompanyID].isFavorite === false)
        return `<div class="myComp notMyComp pointer tracking-in-expand" onclick="addThisCompanyToFavorites()"><span>MY Company?</span></div>`;
    else return `<div class="myComp isMyComp pointer tracking-in-expand"><span onclick="removeThisCompanyFavorite()">My Company</span></div>`;
}
function getInnerAddOrSaveShip() { //<span>Save</span> <span>Cancel</span> 
    return `<div id="saveCancelCompany"><span>Add to MY Ship</span></div>`;
}
function getInnerChangeOrSave() { //<span>Web</span>  <span>Save</span>  <span>Cancel</span> <span>Change</span>
    return ` <div class="changeAddNewBottomBar">
                <span>Add New</span>
            </div>`;
}

function getCountryDropDownList() {
    return `
    <select id="addCountryInput">
        <option>NOR</option>
        <option>SWE</option>
        <option>DNK</option>
        <option>GER</option>
        <option>AFG</option>
        <option>ALB</option>
        <option>DZA</option>
        <option>ASM</option>
        <option>AND</option>
        <option>AGO</option>
        <option>AIA</option>
        <option>ATA</option>
        <option>ATG</option>
        <option>ARG</option>
        <option>ARM</option>
        <option>ABW</option>
        <option>AUS</option>
        <option>AUT</option>
        <option>AZE</option>
        <option>BHS</option>
        <option>BHR</option>
        <option>BGD</option>
        <option>BRB</option>
        <option>BLR</option>
    </select>`;
}

function addThisCompanyToFavorites() {
    model.data.companies[model.data.currentCompanyID].isFavorite = true;
    showCompany();
}

function removeThisCompanyFavorite() {
    model.data.companies[model.data.currentCompanyID].isFavorite = false;
    showCompany();
}

function addSpacer() {
    return `<div class="spacerTable"></div>`;
}