function showAddNewCompanyID() {
    let htmlAddNewShip = ` <div id="content">
        <table>
            <tr>
                <td>
                    Type:
                </td>
                <td>
                    <input type="text" id="addCompanyIdType">
                </td>
            </tr>
            <tr>
                <td>
                    Number:
                </td>
                <td>
                    <input type="number" id="CompanyIdNumber">
                </td>
            </tr>
        </table>

        <button onclick="showCompanyIdNo()">Cancel</button>
        <button onclick="addNewIdCompany()">Save</button>
    <div id="content">
    `;
    model.view.mainContentIsGrid = false;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 0; // 0 = companies
    model.view.showLeftNavigation = false;
    model.view.mainContent = htmlAddNewShip;
    show();
}

function addNewIdCompany() {
    const companyIdType = document.getElementById('addCompanyIdType').value;
    const companyIdNumber = document.getElementById('CompanyIdNumber').value;

    const companyId = {
        type: companyIdType,
        number: companyIdNumber,
    };
    if (companyId.type !== '' && companyId.number !== '') {
        model.data.companies[model.data.currentCompanyID].companyNo.push(companyId);
    } else return;
    showCompanyIdNo();
}