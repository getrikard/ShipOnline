function showDocuments() {
    let htmlShowDocuments = `
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
                    <tr style="font-weight: bold";><td>Document Name: Test</td><td>Date: 18/12/2019</td></tr>
                    <tr style="font-weight: bold";><td>Subject: Internal Test</td><td>Project: ShipOnline </td></tr>
                    <tr><td>Type: Plain text </td><td>Person: Creator</td></tr>
                    <tr><td>Updated by: Creator</td><td>Sharing: Null</td></tr>
                    <tr><td>Groups: Internal</td><td>Link to document: Null </td></tr>
                </table>
                `;

    htmlShowDocuments += ` </table> ${getInnerChangeOrSave()} ${getInnerAddOrSave()} ${getInnerFooter()}</div>`;

    model.view.mainContentIsGrid = true;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 0; // 0 = companies
    model.view.showLeftNavigation = true;
    model.view.leftNavigationActive = 6; // 6 = documents
    model.view.mainContent = htmlShowDocuments;
    show();
}