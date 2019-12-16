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
                </table>
                <div class="addressType">Visiting address</div><br>
                <table>
					<tr>
					<td>Address here</td>
					</tr>
					<tr>
					<td>Address here</td>
					</tr>
					<tr>
					<td>Address here</td> 
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
				</table>
            ${getInnerChangeOrSave()}
            ${getInnerAddOrSave()}
            ${getInnerFooter()}
            </div>    
            `;



        model.view.mainContentIsGrid = true;
        model.view.mainContent = htmlShowAddress;
        show();
}