function getCompanyAndCountryHTML() {
    let company = model.data.companies[model.data.currentCompanyID];
    return `<div class="countryInfoDiv" style="margin-bottom: 30px">
        ${company.name}
    </div>
    <div class="countryInfoDiv">
        ${company.country}
    </div>`;
}

function getCompanyButton() {
    return `<span id="companyButton""><b>SP</b>SHIPBASE Company ➡ </span>
        <a href = "javascript:showAddCompany()"> Add Company</a>
            <table>`;
}
function getShipButton() {
    return `<span id="companyButton"><b>SP</b>SHIPBASE Company ➡ </span>
        <a href="javascript:showAddShip()">Add Ships</a>
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
        <div class="leftSideButtons" onclick="showHistory()">History</div>
    </div>`
}

function getInnerFooter() {
    return `<div class="blueDiv">
        <span id="bottomBarCompanySpan">Company</span>
        <span>number +47 99999</span>
        <span>info@company.com www.companysite.com</span>
    </div>`;
}

function getShipsTable() {
    return `    
<table>
    <tr>
    <th>Ship Name:</th>
    <th>GT</th>
    <th>MDWT</th>
    <th>Built</th>
    <th>Callsign</th>
    <th>Fish ID</th>
    <th>Flag</th>`;
};

function getInnerAddOrSave() {
    return `<div id="saveCancelCompany"> <span>Save</span> <span>Cancel</span> <span>Add to MY Company</span></div>`;
}
function getInnerAddOrSaveShip() {
    return `<div id="saveCancelCompany"> <span>Save</span> <span>Cancel</span> <span>Add to MY Ship</span></div>`;
}
function getInnerChangeOrSave() {
    return ` <div class="changeAddNewBottomBar">
                <span>Web</span>
                <span>Change</span>
                <span>Save</span>
                <span>Add New</span>
                <span>Cancel</span>
            </div>`;
}

function getCountryDropDownList() {
    return `<select id="addCountryInput">
        <option>NOR</option>
        <option>SWE</option>
        <option>DNK</option>
        <option>GER</option>
    </select>`;
}