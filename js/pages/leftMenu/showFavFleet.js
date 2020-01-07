function showFavFleet() {
    let htmlFleetFav = `${getLeftBarHTML()}
<div id="content">
    <table> <div class="topLineInContent"><span id="companyButton""><b>SP</b>SHIPBASE Company ➡ </span> <div id ="addTopRight"> Add Fleet </div> </div> 
    <tr>
        <th>${companyData.companies[model.data.currentCompanyID].name}<th>
					</tr>
            <tr>
                <th>${companyData.companies[model.data.currentCompanyID].country} <span id="tempStyle">${companyData.companies[model.data.currentCompanyID].categories.join(' ')}</span><th>
					</tr>
                    <table>
                        <div class="addressType">Fleet</div>${addSpacer()}`;

    htmlFleetFav += `${getShipTable()}<th>Role</th> <th class ="myCompanyTab centerTdFavorite" onclick="showFleet()">My Ship</th>`;

    let showFavFleet = model.data.fleet;
    showFavFleet.map((val, id) => {
        const type = showFavFleet[id].shipType;
        if (showFavFleet[id].isFavorite) htmlFleetFav += `<tr>
            <td>${type}</td>
            <td onclick="showThisShip(${id})"class="clickAble">${val.name}</td>
            <td>${val.GT}</td>
            <td>${val.MDWT}</td>
            <td>${val.built}</td>
            <td>${val.callsign}</td>
            <td>${val.shipType == 'Fishing' ? val.fishID : ''}</td>
            <td>${val.flag}</td>
            <td>${val.role}</td>
            <td class="centerTdFavoriteStar">${val.isFavorite ? '*' : ''}</td>
            </tr>`;
    });

    htmlFleetFav += `</table> </table> <div class="changeAddNewBottomBar"> <span onclick="showAddCommunication()">Add New</span></div>${getInnerFooter()}</div>`;

    model.view.mainContentIsGrid = true;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 0; // 0 = companies
    model.view.showLeftNavigation = true;
    model.view.leftNavigationActive = 7; // 7 = fleet
    model.view.mainContent = htmlFleetFav;
    show();
};