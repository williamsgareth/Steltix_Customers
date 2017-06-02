function displayTotalRelationships(data, panel, template) {
	var retrieveData = new RetrieveData;

	var totalCustomers = retrieveData.totalCustomers(data);
	var totalOpportunities = retrieveData.totalOpportunities(data);
	var totalSuppliers = retrieveData.totalSuppliers(data);
	var totalWarehouses = retrieveData.totalWarehouses(data);
	var totalProspects = retrieveData.totalProspects(data);

	panel.innerHTML = template({
		number_companies: data.length,
		number_customers: totalCustomers.length,
		number_opportunities: totalOpportunities.length,
		number_suppliers: totalSuppliers.length,
		number_warehouses: totalWarehouses.length,
		number_prospects: totalProspects.length
	});
}

function displayFilterData(data, results, template) {
	//display data
	results.innerHTML = template({department: data});
}