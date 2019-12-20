function showCommunication() {
    let company = model.data.companies[model.data.currentCompanyID];
    let showCommunicationHTML = `
        ${getLeftBarHTML()}
        
        <div id="content">
            <div class="topLineInContent">
                <span id="companyButton""><b>SP</b>SHIPBASE Company ➡ </span>
                <div id="addTopRight">Add Communication</div>
            </div>
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

    showCommunicationHTML += `</table> ${getInnerChangeOrSave()}${getInnerFooter()}</div>`;

    model.view.mainContentIsGrid = true;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 0; // 0 = companies
    model.view.showLeftNavigation = true;
    model.view.leftNavigationActive = 2; // 2 = communication
    model.view.mainContent = showCommunicationHTML;
    show();
}