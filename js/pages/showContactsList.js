﻿function showContactsList() {
  let htmlContacts =
    ` <div id="content"> <div class="topLineInContent">
        <span id="companyButton"><b>SP</b>SHIPBASE Contacts ➡ </span>
        <a href="javascript:showAddContacts()">Add Contacts</a>
        </div>
    <table>
        <tr>
            <th>Name</th>
            <th>Relation</th>
            <th>Number</th>
            <th>Email</th>
            <th>Companies</th>
            <th>Groups</th>
            <th class ="myCompanyTab" onclick="">Favorite</th>
        </tr>`;

  for (let i = 0; i < model.data.contacts.length; i++) {
    let contacts = model.data.contacts[i];
    htmlContacts += `
        <tr>
        <td>${contacts.name}</td>
        <td>${contacts.relation}</td>
        <td>${contacts.number}</td>
        <td>${contacts.email}</td>
        <td>${contacts.companys.map(function(comp) {
          let id = model.data.companies[comp.compID].id;
          let name = model.data.companies[comp.compID].name;
          return `<span class="companiesContact" onclick="model.data.currentCompanyID = ${id};showCompany()">
            ${name}
          </span>
          <span class="stillings-text">
            (${comp.stilling})
          </span>`;
        }).join('<br>')}
        <td>${contacts.groups}</td>
        <td class="centerTdFavoriteStar">${contacts.isFavorite ? '*' : ''}</td>
  </tr>`;
  };

  htmlContacts += `</table> </div>`;

  model.view.mainContentIsGrid = false;
  model.view.showTopNavigation = true;
  model.view.topNavigationActive = 2; // 2 = contacts
  model.view.showLeftNavigation = false;
  model.view.mainContent = htmlContacts;
  show();
};


// ${contacts.companys.map(comp => model.data.companies[comp.compID].name + ' <span class="stillings-text">(' + comp.stilling + ')</span>').join('<br>')}