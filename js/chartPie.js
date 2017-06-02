var generateChart = function (data) {
	//get the chart element
	var chartdiv = document.getElementById('chartdiv');
	//create new instance of RetrieveData function
	var retrieveData = new RetrieveData;

	//call the respectiv relationships 
	//get the amount of relationships

	var totalCustomers = retrieveData.totalCustomers(data);
	var totalOpportunities = retrieveData.totalOpportunities(data);
	var totalSuppliers = retrieveData.totalSuppliers(data);
	var totalWarehouses = retrieveData.totalWarehouses(data);
	var totalProspects = retrieveData.totalProspects(data);


	AmCharts.makeChart(chartdiv, {
		"type": "pie",
		"angle": 30.6,
		"balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
		"depth3D": 15,
		"innerRadius": "20%",
		"marginBottom": 5,
		"titleField": "category",
		"valueField": "column-1",
		"theme": "light",
		"percentPrecision": 0,
		"color": "steelblue",
		"allLabels": [],
		"balloon": {},
		"legend": {
			"enabled": false,
			"align": "center",
			"markerType": "circle"
		},
		"titles": [],
		"dataProvider": [
			{
				"category": "customers",
				"column-1": totalCustomers.length
						},
			{
				"category": "opportunities",
				"column-1": totalOpportunities.length
						},
			{
				"category": "suppliers",
				"column-1": totalSuppliers.length
						},
			{
				"category": "warehouses",
				"column-1": totalWarehouses.length
						},
			{
				"category": "prospects",
				"column-1": totalProspects.length
						}
					]
	});
}