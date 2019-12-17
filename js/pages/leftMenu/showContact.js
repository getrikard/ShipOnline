function showContact() {
    let showContactHTML = `
			${getLeftBarHTML()}
			
            <div id="content">
        <span id="companyButton""><b>SP</b>SHIPBASE Company ➡ </span>
        <a href="javascript:showAddCompany()">Add Contact</a>
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
                
                
                <div class="rightContact">
                Stillings Type:
                </div>
                <div class="leftContact">
                Department Type:
                </div>
                
               
            <div class="changeAddNewBottomBar">
                <span>Web</span>
                <span>Change</span>
                <span>Save</span>
                <span>Add New</span>
                <span>Cancel</span>
            </div>
          	`;

    showContactHTML += `${getInnerFooter()}`;

    model.view.mainContentIsGrid = true;
    model.view.mainContent = showContactHTML;
    show();
}