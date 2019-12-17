function showContactsList() {
  let htmlContacts =
    ` <div id="content"> <div class="topLineInContent">
        <span id="companyButton"><b>SP</b>SHIPBASE Company ➡ </span>
        <a href="javascript:showAddContacts()">Add Contacts</a>
        </div>
    <table>
  <tr>
    <th>Name</th>
    <th>Relation</th>
    <th>Number</th>
    <th>Email</th>
    <th class ="myCompanyTab" onclick="">VIP</th>
    <th>Groups</th>
  </tr>`;
  for (let i = 0; i < model.data.contacts.length; i++) {
    let contacts = model.data.contacts[i];
    htmlContacts += `
        <tr>
        <td class ="clickAble">Elvis Presley</td>
        <td>Wife</td>
        <td>113</td>
        <td>Elvispresley@gmail.com</td>
        <td>⭐</td>
        <td>Intern</td>
  </tr>`;
  };

  htmlContacts += `</table> </div>`;

  model.view.mainContentIsGrid = false;
  model.view.showTopNavigation = true;
  model.view.topNavigationActive = 2; // 2 = contacts
  model.view.mainContent = htmlContacts;
  show();
};