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
            	<table>
					<tr>
				    	<th> company name  <br> NOR</th>
				    </tr>

				  <tr>
				    <td> a </td>
				    <td> a </td>
				  </tr>
				  <tr>
				    <td> b </td>
				    <td> b </td>
				  </tr>
				  <tr>
				    <td> c  </td>
				    <td> c  </td>
				  </tr>
				  <tr>
				    <td> d </td>
				    <td> d </td>
				  </tr>
				  <tr>
				    <td> e </td>
				    <td> e </td>
				  </tr>
				</table>

            <div>





          	`;

    let companyData = model.data.companies;
    model.view.mainContentIsGrid = true;
    model.view.mainContent = htmlShowCompany;
    show();
}