var RetrieveData = function () {

	function totalCustomers(data) {
		var customerRelations = [];

		for (var i = 0; i < data.length; i++) {
			if (data[i].F0101_AT1.includes('C')) {
				customerRelations.push(data[i]);
			}
		}

		return customerRelations;
	}


	function totalOpportunities(data) {
		var opportunities = [];

		for (var i = 0; i < data.length; i++) {
			if (data[i].F0101_AT1.includes('O')) {
				opportunities.push(data[i]);
			}
		}

		return opportunities;
	}


	function totalSuppliers(data) {
		var suppliers = [];

		for (var i = 0; i < data.length; i++) {

			if (data[i].F0101_AT1.includes('V')) {
				suppliers.push(data[i]);
			}

		}
		return suppliers;
	}


	function totalWarehouses(data) {
		var warehouses = [];

		for (var i = 0; i < data.length; i++) {

			if (data[i].F0101_AT1.includes('W')) {
				warehouses.push(data[i]);
			}

		}

		return warehouses;
	}

	function totalProspects(data) {
		var prospects = [];

		for (var i = 0; i < data.length; i++) {

			if (data[i].F0101_AT1.includes('P')) {
				prospects.push(data[i]);
			}

		}

		return prospects;
	}

	//filter 
	var filterData = function (data, selectedVal) {
		var filter = [];
		
		for (var i = 0; i < data.length; i++) {
			if (data[i].F0101_AT1.includes(selectedVal)) {
				filter.push(data[i]);		
			}
		}
		
		return filter;
	};


	return {
		totalCustomers,
		totalOpportunities,
		totalSuppliers,
		totalWarehouses,
		totalProspects,
		filterData
	}

}