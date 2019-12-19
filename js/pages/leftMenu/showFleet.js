﻿function showFleet() {
    let htmlShowFleet = `${getLeftBarHTML()}
<div id="content">
    <table> <div id ="addTopRight"> Show Fleet </div>
    <tr>
        <th>${companyData.companies[model.data.currentCompanyID].name}<th>
					</tr>
            <tr>
                <th>${companyData.companies[model.data.currentCompanyID].country} <span id="tempStyle">${companyData.companies[model.data.currentCompanyID].categories.join(' ')}</span><th>
					</tr>
                    <table>
                        <div class="addressType" >Fleet</div>`;

    //let fleetOfCompany = model.data.companies[model.data.currentCompanyID].fleet
    //fleetOfCompany.map((num) => {
    htmlShowFleet += `${getShipsTable()}<th>Role</th> <th class ="myCompanyTab centerTdFavorite" onclick="showShipsFav()">My Ship</th>`;

    function getRandomNum() {
        var desiredMaxLength = 4
        var randomNumber = '';
        for (var i = 0; i < desiredMaxLength; i++) {
            randomNumber += Math.floor(Math.random() * 10);
        }
        return randomNumber;
    }
    for (let i = 0; i < 3; i -= -1) {
    htmlShowFleet +=
    `<tr>
    <td>This Ship</td>
    <td>${getRandomNum()}</td>
    <td>${getRandomNum()}</td>
    <td>ThisBuilt</td>
    <td>ThisCallsign</td>
    <td>thisType</td>
    <td>ThisFlag</td>
    <td>ThisRole</td>
    <td class="centerTdFavorite">⭐</td>
    <td></td>
    </tr>`;
    }
    //});




    htmlShowFleet += ` </table>
       <div class="changeAddNewBottomBar">
        <span>Web</span>
        <span>Change</span>
        <span>Save</span>
        <span onclick="showAddNewCompanyID()">Add New</span>
        <span>Cancel</span>
        </div> ${getInnerAddOrSave()} ${getInnerFooter()}</div>`;

    model.view.mainContentIsGrid = true;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 0; // 0 = companies
    model.view.showLeftNavigation = true;
    model.view.leftNavigationActive = 7; // 7 = fleet
    model.view.mainContent = htmlShowFleet;
    show();
}
