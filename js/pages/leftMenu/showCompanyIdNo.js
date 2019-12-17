function showCompanyIdNo() {
    let htmlShowCompanyIdNo = `
			${getLeftBarHTML()}
            <div id="content">
                ${getCompanyButton()}
                <td>COMPANY ID CONTENT</td>`;

    htmlShowCompanyIdNo += ` </table> ${getInnerChangeOrSave()} ${getInnerAddOrSave()} ${getInnerFooter()}</div>`;

    model.view.mainContentIsGrid = true;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 0; // 0 = companies
    model.view.showLeftNavigation = true;
    model.view.leftNavigationActive = 5; // 5 = compID
    model.view.mainContent = htmlShowCompanyIdNo;
    show();
}