var filterProcessing = function (myData, filterVal, results, userTemplate) {
	//create new instance of retrieve data function
	var retrieveData = new RetrieveData;


	var filterResults = retrieveData.filterData(myData, filterVal);

	//render currently viewing data
	updateCurrentViewing(filterResults);

	//call the display filter data function
	//pass in the filter results, script element and template
	displayFilterData(filterResults, results, userTemplate);
}