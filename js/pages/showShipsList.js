function showShipsList() {
  let htmlShips =
    ` <div id="content"> <div class="topLineInContent">
        <span id="companyButton"><b>SP</b>SHIPBASE Company ➡ </span>
        <a href="javascript:showAddCompany()">Add Ships</a>
        </div>
${getShipsTable()}
    <th class ="myCompanyTab" onclick="showShipsFav()">My Ship</th>
  </tr>`;

    let showShips = model.data.fleet;
    showShips.map((num) => {
        htmlShips += `<tr>
            <td onclick="" class="clickAble">${num.name}</td>
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

  htmlShips += `</table> </div>`;

  model.view.mainContentIsGrid = false;
  model.view.showTopNavigation = true;
  model.view.topNavigationActive = 1; // 1 = ships
  model.view.mainContent = htmlShips;
  show();
};