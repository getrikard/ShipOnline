function showAddCommunication() {
    let html = `
    ${getLeftBarHTML()}

    <div id="content">
        <table>
            <tr>
                <th>${companyData.companies[model.data.currentCompanyID].name}<th>
            </tr>
            <tr>
                <th>${companyData.companies[model.data.currentCompanyID].country}<th>
            </tr>
        </table>

        <table>
            <tr>
                <td>Heklo</td>
            </tr>
        </table>
    </div>`;
    model.view.mainContentIsGrid = true;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 0; // 0 = companies
    model.view.showLeftNavigation = true;
    model.view.leftNavigationActive = 2; // 2 = communication
    model.view.mainContent = html;
    show();
}