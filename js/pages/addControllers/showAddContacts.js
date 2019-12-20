function showAddContacts() {
    let htmlAddNewContact = `<div id="content">
        <table>
            <tr>
                <td>
                    Name:
                </td>
                <td>
                    <input type="text" id="addNameInput">
                </td>
            </tr>
            <tr>
                <td>
                    Relation:
                </td>
                <td>
                    <input type="text" id="addRelationInput">
                </td>
            </tr>
            <tr>
                <td>
                    Number:
                </td>
                <td>
                    <input type="text" id="addNumberInput">
                </td>
            </tr>
            <tr>
                <td>
                    Email:
                </td>
                <td>
                    <input type="text" id="addEmailInput">
                </td>
                <td>
                    Groups:
                </td>
                <td>
                    <input type="text" id="addGroupsInput">
                </td>
                <td>
        </table>

        <button onclick="showContactsList()">Cancel</button>
        <button onclick="addContactsToModel()">Save</button>
    `;
    model.view.mainContentIsGrid = false;
    model.view.showTopNavigation = true;
    model.view.topNavigationActive = 2; // 2 = contacts
    model.view.showLeftNavigation = false;
    model.view.mainContent = htmlAddNewContact;
    show();
}

function addContactsToModel() {
    const name = document.getElementById('addNameInput').value;
    const relation = document.getElementById('addRelationInput').value.split(',');
    const number = document.getElementById('addNumberInput').value;
    const email = document.getElementById('addEmailInput').value;
    const groups = document.getElementById('addGroupsInput').value;


    const contact = {
        name: name,
        isFavorite: false,
        relation: relation,
        number: number,
        email: email,
        groups: groups,
        companys: [],
    };
    if (contact.name !== '' && contact.number !== '' && contact.groups !== '') {
        model.data.contacts.push(contact);
    } else return;
    showContactsList();
}