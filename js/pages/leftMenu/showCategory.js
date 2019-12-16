function showCategory() {
    let htmlShowCategory = `
			${getLeftBarHTML()}
            <div id="content">
                ${getCompanyButton()} 
                <td>CATEGORY CONTENT</td>`;

    htmlShowCategory += ` </table> ${getInnerChangeOrSave()} ${getInnerAddOrSave()} ${getInnerFooter()}</div>`;

    model.view.mainContentIsGrid = true;
    model.view.mainContent = htmlShowCategory;
    show();
}