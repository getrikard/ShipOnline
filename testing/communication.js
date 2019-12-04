function communication() {
    let html = `<div class="topLineInContent">
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
