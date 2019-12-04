// JavaScript source code
function showCompanies() {
    let htmlCompany =
        `<table>
  <tr>
    <th>Name</th>
    <th>Catagory</th>
    <th>Place</th>
    <th>Country</th>
    <th>My Company</th>
  </tr>`;

    for (company of model.data.companies) {
        htmlCompany += `
  <tr>
    <td>${company.name}</td>
    <td>${company.categories.join(', ')}</td>
    <td>Oslo</td>
    <td>NOR</td>
    <td>*</td>
  </tr>`
    };

    htmlCompany += `</table>`;

    model.view.mainContent = htmlCompany;
    show();
}
