// JavaScript source code
function showShipsFav() {
    let htmlShipsFav =
        ` <div id="content"> <div class="topLineInContent">
        <span id="companyButton"><b>SP</b>SHIPBASE Company ➡ </span>
        <a href="javascript:showAddCompany()">Add Ships</a>
        </div>
    <table>
  <tr>
    <th>Ship Name:</th>
    <th>GT</th>
    <th>MDWT</th>
    <th>Built</th>
    <th>Callsign</th>
    <th>Fish ID</th>
    <th>Flag</th>
    <th class ="myCompanyTab" onclick="showShipsList()">My Ship</th>
  </tr>`;

    let showFavShips = model.data.fleet;
    showFavShips.map((num, id) => {
        if (showFavShips[id].isFavorite) htmlShipsFav += `<tr>
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

    htmlShipsFav += `</table> </div>`;

    model.view.mainContentIsGrid = false;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 1; // 1 = ships
    model.view.mainContent = htmlShipsFav;
    show();
};