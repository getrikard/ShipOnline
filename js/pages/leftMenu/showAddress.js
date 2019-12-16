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
                </table>  <table>`;

    let addressOfCompany = model.data.companies[0].adresses
             addressOfCompany.map((num) => {
                 htmlShowAddress += `
                    <tr>
                        <td>Address: ${num.adress}</td>
                    </tr>
                    <tr>
                        <td>Postal Code: ${num.postal}</td>
                    </tr>
                    <tr>
                        <td>Place: ${num.place}</td>
                    </tr>
                    <tr>
                        <td>Country/State: ${num.country || ''}</td>
                    </tr>`;
             });

        htmlShowAddress += ` </table> ${getInnerChangeOrSave()} ${getInnerAddOrSave()} ${getInnerFooter()}</div>`;

        model.view.mainContentIsGrid = true;
        model.view.mainContent = htmlShowAddress;
        show();
    }