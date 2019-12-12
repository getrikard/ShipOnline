function showAddressLeftBar() {
        let htmlShowAddressLeftBar = `
			${getLeftBarHTML()}
			
            <div id="content">
        <span id="companyButton"><b>SP</b>SHIPBASE Company ➡ </span>
        <a href="javascript:showAddCompany()">Add Company</a>
				<table>
					<tr>
						<th>${companyData.companies[model.data.currentCompanyID].name}<th>
					</tr>
					<tr>
						<th>${companyData.companies[model.data.currentCompanyID].country}<th>
					</tr>
                </table>
                <div class="addressType">Visiting address</div>
                <table>
					<tr>
					<td>h</td>
					<td>h</td>
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