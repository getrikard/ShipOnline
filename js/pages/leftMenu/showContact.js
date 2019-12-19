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
                <tr><td>Martin Andersen</td>
                <td>Company:</td></tr>
                <tr><td>Communication:</td></tr>
                <tr><td>Sharing:</td>
                <td>Groups:</td></tr>
                <tr><td>Private Adress:</td><td>Place:</td></tr>
                <tr><td>Private Communication:</td></tr>
                <tr><td>Education:</td></tr>
                <tr><td>Sertificate:</td></tr>
                <tr><td>Member:</td></tr>
                <tr><td>Vessels:</td></tr>
                <tr><td>Next of kind:</td></tr>
                <tr><td>Notes / Documents:</td></tr>
                <tr><td>Images:</td></tr>
                <tr><td>Calender:</td></tr>
                <tr><td>History:</td></tr>
            </table>
            
            <!-- <div class="rightContact">
            Stillings Type:
            </div>
            <div class="leftContact">
            Department Type:
            </div> -->
            
            ${getInnerChangeOrSave()}`;

    showContactHTML += `${getInnerFooter()} `;

    model.view.mainContentIsGrid = true;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 0; // 0 = companies
    model.view.showLeftNavigation = true;
    model.view.leftNavigationActive = 3; // 3 = contacts
    model.view.mainContent = showContactHTML;
    show();
}