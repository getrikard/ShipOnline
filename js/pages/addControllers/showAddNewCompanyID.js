function showAddNewCompanyID() {
    let htmlshowAddNewCompanyID = ` <div id="content">
        <table>
            <tr>
                <td>
                    Type:
                </td>
                <td>
                 <select id="addTypeId">
                    <option>IMO</option>
                    <option>Enterprise</option>
                    <option>Custom</option>
                </select>
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
    `;
    model.view.mainContentIsGrid = false;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 0; // 0 = companies
    model.view.showLeftNavigation = false;
    model.view.mainContent = htmlshowAddNewCompanyID;
    show();
}

function addNewIdCompany() {
    const companyIdType = document.getElementById('addTypeId').value;
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