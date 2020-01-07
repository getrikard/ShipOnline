function showAddShip() {
    let htmlAddNewShip = ` <div id="content">
        <table>
            <tr>
                <td>
                    Ship Name:
                </td>
                <td>
                    <input type="text" id="addNameInput">  
                </td>
                <td>
                    MDWT:
                </td>
                <td>
                    <input type="text" id="addMdwtInput">
                </td>
                <td>
                    GT:
                </td>
                <td>
                    <input type="text" id="addGtinput">
                </td>
            </tr>
            <tr>
                <td>
                    Built:
                </td>
                <td>
                    <input type="text" id="addBuiltInput">
                </td>
                <td>
                    Callsign:
                </td>
                <td>
                    <input type="text" id="addCallsignInput">
                </td>
                <td>
                    Fish ID:
                </td>
                <td>
                    <input type="text" id="addFishIdInput">
                </td>
                <tr>
                <td>
                    IMO NO:
                </td>
                <td>
                    <input type="text" id="addIMOIdInput">
                </td>
                <td>
                    Role:
                </td>
                <td>
                    <input type="text" id="addRoleInput">
                </td>
                <td>
                    Flag: ${getCountryDropDownList()}
                </td>
            </tr>
            </tr>
        </table>
        <div>Add to my ship? <input type="checkbox" id="checkboxFavorite" onclick="checkFunction()" name="favoriteIt" value="isFavorite"></div>
        <button onclick="showShipsList()">Cancel</button>
        <button onclick="addShipToModel()">Save</button>
    `;
    model.view.mainContentIsGrid = false;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 1; // 0 = companies
    model.view.showLeftNavigation = false;
    model.view.mainContent = htmlAddNewShip;
    show();
}

function checkFunction() {
    checkIt = document.getElementById("checkboxFavorite").checked;
    return checkIt;
}

function addShipToModel() {
    const name = document.getElementById('addNameInput').value;
    const MDWT = document.getElementById('addMdwtInput').value.split(',');
    const GT = document.getElementById('addGtinput').value;
    const built = document.getElementById('addBuiltInput').value;
    const callSign = document.getElementById('addCallsignInput').value;
    const fishId = document.getElementById('addFishIdInput').value
    const flag = document.getElementById('addCountryInput').value
    const imo = document.getElementById('addIMOIdInput').value
    const role = document.getElementById('addRoleInput').value


    const ship = {
        name: name,
        isFavorite: checkIt ? true : false, 
        MDWT: MDWT,
        GT: GT,
        built: built,
        callsign: callSign,
        fishID: fishId,
        flag: flag,
        shipIMO: imo,
        role: role,

    };
    if (ship.name !== '' && ship.built !== '' && ship.callsign !== '') {
        model.data.fleet.push(ship);
    } else return;
    showShipsList();
}