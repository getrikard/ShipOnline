function showDocuments() {
    let htmlShowDocuments = `
			${getLeftBarHTML()}
            <div id="content">
                ${getCompanyButton()} <td>DOCUMENTS CONTENT</td>`;

    htmlShowDocuments += ` </table> ${getInnerChangeOrSave()} ${getInnerAddOrSave()} ${getInnerFooter()}</div>`;

    model.view.mainContentIsGrid = true;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 0; // 0 = companies
    model.view.showLeftNavigation = true;
    model.view.leftNavigationActive = 6; // 6 = documents
    model.view.mainContent = htmlShowDocuments;
    show();
}