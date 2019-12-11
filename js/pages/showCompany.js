let companyData = model.data;
let chosenCompany;

function showCompany(element) {
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
					    	<th> ${companyData.companies[element].name} <br> ${companyData.companies[element].country} </th>
					    </tr>

					  <tr>
					    <td> visit adress </td>
					    <td>
					    	${companyData.companies[element].adresses[0].adress}  
					    	${companyData.companies[element].adresses[0].postal}
					    	${companyData.companies[element].adresses[0].place}
					     </td>
					  </tr>
					  <tr>
					    <td> P.O BOX </td>
					    <td> b </td>
					  </tr>
					  <tr>
					    <td> Invoice  </td> 
					    <td> c  </td>
					  </tr>
					  <tr>
					    <td> Phone </td>
					    <td> d </td>
					  </tr>
					  <tr>
					    <td> Email </td>
					    <td> e </td>
					  </tr>
					</table>
            <div>







          	`;


    model.view.mainContentIsGrid = true;
    model.view.mainContent = htmlShowCompany;
    show();
}