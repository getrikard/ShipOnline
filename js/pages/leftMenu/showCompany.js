﻿let companyData = model.data;
function showCompany() {
	let element = model.data.currentCompanyID;
	let htmlShowCompany = `
			${getLeftBarHTML()}
			<div>
				<div>
					<div class="topLineInContent">
						<div id="addTopRight">
							<span id="companyButton""><b>SP</b>SHIPBASE Company ➡ </span>
							<a href="javascript:showAddCommunication()">Add Communication</a>
						</div>
					</div>
				</div>
				${getCompanyAndCountryHTML()}
				<div id="content">
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
								<td> <b>Visit adress</b> </td>
							<td>
								${companyData.companies[element].adresses[0].adress}  
								${companyData.companies[element].adresses[0].postal}
								${companyData.companies[element].adresses[0].place}
							</td>
						</tr>
						<tr>
							<td> ${companyData.companies[element].adresses[1].type} </td>
							<td> 
								${companyData.companies[element].adresses[1].adress}

							</td>
						</tr>
						<tr>
							<td> Invoice  </td> 
							<td>   </td>
						</tr>
						<tr>
							<td> ${companyData.companies[element].communications[0].type} </td>
							<td> ${companyData.companies[element].communications[0].number} </td>
						</tr>
						<tr>
							<td> ${companyData.companies[element].communications[1].type} </td>
							<td> ${companyData.companies[element].communications[1].number} </td>
						</tr>
					</table> ${ getInnerChangeOrSave()}${getInnerFooter()}</div>
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