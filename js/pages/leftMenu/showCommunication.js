function showCommunication() {
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
                    </tr>
				</table>

            <div class="changeAddNewBottomBar">
                <span>Web</span>
                <span>Change</span>
                <span>Save</span>
                <span>Add New</span>
                <span>Cancel</span>
            </div>
          	`;


        model.view.mainContentIsGrid = true;
        model.view.mainContent = showCommunicationHTML;
        show();
}