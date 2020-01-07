﻿function showCommunication() {
    let company = model.data.companies[model.data.currentCompanyID];
    let showCommunicationHTML = `
        ${getLeftBarHTML()}
        
        <div>
            <div>
                <div class="topLineInContent">
                    <div id="addTopRight">
                        <span id="companyButton""><b>SP</b>SHIPBASE Company ➡ </span>
                        <a href="javascript:showAddCommunication()">Add Communication</a>
                    </div>
                </div>
            </div>
            ${getCompanyAndCountryHTML()}
            <div id="content">
                <table>
                ${addSpacer()}
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
        <div class="changeAddNewBottomBar"> <span onclick="showAddCommunication()">Add New</span></div>${getInnerFooter()}</div></div>`;

    model.view.mainContentIsGrid = true;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 0; // 0 = companies
    model.view.showLeftNavigation = true;
    model.view.leftNavigationActive = 2; // 2 = communication
    model.view.mainContent = showCommunicationHTML;
    show();
}