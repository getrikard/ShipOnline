function showThisShip(id) {
    let thisCompanyNumber = model.data.fleet[id];
    let showSelectedHTML =
        `<div class="selectedShipName"><span>${model.data.fleet[id].name}</span></div>
         <div class="selectedShipNumber">
            <span>${thisCompanyNumber.shipIMO}, Callsign ${thisCompanyNumber.callsign}, Role ${thisCompanyNumber.role}</span>
         </div>
         <div id="content"> <div class="topLineInContent">
            ${getShipButton()}
            ${getShipsTable()}
            <th class ="myCompanyTab" style="text-align:center;" onclick="showShipsFav()">Favorite</th>
        </tr>`;

    let showShips = model.data.fleet;
    showShips.map((num, id) => {
        showSelectedHTML += 
        `<tr>
            <td onclick="showThisShip(${id})" class="clickAble">${num.name}</td>
            <td>${num.GT}</td>
            <td>${num.MDWT}</td>
            <td>${num.built}</td>
            <td>${num.callsign}</td>
            <td>${num.type == 'fishing' ? num.callsign : ''}</td>
            <td>${num.flag}</td>
            <td class="centerTdFavoriteStar">${num.isFavorite ? '*' : ''}</td>
            <td></td>
        </tr>`;
    });

    showSelectedHTML += `</table></div>`;

    model.view.mainContentIsGrid = false;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 1; // 1 = ships
    model.view.showLeftNavigation = false;
    model.view.mainContent = showSelectedHTML;
    show();
};
