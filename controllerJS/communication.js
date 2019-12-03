function communication() {
    let html = `<div>
        <a href="javascript:addCommunication">Add communication</a>
    </div>
    ${getCompanyAndCountryHTML()}`;
    model.view.currentContent = html;
    show();
}

function getShowCommunicationHTML() {
    let html = `<div>
        test
    </div>`;
}

function getAddCommunicationHTML() {

}
