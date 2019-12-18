function showCompanyIdNo() {
    let htmlShowCompanyIdNo = `${getLeftBarHTML()
}
<div id="content">
    <table> <div id ="addTopRight"> Add Company ID </div>
    <tr>
        <th>${companyData.companies[model.data.currentCompanyID].name}<th>
					</tr>
            <tr>
                <th>${companyData.companies[model.data.currentCompanyID].country}<th>
					</tr>
                    <table>
                        <div class="addressType" > Sales Manager</div> <br>`;
    
        let idOfCompany = model.data.companies[model.data.currentCompanyID].companyNo
    idOfCompany.map((num) => {
        htmlShowCompanyIdNo += `
                    <td><b>Type</b>: ${num.type}</td>
                    <td><b>Number</b>: ${num.number}</td>          
                    <tr>
                    </tr>`;
            });
    htmlShowCompanyIdNo += ` </table> ${getInnerChangeOrSave()} ${getInnerAddOrSave()} ${getInnerFooter()}</div>`;
            
                model.view.mainContentIsGrid = true;
                model.view.showTopNavigation = true;
                model.view.topNavigationActive = 0; // 0 = companies
                model.view.showLeftNavigation = true;
                model.view.leftNavigationActive = 5; // 5 = compID
                model.view.mainContent = htmlShowCompanyIdNo;
                show();
}