function showCompanyIdNo() {
    let htmlShowCompanyIdNo = `
        ${getLeftBarHTML()}
        <div>
            <div>
                <div class="topLineInContent">
                    <div id="addTopRight">
                        <span id="companyButton""><b>SP</b>SHIPBASE Company ID No ➡ </span>
                        <a href="javascript:showAddCompanyID()">Add Company ID No</a>
                    </div>
                </div>
            </div>
            ${getCompanyAndCountryHTML()}
            <div id="content">
                <div class="addressType" > Sales Manager</div><br>
                <table>`;
    
        let idOfCompany = model.data.companies[model.data.currentCompanyID].companyNo
        idOfCompany.map((num) => {
        htmlShowCompanyIdNo += `
                    <td>
                        <b>Type</b>: ${num.type}
                    </td>
                    <td>
                        <b>Number</b>: ${num.number}
                    </td>
                    <tr>
                    </tr>`;
    });
    htmlShowCompanyIdNo += `</table><div class="changeAddNewBottomBar"> <span onclick="showAddNewCompanyID()">Add New</span></div>${getInnerFooter()}</div>`;

    model.view.mainContentIsGrid = true;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 0; // 0 = companies
    model.view.showLeftNavigation = true;
    model.view.leftNavigationActive = 5; // 5 = compID
    model.view.mainContent = htmlShowCompanyIdNo;
    show();
}
