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
            </tr>
            <tr>
                <td>
                    MDWT:
                </td>
                <td>
                    <input type="text" id="addMdwtInput">
                </td>
            </tr>
            <tr>
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
                <td>
                    Flag: ${getCountryDropDownList()}
                </td>
                <td>
                </td>
            </tr>
        </table>

        <button onclick="showShipsList()">Cancel</button>
        <button onclick="addShipToModel()">Save</button>
    <div id="content">
    `;
    model.view.mainContentIsGrid = false;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 1; // 0 = companies
    model.view.mainContent = htmlAddNewShip;
    show();
}

function addShipToModel() {
    const name = document.getElementById('addNameInput').value;
    const MDWT = document.getElementById('addMdwtInput').value.split(',');
    const GT = document.getElementById('addGtinput').value;
    const built = document.getElementById('addBuiltInput').value;
    const callSign = document.getElementById('addCallsignInput').value;
    const fishId = document.getElementById('addFishIdInput').value
    const flag = document.getElementById('addCountryInput').value


    const ship = {
        name: name,
        isFavorite: false,
        MDWT: MDWT,
        GT: GT,
        built: built,
        callsign: callSign,
        fishID: fishId,
        flag: flag,
    };
    model.data.fleet.push(ship);
    showShipsList();
}