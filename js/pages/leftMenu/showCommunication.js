function showCommunication() {
    let company = model.data.companies[model.data.currentCompanyID];
    let showCommunicationHTML = `
        ${getLeftBarHTML()}
        
        <div id="content">
            <span id="companyButton""><b>SP</b>SHIPBASE Company ➡ </span>
            <a href="javascript:showAddCommunication()">Add Communication</a>
            <table>
                <tr>
                    <th>${companyData.companies[model.data.currentCompanyID].name}<th>
                </tr>
                <tr>
                    <th>${companyData.companies[model.data.currentCompanyID].country}<th>
                </tr>
            </table>

            <table>
                <tr>
                    <th>Department</th>
                    <th></th>
                    <th>Notes</th>
                </tr>`;

    for (comm of company.communications) {
        showCommunicationHTML += `<tr>
            <td>
                ${company.departments[comm.department]}
            </td>
            <td>
                ${comm.type}: 
                ${comm.type === 'phone' || comm.type === 'fax' ? '+<strong>' + company.phonePrefix + '</strong>' : ''}
                ${comm.number}
            </td>
            <td>
                ${comm.notes}
            </td>
        </tr>`
    }

    showCommunicationHTML += `</table>
            <div class="changeAddNewBottomBar">
                <span>Change</span>
                <!--<span>Save</span>
                <span>Add New</span>
                <span>Cancel</span>-->
            </div>

            ${getInnerFooter()}
        </div > `;

    model.view.mainContentIsGrid = true;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 0; // 0 = companies
    model.view.showLeftNavigation = true;
    model.view.leftNavigationActive = 2; // 2 = communication
    model.view.mainContent = showCommunicationHTML;
    show();
}