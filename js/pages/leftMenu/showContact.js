function showContact() {
    let showContactHTML = `
			${getLeftBarHTML()}
            
            <div>
                <div>
                    <div class="topLineInContent">
                        <div id="addTopRight">
                            <span id="companyButton""><b>SP</b>SHIPBASE Contacts ➡ </span>
                            <a href="javascript:showAddContacts()">Add Contacts</a>
                        </div>
                    </div>
                </div>
                ${getCompanyAndCountryHTML()}
                <div id="content">
                
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
                </table>
                ${getInnerChangeOrSave()}
                
                <!-- <div class="rightContact">
                Stillings Type:
                </div>
                <div class="leftContact">
                Department Type:
                </div> -->
                
                `;

    showContactHTML += `${getInnerFooter()} </div>`;

    model.view.mainContentIsGrid = true;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 0; // 0 = companies
    model.view.showLeftNavigation = true;
    model.view.leftNavigationActive = 3; // 3 = contacts
    model.view.mainContent = showContactHTML;
    show();
}
