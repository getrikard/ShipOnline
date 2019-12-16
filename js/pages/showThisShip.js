function showThisShip(id) {
    let thisCompanyNumber = model.data.companies[id];
    let showSelectedHTML =
        ` <div id="content"> <div class="topLineInContent">
        ${getShipButton()}
        ${getShipsTable()}
    <th class ="myCompanyTab" onclick="showShipsFav()">My Ship</th>
    <span class="selectedShipName">${model.data.fleet[id].name}</span>
<br><br><br>
    <div class="selectedShipNumber"><span>${thisCompanyNumber.companyNo[0].type}</span>  <span>${thisCompanyNumber.companyNo[0].number}</span></div>
<br><br>
  </tr>`;

    let showShips = model.data.fleet;
    showShips.map((num, id) => {
        showSelectedHTML += `<tr>
            <td onclick="showThisShip(${id})" class="clickAble">${num.name}</td>
            <td>${num.GT}</td>
            <td>${num.MDWT}</td>
            <td>${num.built}</td>
            <td>${num.callsign}</td>
            <td>${num.type == 'fishing' ? num.callsign : ''}</td>
            <td>${num.flag}</td>
            <td id="centerTdFavorite">${num.isFavorite ? '⭐' : ''}</td>
            <td></td>
        </tr>`;
    });

    showSelectedHTML += `</table> </div>`;

    model.view.mainContentIsGrid = false;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 1; // 1 = ships
    model.view.mainContent = showSelectedHTML;
    show();
};
    //return `<tr class="showSelectedShip">${model.data.fleet[id].name}</tr>`;
