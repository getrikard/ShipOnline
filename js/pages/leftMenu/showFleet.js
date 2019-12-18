function showFleet() {
    let htmlShowFleet = `
    ${ getLeftBarHTML() }
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
                            <tr style="font-weight: bold"; ><td>Document Name:</td><td>Date:</td></tr>
                        <tr style="font-weight: bold"; ><td>Subject:</td><td>Project:</td></tr>
                    <tr><td>Type:</td><td>Person:</td>
                        <tr><td>Updated by:</td></tr>
                    </table>
                    <table>
                        <tr><td>Sharing:</td></tr>
                        <tr><td>Groups:</td></tr>
                        <tr><td>Link to document:</td></tr>
                    </table>
                `;
    
    htmlShowFleet += ` </table> ${getInnerChangeOrSave()} ${getInnerAddOrSave()} ${getInnerFooter()}</div>`;

    model.view.mainContentIsGrid = true;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 0; // 0 = companies
    model.view.showLeftNavigation = true;
    model.view.leftNavigationActive = 7; // 7 = fleet
    model.view.mainContent = htmlShowFleet;
    show();
}