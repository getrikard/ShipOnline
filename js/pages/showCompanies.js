function showCompanies() {
  let htmlCompanies =
    ` <div id="content"> <div class="topLineInContent">
        <span id="companyButton"><b>SP</b>SHIPBASE Company ➡ </span>
        <a href="javascript:showAddCompany()">Add Company</a>
        </div>
    <table>
        <tr>
            <th>Name</th>
            <th>Catagory</th>
            <th>Place</th>
            <th>Country</th>
            <th>Groups</th>
            <th class="myCompanyTab centerTdFavorite" onclick="showFavCompanies()">Favorite</th>
        </tr>`;

  for (let i = 0; i < model.data.companies.length; i++) {
    let company = model.data.companies[i];
    model.data.currentCompanyID = i;
    htmlCompanies += `
            <tr>
                <td onclick="model.data.currentCompanyID = ${i};showCompany()" class ="clickAble">${company.name}</td>
                <td>${company.categories.join(', ')}</td>
                <td>${company.place[0].toUpperCase() + company.place.substring(1).toLowerCase()}</td>
                <td>${company.country}</td>
                <td></td>
                <td class="centerTdFavoriteStar">${company.isFavorite ? '*' : ''}</td>
           </tr>`;
  };

  htmlCompanies += `</table> </div>`;
  model.view.mainContentIsGrid = false;
  model.view.showTopNavigation = true;
  model.view.topNavigationActive = 0; // 0 = companies
  model.view.showLeftNavigation = false;
  model.view.mainContent = htmlCompanies;
  show();
};