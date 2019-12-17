function showAddress() {
    let htmlShowAddress = `
			${getLeftBarHTML()}
            <div id="content">
                ${getCompanyButton()}
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
                    <tr>
                        <td>Address: ${num.adress} </td>
                        <td>Postal Code: ${num.postal}</td>
                    </tr>
                    <tr>
                        <td>Place: ${num.place}</td>
                        <td>Place: ${num.country || ''}</td>
                    </tr>`;
    });
        htmlShowAddress += ` </table> ${getInnerChangeOrSave()} ${getInnerAddOrSave()} ${getInnerFooter()}</div>`;

        model.view.mainContentIsGrid = true;
        model.view.showTopNavigation = true;
        model.view.topNavigationActive = 0; // 0 = companies
        model.view.showLeftNavigation = true;
        model.view.leftNavigationActive = 1; // 1 = address
        model.view.mainContent = htmlShowAddress;
        show();
    }