function showAddress() {
    let htmlShowAddress = `
            ${getLeftBarHTML()}
            <div>
                <div>
                    <div class="topLineInContent">
                        <div id="addTopRight">
                            <span id="companyButton""><b>SP</b>SHIPBASE Address ➡ </span>
                            <a href="javascript:showAddAddress()">Add Address</a>
                        </div>
                    </div>
                </div>
                ${getCompanyAndCountryHTML()}
                <div id="content">
                    <table>
                        <div class="addressType"> Visiting address</div> <br>`;

    let addressOfCompany = model.data.companies[model.data.currentCompanyID].adresses
             addressOfCompany.map((num) => {
                 htmlShowAddress += `
                    <td><b>Place</b>: ${num.place}</td>
                    <td><b>Country</b>: ${companyData.companies[model.data.currentCompanyID].country || ''}</td>          
                    <tr>
                        <td><b>Address</b>: ${num.adress} </td>
                        <td><b>Postal Code</b>: ${num.postal}</td>
                    </tr>`;
    });
    htmlShowAddress += `</table> ${getInnerChangeOrSave()}${getInnerFooter()}</div>`;

        model.view.mainContentIsGrid = true;
        model.view.showTopNavigation = true;
        model.view.topNavigationActive = 0; // 0 = companies
        model.view.showLeftNavigation = true;
        model.view.leftNavigationActive = 1; // 1 = address
        model.view.mainContent = htmlShowAddress;
        show();
    }