﻿function showFleet() {
    let htmlShowFleet = `${getLeftBarHTML()}
<div id="content">
    <table> <div class="topLineInContent"><span id="companyButton""><b>SP</b>SHIPBASE Company ➡ </span> <div id ="addTopRight"> Show Fleet </div> </div> 
    <tr>
        <th>${companyData.companies[model.data.currentCompanyID].name}<th>
					</tr>
            <tr>
                <th>${companyData.companies[model.data.currentCompanyID].country} <span id="tempStyle">${companyData.companies[model.data.currentCompanyID].categories.join(' ')}</span><th>
					</tr>
                    <table>
                        <div class="addressType">Fleet</div>${addSpacer()}`;

    htmlShowFleet += `${getShipTable()}<th>Role</th> <th class ="myCompanyTab centerTdFavorite" onclick="showShipsFav()">My Ship</th>`;

    /*    function getRandomNum() {
            let desiredMaxLength = 4
            let randomNumber = '';
            for (let i = 0; i < desiredMaxLength; i++) {
                randomNumber += Math.floor(Math.random() * 10);
            }
            return randomNumber;
        }*/


    //  let showShipType = model.data.fleet.shipType.map((val) => console.log(val));

    let showShipsFleet = model.data.fleet;
    const type = showShipsFleet.filter((ship) => { if (ship.shipType === 'Fishing') return ship });
    showShipsFleet.map((val, id) => {
        console.log(type);
        htmlShowFleet += `<tr>
            <td>${type}</td>
            <td onclick="showThisShip(${id})"class="clickAble">${val.name}</td>
            <td>${val.GT}</td>
            <td>${val.MDWT}</td>
            <td>${val.built}</td>
            <td>${val.callsign}</td>
            <td>${val.shipType == 'Fishing' ? val.fishID : ''}</td>
            <td>${val.flag}</td>
            <td>${val.role}</td>
            <td class="centerTdFavoriteStar">${val.isFavorite ? '*' : ''}</td>
            </tr>`;
    });




    htmlShowFleet += `</table> ${getInnerChangeOrSave()}${getInnerFooter()}</div>`;

    model.view.mainContentIsGrid = true;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 0; // 0 = companies
    model.view.showLeftNavigation = true;
    model.view.leftNavigationActive = 7; // 7 = fleet
    model.view.mainContent = htmlShowFleet;
    show();
}
