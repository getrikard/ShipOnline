function showShipsList() {
  let htmlShips =
    ` <div id="content"> <div class="topLineInContent">
        ${getShipButton()}
        ${getShipsTable()}
    <th class="myCompanyTab centerTdFavorite" onclick="showShipsFav()">Favorite</th>
  </tr>`;

    let showShips = model.data.fleet;
    showShips.map((num, id) => {
        htmlShips += `<tr>
            <td onclick="showThisShip(${id})" class="clickAble">${num.name}</td>
            <td>${num.GT}</td>
            <td>${num.MDWT}</td>
            <td>${num.built}</td>
            <td>${num.callsign}</td>
            <td>${num.type == 'fishing' ? num.fishID : ''}</td>
            <td>${num.flag}</td>
            <td class="centerTdFavoriteStar">${num.isFavorite ? '*' : ''}</td>
            <td></td>
        </tr>`;
    });

  htmlShips += `</table> </div>`;

  model.view.mainContentIsGrid = false;
  model.view.showTopNavigation = true;
  model.view.topNavigationActive = 1; // 1 = ships
  model.view.showLeftNavigation = false;
  model.view.mainContent = htmlShips;
  show();
};