function showShipsList() {
  let htmlShips =
    ` <div id="content"> <div class="topLineInContent">
        <span id="companyButton"><b>SP</b>SHIPBASE Company ➡ </span>
        <a href="javascript:showAddCompany()">Add Ships</a>
        </div>
    <table>
  <tr>
    <th>Name of ship</th>
    <th>Type</th>
    <th>Location</th>
    <th>Fishing ID</th>
    <th class ="myCompanyTab" onclick="showFavCompanies()">My Ship</th>
    <th>Groups</th>
  </tr>`;

    let showShips = model.data.companies;
    showShips.map((num) => {
        htmlShips += `<tr>
            <td onclick="" class="clickAble">${num.name}</td>
            <td>${num.categories}</td>
            <td>${num.place}</td>
            <td>${num.country}</td>
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