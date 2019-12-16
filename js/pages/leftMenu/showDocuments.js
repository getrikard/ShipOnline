function showDocuments() {
    let htmlShowDocuments = `
			${getLeftBarHTML()}
            <div id="content">
                ${getCompanyButton()} <td>DOCUMENTS CONTENT</td>`;

    htmlShowDocuments += ` </table> ${getInnerChangeOrSave()} ${getInnerAddOrSave()} ${getInnerFooter()}</div>`;

    model.view.mainContentIsGrid = true;
    model.view.mainContent = htmlShowDocuments;
    show();
}