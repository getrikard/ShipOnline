function showHistory() {
    let htmlShowHistory = `
			${getLeftBarHTML()}
            <div id="content"> 
                ${getCompanyButton()}<td>HISTORY CONTENT</td>`;

    htmlShowHistory += ` </table> ${getInnerChangeOrSave()} ${getInnerAddOrSave()} ${getInnerFooter()}</div>`;

    model.view.mainContentIsGrid = true;
    model.view.mainContent = htmlShowHistory;
    show();
}