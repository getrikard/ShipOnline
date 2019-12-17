function showCompanyIdNo() {
    let htmlShowCompanyIdNo = `
			${getLeftBarHTML()}
            <div id="content">
                ${getCompanyButton()}
                <table>
					<tr>
						<th>${companyData.companies[model.data.currentCompanyID].name}<th>
					</tr>
					<tr>
						<th>${companyData.companies[model.data.currentCompanyID].country}<th>
					</tr>
                </table>
                <table>
                    <tr style="font-weight: bold";><td>Company ID no:</td></tr>
                    <tr><td>Type:</td><td>Number:</td>
                    <tr><td>IMO:</td></tr>
                    <tr><td>Enterprise:</td></tr>
                    <tr><td>Custom:</td></tr>
                </table>
                <table>
                <tr><td>Add new:</td></tr>
                </table>
                `;

    htmlShowCompanyIdNo += ` </table> ${getInnerChangeOrSave()} ${getInnerAddOrSave()} ${getInnerFooter()}</div>`;

    model.view.mainContentIsGrid = true;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 0; // 0 = companies
    model.view.showLeftNavigation = true;
    model.view.leftNavigationActive = 5; // 5 = compID
    model.view.mainContent = htmlShowCompanyIdNo;
    show();
}