// JavaScript source code
const getCompanyPage = () => {
    let htmlCompany =
        `<p> ${model.data.username} <input type="text" placeholder="User" is the name.</input></p>
        ${model.data.currentCompanyID} is the company ID
        ${model.data.companies[0].adresses[1].type}`;

    model.view.currentContent = htmlCompany;
    show();
}
