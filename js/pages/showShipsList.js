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
  for (let i = 0; i < model.data.companies.length; i++) {
    let company = model.data.companies[i];
    htmlShips += `
        <tr>
        <td onclick="showCompany(${i}); console.log(${i})" class ="clickAble">${company.name}</td>
        <td>${company.categories}</td>
        <td>${company.place}</td>
        <td>${company.country}</td>
        <td id="centerTdFavorite">${company.isFavorite ? '⭐' : ''}</td>
        <td></td>
  </tr>`;
  };

  htmlShips += `</table> </div>`;

  model.view.mainContentIsGrid = false;
  model.view.showTopNavigation = true;
  model.view.topNavigationActive = 1; // 1 = ships
  model.view.mainContent = htmlShips;
  show();
};