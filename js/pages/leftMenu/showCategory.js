function showCategory() {
    let htmlShowCategory = `
    ${ getLeftBarHTML() }
    <div id="content">
        ${getCompanyButton()}
        <tr>
            <th>${companyData.companies[model.data.currentCompanyID].name}<th>
					</tr>
                <tr>
                    <th>${companyData.companies[model.data.currentCompanyID].country}<th>
					</tr></table>
                        <table><br>
                            <td><b>Category:</b></td></table><table><td>`;

    let categoryOfCompany = model.data.companies[model.data.currentCompanyID].categories;
                categoryOfCompany.map((num) => {
                 htmlShowCategory += `${num}<br>`;
                });
    htmlShowCategory += `</tr></td></table> ${getInnerChangeOrSave()} ${getInnerAddOrSave()} ${getInnerFooter()}</div>`;
                
model.view.mainContentIsGrid = true;
model.view.showTopNavigation = true;
model.view.topNavigationActive = 0; // 0 = companies
model.view.showLeftNavigation = true;
model.view.leftNavigationActive = 4; // 4 = category
model.view.mainContent = htmlShowCategory;
show();
}