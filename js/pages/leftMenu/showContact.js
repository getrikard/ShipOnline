function showContact() {
    let showContactHTML = `
			${getLeftBarHTML()}
			
            <div id="content">
                <div class="topLineInContent">
                    <span id="companyButton""><b>SP</b>SHIPBASE Company ➡ </span>
                    <div id="addTopRight">Add Contacts</div>
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
                ${addSpacer()}
                <tr><td>Martin Andersen</td>
                <td><b>Company</b>:</td></tr>
                <tr><td><b>Communication</b>:</td></tr>
                <tr><td><b>Sharing</b>:</td>
                <td><b>Groups</b>:</td></tr>
                <tr><td><b>Private Adress</b>:</td><td><b>Place</b>:</td></tr>
                <tr><td><b>Private Communication</b>:</td></tr>
                <tr><td><b>Education</b>:</td></tr>
                <tr><td><b>Sertificate</b>:</td></tr>
                <tr><td><b>Member</b>:</td></tr>
                <tr><td><b>Vessels</b>:</td></tr>
                <tr><td><b>Next of kind</b>:</td></tr>
                <tr><td><b>Notes / Documents</b>:</td></tr>
                <tr><td><b>Images</b>:</td></tr>
                <tr><td><b>Calender</b>:</td></tr>
                <tr><td><b>History</b>:</td></tr>
            </table>                 ${getInnerChangeOrSave()}
            
            <!-- <div class="rightContact">
            Stillings Type:
            </div>
            <div class="leftContact">
            Department Type:
            </div> -->
            
            `;

    showContactHTML += `${getInnerFooter()} `;

    model.view.mainContentIsGrid = true;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 0; // 0 = companies
    model.view.showLeftNavigation = true;
    model.view.leftNavigationActive = 3; // 3 = contacts
    model.view.mainContent = showContactHTML;
    show();
}
