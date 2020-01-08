function showDocuments() {
    let htmlShowDocuments = `${getLeftBarHTML()}
        <div>
            <div>
                <div class="topLineInContent">
                    <div id="addTopRight">
                        <span id="companyButton""><b>SP</b>SHIPBASE Documents ➡ </span>
                        <a href="javascript:showAddDocument()">Add Documents</a>
                    </div>
                </div>
            </div>
            ${getCompanyAndCountryHTML()}
            <div id="content">
                <table> ${addSpacer()}
                    <tr><td><b>Document Name</b>: Test</td><td><b>Date</b>: 18/12/2019</td></tr>
                    <tr><td><b>Subject</b>: Internal Test</td><td><b>Project</b>: ShipOnline </td></tr>
                    <tr><td><b>Type<b>: Plain text </td><td><b>Person</b>: Creator</td></tr>
                    <tr><td><b>Updated by<b>: Creator</td><td><b>Sharing</b>: Null</td></tr>
                    <tr><td><b>Groups</b>: Internal</td><td><b>Link to document</b>: Null </td></tr>
                </table>
                `;

    htmlShowDocuments += ` </table> ${getInnerChangeOrSave()} ${getInnerFooter()}</div>`;

    model.view.mainContentIsGrid = true;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 0; // 0 = companies
    model.view.showLeftNavigation = true;
    model.view.leftNavigationActive = 6; // 6 = documents
    model.view.mainContent = htmlShowDocuments;
    show();
}