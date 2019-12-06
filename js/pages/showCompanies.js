function showCompanies() {
    let htmlCompanies =
        ` <div id="content"> <div class="topLineInContent">
        <a href="javascript:showAddCompany()" id="addCompanyButton">Add Company</a>
        </div>
    <table>
  <tr>
    <th>Name</th>
    <th>Catagory</th>
    <th>Place</th>
    <th>Country</th>
    <th>My Company</th>
  </tr>`;
    for (let i = 0; i < model.data.companies.length; i++) {
        let company = model.data.companies[i];
        htmlCompanies += `
        <tr>
        <td onclick="showCompany()" class ="clickAble">${company.name}</td>
        <td>${company.categories}</td>
        <td>${company.place}</td>
        <td>${company.country}</td>
        <td>${company.isFavorite ? '⭐' : ''}</td>
  </tr>`
    };
    htmlCompanies += `</table> </div>`;

    model.view.mainContent = htmlCompanies;
    show();
}
