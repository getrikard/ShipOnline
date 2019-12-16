function showFleet() {
    let htmlShowFleet = `
			${getLeftBarHTML()}
            <div id="content">
                ${getCompanyButton()} <td>FLEET CONTENT</td>`;

    htmlShowFleet += ` </table> ${getInnerChangeOrSave()} ${getInnerAddOrSave()} ${getInnerFooter()}</div>`;

    model.view.mainContentIsGrid = true;
    model.view.mainContent = htmlShowFleet;
    show();
}