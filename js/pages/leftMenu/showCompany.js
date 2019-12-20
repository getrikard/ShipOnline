let companyData = model.data;
function showCompany() {
	let element = model.data.currentCompanyID;
	let htmlShowCompany = `
			${getLeftBarHTML()}
            <div id="content">
            <div class="topLineInContent">
                <span id="companyButton""><b>SP</b>SHIPBASE Company ➡ </span>
                <div id="addTopRight">Add Company</div> 
            </div>
				<table>
					<tr>
						<th colspan="2">${companyData.companies[element].name}</th>
					</tr>
					<tr>
						<th colspan="2">${companyData.companies[element].country} </th>
					</tr>
                    </table>
                    ${getInnerAddOrSave()}
                    <table>
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
                    </table> ${ getInnerChangeOrSave()}${ getInnerFooter() }</div>
        </div>
            <div>`;


	model.view.mainContentIsGrid = true;
	model.view.showTopNavigation = true;
    model.view.topNavigationActive = 0; // 0 = companies
    model.view.showLeftNavigation = true;
    model.view.leftNavigationActive = 0; // 0 = company
    model.view.mainContent = htmlShowCompany;
	show();
}