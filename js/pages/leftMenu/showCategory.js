function showCategory() {
    let htmlShowCategory = `
    ${ getLeftBarHTML() }
    <div>
        <div>
            <div class="topLineInContent">
                <div id="addTopRight">
                    <span id="companyButton""><b>SP</b>SHIPBASE Category ➡ </span>
                    <a href="javascript:showAddCategory()">Add Category</a>
                </div>
            </div>
        </div>
        ${getCompanyAndCountryHTML()}
        <div id="content">
            <table>
              ${addSpacer()}
                <tr>
                    <td><b>Category:</b></td>
                </tr>`;

    let categoryOfCompany = model.data.companies[model.data.currentCompanyID].categories;
                categoryOfCompany.map((num) => {
                    htmlShowCategory += `<tr><td>${num}</td></tr>`;
                });
    htmlShowCategory += `</table>${getInnerChangeOrSave()} ${getInnerFooter()}</div>`;
                
model.view.mainContentIsGrid = true;
model.view.showTopNavigation = true;
model.view.topNavigationActive = 0; // 0 = companies
model.view.showLeftNavigation = true;
model.view.leftNavigationActive = 4; // 4 = category
model.view.mainContent = htmlShowCategory;
show();
}