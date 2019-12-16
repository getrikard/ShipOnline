// JavaScript source code
function showShipsFav() {
    let htmlShipsFav =
        ` <div id="content"> <div class="topLineInContent">
${getShipButton()}
${getShipsTable()}
    <th class ="myCompanyTab centerTdFavorite" onclick="showShipsList()">My Ship</th>
    <br><br>
  </tr>`;

    let showFavShips = model.data.fleet;
    showFavShips.map((num, id) => {
        if (showFavShips[id].isFavorite) htmlShipsFav += `<tr>
            <td onclick="showThisShip(${id})" class="clickAble">${num.name}</td>
            <td>${num.GT}</td>
            <td>${num.MDWT}</td>
            <td>${num.built}</td>
            <td>${num.callsign}</td>
            <td>${num.type == 'fishing' ? num.callsign : ''}</td>
            <td>${num.flag}</td>
            <td class="centerTdFavorite">${num.isFavorite ? '⭐' : ''}</td>
            <td></td>
        </tr>`;
    });

    htmlShipsFav += `</table> </div>`;

    model.view.mainContentIsGrid = false;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 1; // 1 = ships
    model.view.mainContent = htmlShipsFav;
    show();
};