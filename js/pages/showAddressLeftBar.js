function showAddressLeftBar() {
        let htmlShowAddressLeftBar = `
			${getLeftBarHTML()}
			
            <div id="content">
				<table>
					<tr>
						<th colspan="2">${companyData.companies[model.data.currentCompanyID].name}</th>
					</tr>
					<tr>
						<th colspan="2">${companyData.companies[model.data.currentCompanyID].country}</th>
					</tr>
                </table>
                <div class="addressType">Visiting address</div>
                <table>
					<tr>
					<td></td>
					<td>
						</td>
					</tr>
					<tr>
					<td></td>
					<td></td>
					</tr>
					<tr>
					<td></td> 
					<td></td>
					</tr>
					<tr>
					<td></td>
					<td></td>
					</tr>
					<tr>
					<td></td>
					<td></td>
					</tr>
				</table>
            <div>







          	`;


        model.view.mainContentIsGrid = true;
        model.view.mainContent = htmlShowAddressLeftBar;
        show();
}