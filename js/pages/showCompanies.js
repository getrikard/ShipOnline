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
    <th class ="myCompanyTab" onclick="showFavCompanies()">My Company</th>
    <th>Groups</th>
  </tr>`;
    for (let i = 0; i < model.data.companies.length; i++) {
        let company = model.data.companies[i];
        htmlCompanies += `
        <tr>
        <td onclick="showCompany(${i}); console.log(${i})" class ="clickAble">${company.name}</td>
        <td>${company.categories}</td>
        <td>${company.place}</td>
        <td>${company.country}</td>
        <td>${company.isFavorite ? '⭐' : ''}</td>
        <td></td>
  </tr>`;
    };

    htmlCompanies += `</table> </div>`;

    model.view.mainContent = htmlCompanies;
    show();
};