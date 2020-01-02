function showFleet() {
    let htmlShowFleet = `${getLeftBarHTML()}
<div id="content">
    <table> <div class="topLineInContent"><span id="companyButton""><b>SP</b>SHIPBASE Company ➡ </span> <div id ="addTopRight"> Show Fleet </div> </div> 
    <tr>
        <th>${companyData.companies[model.data.currentCompanyID].name}<th>
					</tr>
            <tr>
                <th>${companyData.companies[model.data.currentCompanyID].country} <span id="tempStyle">${companyData.companies[model.data.currentCompanyID].categories.join(' ')}</span><th>
					</tr>
                    <table>
                        <div class="addressType">Fleet</div>${addSpacer()}`;

    htmlShowFleet += `${getShipsTable()}<th>Role</th> <th class ="myCompanyTab centerTdFavorite" onclick="showShipsFav()">My Ship</th>`;

    /*    function getRandomNum() {
            var desiredMaxLength = 4
            var randomNumber = '';
            for (var i = 0; i < desiredMaxLength; i++) {
                randomNumber += Math.floor(Math.random() * 10);
            }
            return randomNumber;
        }*/
    let showShipsFleet = model.data.fleet;
    showShipsFleet.map((num, id) => {
        htmlShowFleet += `<tr>
            <td onclick="showThisShip(${id})"class="clickAble">${num.name}<div>${num.shipType}</div></td>
            <td>${num.GT}</td>
            <td>${num.MDWT}</td>
            <td>${num.built}</td>
            <td>${num.callsign}</td>
            <td>${num.shipType == 'Fishing' ? num.fishID : ''}</td>
            <td>${num.flag}</td>
            <td>${num.role}</td>
            <td class="centerTdFavoriteStar">${num.isFavorite ? '*' : ''}</td>
            <td></td>
        </tr>`;
        })

    htmlShowFleet += `</table> ${getInnerChangeOrSave()}${getInnerFooter()}</div>`;

    model.view.mainContentIsGrid = true;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 0; // 0 = companies
    model.view.showLeftNavigation = true;
    model.view.leftNavigationActive = 7; // 7 = fleet
    model.view.mainContent = htmlShowFleet;
    show();
}
