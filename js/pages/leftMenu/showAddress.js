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
                <div class="addressType" > Visiting address</div> <br>
                </table>`;

    //model.data.companies[0].adresses
        for (let i = 0; i < model.data.companies.length; i++) {
            let company = model.data.companies[i];
            model.data.currentCompanyID = i;
            htmlShowAddress +=`
                <table>
                    <tr>
                        <td>Address here</td >
                    </tr>
                    <tr>
                        <td>Postal Code: 4020</td>
                        <td>Place: Anywhere</td>
                    </tr>
                    <tr>
                        <td>Country/State:</td>
                    </tr>
                    <tr>
                        <td>Nation: Norway</td>
                    </tr>
                    </tr>`;
        }

        htmlShowAddress += ` </table> ${getInnerChangeOrSave()} ${getInnerAddOrSave()} ${getInnerFooter()}</div>`;

        model.view.mainContentIsGrid = true;
        model.view.mainContent = htmlShowAddress;
        show();
    }