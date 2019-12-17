function showHistory() {
    let htmlShowHistory = `
			${getLeftBarHTML()}
            <div id="content"> 
                ${getCompanyButton()}<td>HISTORY CONTENT</td>`;

    htmlShowHistory += ` </table> ${getInnerChangeOrSave()} ${getInnerAddOrSave()} ${getInnerFooter()}</div>`;

    model.view.mainContentIsGrid = true;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 0; // 0 = companies
    model.view.showLeftNavigation = true;
    model.view.leftNavigationActive = 8; // 8 = history
    model.view.mainContent = htmlShowHistory;
    show();
}