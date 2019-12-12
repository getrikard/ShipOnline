
function showAddressLeftBar(element) {
        let htmlShowAddressLeftBar = `
			${getLeftBarHTML()}
			
            <div id="content">
				<table>
					<tr>
						<th colspan="2">${companyData.companies[2].name}</th>
					</tr>
					<tr>
						<th colspan="2"></th>
					</tr>

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