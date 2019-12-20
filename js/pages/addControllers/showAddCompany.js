function showAddCompany() {
    let html = ` <div id="content">
        <table>
            <tr>
                <td>
                    Name:
                </td>
                <td>
                    <input type="text" id="addNameInput">
                </td>
            </tr>
            <tr>
                <td>
                    Category:
                </td>
                <td>
                    <input type="text" id="addCategoryInput">
                </td>
            </tr>
            <tr>
                <td>
                    Place:
                </td>
                <td>
                    <input type="text" id="addPlaceInput">
                </td>
            </tr>
            <tr>
                <td>
                    Country:
                </td>
                <td>
                    ${getCountryDropDownList()}
                </td>
            </tr>
        </table>

        <button onclick="showCompanies()">Cancel</button>
        <button onclick="addCompanyToModel()">Save</button>
    `;
    model.view.mainContentIsGrid = false;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 0; // 0 = companies
    model.view.showLeftNavigation = false;
    model.view.mainContent = html;
    show();
}

function addCompanyToModel() {
    const name = document.getElementById('addNameInput').value;
    const categories = document.getElementById('addCategoryInput').value.split(',');
    const place = document.getElementById('addPlaceInput').value;
    const country = document.getElementById('addCountryInput').value;

    if (name === '' || categories === '' || place === '') {
        return;
    }

    const company = {
        isFavorite: false,
        name: name,
        categories: categories,
        place: place,
        country: country
    };
    model.data.companies.push(company);
    showCompanies();
}