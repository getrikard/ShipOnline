function showCompanyIdNo() {
    let htmlShowCompanyIdNo = `
			${getLeftBarHTML()}
            <div id="content">
                ${getCompanyButton()}
                <td>COMPANY ID CONTENT</td>`;

    htmlShowCompanyIdNo += ` </table> ${getInnerChangeOrSave()} ${getInnerAddOrSave()} ${getInnerFooter()}</div>`;

    model.view.mainContentIsGrid = true;
    model.view.mainContent = htmlShowCompanyIdNo;
    show();
}