function showCompanies() {
    let htmlCompany =
        ` <div class="topLineInContent">
        <a href="javascript:showAddCompany()">Add Company</a>
        </div>
    <table class>
  <tr>
    <th>Name</th>
    <th>Catagory</th>
    <th>Place</th>
    <th>Country</th>
    <th>My Company</th>
  </tr>`;
    for (let i = 0; i < model.data.companies.length; i++) {
        let company = model.data.companies[i];
        htmlCompany += `
        <tr onclick="showCompany(${i})">
        <td>${company.name}</td>
        <td>${company.categories.join(', ')}</td>
        <td>${company.place}</td>
        <td>${company.country}</td>
        <td>${company.isFavorite || ''}</td>
  </tr>`
    };

    htmlCompany += `</table>`;

    model.view.mainContent = htmlCompany;
    show();
}
