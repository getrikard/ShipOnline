function showAddress() {
    let htmlShowAddress = `
			${getLeftBarHTML()}
            <div id="content">
                <div class ="topLineInContent"><span id="companyButton""><b>SP</b>SHIPBASE Company ➡</span>
                <div id="addTopRight" onclick="showAddAddress()">Add Address</div></div>
                <table>
					<tr>
						<th>${companyData.companies[model.data.currentCompanyID].name}<th>
					</tr>
					<tr>
						<th>${companyData.companies[model.data.currentCompanyID].country}<th>
					</tr>
                <table>
                    <div class="addressType" > Visiting address</div> <br>`;

    let addressOfCompany = model.data.companies[model.data.currentCompanyID].adresses
             addressOfCompany.map((num) => {
                 htmlShowAddress += `
                    <td><b>Place</b>: ${num.place}</td>
                    <td><b>Country</b>: ${num.country || ''}</td>          
                    <tr>
                        <td><b>Address</b>: ${num.adress} </td>
                        <td><b>Postal Code</b>: ${num.postal}</td>
                    </tr>`;
    });
        htmlShowAddress += `</table> ${getInnerChangeOrSave()} ${getInnerAddOrSave()} ${getInnerFooter()}</div>`;

        model.view.mainContentIsGrid = true;
        model.view.showTopNavigation = true;
        model.view.topNavigationActive = 0; // 0 = companies
        model.view.showLeftNavigation = true;
        model.view.leftNavigationActive = 1; // 1 = address
        model.view.mainContent = htmlShowAddress;
        show();
    }