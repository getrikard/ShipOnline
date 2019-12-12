function showCommunication() {
    let company = model.data.companies[model.data.currentCompanyID];
    let showCommunicationHTML = `
        ${getLeftBarHTML()}
        
        <div id="content">
            <span id="companyButton""><b>SP</b>SHIPBASE Company ➡ </span>
            <a href="javascript:showAddCompany()">Add Company</a>
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
                    <td>+${company.phonePrefix} ${company.communications[0].number}</td>
                </tr>
            </table>

            <div class="changeAddNewBottomBar">
                <span>Web</span>
                <span>Change</span>
                <span>Save</span>
                <span>Add New</span>
                <span>Cancel</span>
            </div>

            ${getInnerFooter()}
        </div>`;

    model.view.mainContentIsGrid = true;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 0; // 0 = companies
    model.view.mainContent = showCommunicationHTML;
    show();
}