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
                    <select id="addCountryInput">
                        <option>NOR</option>
                        <option>SWE</option>
                        <option>DNK</option>
                        <option>GER</option>
                    </select>
                </td>
            </tr>
        </table>

        <button onclick="backToCompanies()">Cancel</button>
        <button onclick="addCompanyToModel()">Save</button>
    <div id="content">
    `;
    model.view.mainContentIsGrid = false;
    model.view.showTopNavigation = true;
    model.view.mainContent = html;
    show();
}

function addCompanyToModel() {
    const name = document.getElementById('addNameInput').value;
    const categories = document.getElementById('addCategoryInput').value.split(',');
    const place = document.getElementById('addPlaceInput').value;
    const country = document.getElementById('addCountryInput').value;
    const company = {
        isFavorite: false,
        name: name,
        categories: categories,
        place: place,
        country: country
    };
    model.data.companies.push(company);
    backToCompanies();
}

function backToCompanies() {
    showCompanies();
    show();
}