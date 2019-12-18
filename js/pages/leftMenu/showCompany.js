let companyData = model.data;
function showCompany() {
	let element = model.data.currentCompanyID;
	let htmlShowCompany = `
			${getLeftBarHTML()}
			
            <div id="content">
				<table>
					<tr>
						<th colspan="2">${companyData.companies[element].name}</th>
					</tr>
					<tr>
						<th colspan="2">${companyData.companies[element].country} </th>
					</tr>

					<tr>
					<td> visit adress </td>
					<td>
						${companyData.companies[element].adresses[0].adress}  
						${companyData.companies[element].adresses[0].postal}
						${companyData.companies[element].adresses[0].place}
						</td>
					</tr>
					<tr>
					<td> P.O BOX </td>
					<td> b </td>
					</tr>
					<tr>
					<td> Invoice  </td> 
					<td> c  </td>
					</tr>
					<tr>
					<td> Phone </td>
					<td> d </td>
					</tr>
					<tr>
					<td> Email </td>
					<td> e </td>
					</tr>
				</table>
				        <div class="changeAddNewBottomBar">
            <span>Change</span>
            <!--<span>Save</span>
            <span>Add New</span>
            <span>Cancel</span>-->
        </div>
				${getInnerFooter()}
            <div>







          	`;


	model.view.mainContentIsGrid = true;
	model.view.showTopNavigation = true;
    model.view.topNavigationActive = 0; // 0 = companies
    model.view.showLeftNavigation = true;
    model.view.leftNavigationActive = 0; // 0 = company
    model.view.mainContent = htmlShowCompany;
	show();
}