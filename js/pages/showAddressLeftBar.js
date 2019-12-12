function showAddressLeftBar() {
        let htmlShowAddressLeftBar = `
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
                <div class="addressType">Visiting address</div><br>
                <table>
					<tr>
					<td>Address here</td>
					</tr>
					<tr>
					<td>Address here</td>
					</tr>
					<tr>
					<td>Address here</td> 
					</tr>
					<tr>
					<td>Postal Code: 4020</td>
					<td>Place: Anywhere</td>
					</tr>
					<tr>
					<td>Country/State:</td>
					</tr>
                    <tr>
                    <td>Nation: Norway</td>
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
        model.view.mainContent = htmlShowAddressLeftBar;
        show();
}