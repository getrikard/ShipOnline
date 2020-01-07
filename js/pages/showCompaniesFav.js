﻿// JavaScript source code
function showFavCompanies() {
  let htmlCompaniesFav =
    ` <div id="content"> <div class="topLineInContent">
        <span id="companyButton"><b>SP</b>SHIPBASE Company ➡ </span>
        <a href="javascript:showAddCompany()">Add Company</a>
        </div>
    <table>
  <tr>
    <th>Name</th>
    <th>Catagory</th>
    <th>Place</th>
    <th>Country</th>
    <th>Groups</th>
    <th class ="myCompanyTab centerTdFavorite" onclick="showCompanies()">Favorite</th>
  </tr>`;
  for (let i = 0; i < model.data.companies.length; i++) {
    let company = model.data.companies[i];
    if (company.isFavorite == true) {
      htmlCompaniesFav += `
        <tr>
        <td onclick="showCompany(${i}); console.log(${i})" class ="clickAble">${company.name}</td>
        <td>${company.categories}</td>
        <td>${company.place}</td>
        <td>${company.country}</td>
        <td></td>
        <td class="centerTdFavoriteStar">${company.isFavorite ? '*' : ''}</td>
  </tr>`;
    };

    model.view.mainContentIsGrid = false;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 0; // 0 = companies
    model.view.showLeftNavigation = false;
    model.view.mainContent = htmlCompaniesFav;
    show();
  }
};