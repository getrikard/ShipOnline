// JavaScript source code
const getCompanyPage = () => {
    let htmlCompany = `<p>${model.data.username} is the name.
                       ${model.data.currentCompanyID} is the company ID
                       ${model.data.companies[0].adresses[1].type}</p>`;
    model.view.currentContent = htmlCompany;
    show();
}
