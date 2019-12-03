// JavaScript source code
const getCompanyPage = () => {
    let htmlCompany =
        `<p><input type="text" placeholder="${model.data.username}" is the name.</input>
        ${model.data.currentCompanyID} is the company ID
        ${model.data.companies[0].adresses[1].type}</p>`;

    model.view.currentContent = htmlCompany;
    show();
}
