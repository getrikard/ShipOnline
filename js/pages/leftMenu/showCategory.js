function showCategory() {
    let htmlShowCategory = `
    ${ getLeftBarHTML() }
    <div id="content">
        <div class="topLineInContent"><span id="companyButton""><b>SP</b>SHIPBASE Company ➡ </span><div id="addTopRight">Add Category</div></div>
        <table>
        <tr>
            <th>${companyData.companies[model.data.currentCompanyID].name}<th>
					</tr>
                <tr>
                    <th>${companyData.companies[model.data.currentCompanyID].country}<th>
					</tr></table>
                        <table><br><br>
                            <td class="seperator"><b>Category:</b></td>`;

    let categoryOfCompany = model.data.companies[model.data.currentCompanyID].categories;
                categoryOfCompany.map((num) => {
                    htmlShowCategory += `<td class="seperator">${num}</td>`;
                });
    htmlShowCategory += `</table> ${getInnerChangeOrSave()}${getInnerFooter()}</div>`;
                
model.view.mainContentIsGrid = true;
model.view.showTopNavigation = true;
model.view.topNavigationActive = 0; // 0 = companies
model.view.showLeftNavigation = true;
model.view.leftNavigationActive = 4; // 4 = category
model.view.mainContent = htmlShowCategory;
show();
}