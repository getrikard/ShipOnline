function showAddNewAddress() {
    let htmlshowAddNewAddress = ` <div id="content">
        <table>
            <tr>
                <td>
                    Address Type:
                </td>
                <td>
                 <select id="addTypeAddressType">
                    <option>Visiting</option>
                    <option>PO box</option>
                    <option>Placeholder</option>
                </select>
                </td>
            </tr>
                <td>
                    Address:
                </td>
                <td>
                    <input type="text" id="inputAddress">
                </td>
            </tr>
            <tr>
                <td>
                    Place:
                </td>
                <td>
                    <input type="text" id="addressPlace">
                </td>
            </tr>
            <tr>
            <tr>
            <tr>
                <td>
                    Postal Code:
                </td>
                <td>
                    <input type="number" id="addressPostal">
                </td>
            </tr>
            <tr>
                <td>
                    Country:
                </td>
                <td>
                    <input type="text" id="addressCountry">
                </td>
            </tr>
        </table>

        <button onclick="showAddress()">Cancel</button>
        <button onclick="addNewAddress()">Save</button>
    <div id="content">
    `;
    model.view.mainContentIsGrid = false;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 0; // 0 = companies
    model.view.showLeftNavigation = false;
    model.view.mainContent = htmlshowAddNewAddress;
    show();
}

function addNewAddress() {
    const inputAddress = document.getElementById('inputAddress').value;
    const addressType = document.getElementById('addTypeAddressType').value;
    const addressPlace = document.getElementById('addressPlace').value;
    const addressPostal = document.getElementById('addressPostal').value;
    const addressCountry = document.getElementById('addressCountry').value;

    const addressToPush = {
        adress: inputAddress,
        type: addressType,
        place: addressPlace,
        postal: addressPostal,
        country: addressCountry,
    };
    if (addressToPush.inputAddress !== '' && addressToPush.place !== '') {
        model.data.companies[model.data.currentCompanyID].adresses.push(addressToPush);
    } else return;
    showAddress();
}
