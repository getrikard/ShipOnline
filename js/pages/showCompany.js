function showCompany() {
    let htmlShowCompany = `
            <div id="leftSide">
                <div class ="active" onclick="showCompany()">Company</div>
                <div>Address</div>
                <div onclick="communication()">Communication</div>
                <div>Contacts</div>
                <div>Category</div>
                <div>Company ID no</div>
                <div>Documents/Notes</div>
                <div>Fleet</div>
                <div>History</div>
            </div>
            <div id="content">

            <div>    </div>
    <table>
  <tr>
  <td> s </td>

   </div>
            </div>`;

    model.view.mainContent = htmlShowCompany;
    show();
}


