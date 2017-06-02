$(document).ready(function () { // wait for document to be ready
	//Handlebars script tags
	var userData = document.querySelector('.userData').innerHTML;

	var panelData = document.querySelector('.relationshipData').innerHTML;

	//templates
	var userTemplate = Handlebars.compile(userData);

	var panelTemplate = Handlebars.compile(panelData);

	//DOM Elements
	var results = document.querySelector('.results');

	var panelData = document.querySelector('.info-panel');

	var search = document.getElementById('search');

	//get data from JSON file
	$.getJSON('js/grid_Data.js').done(function (data) {


		//store data in local variable
		var myData = data.fs_DATABROWSE_F0101.data.gridData.rowset;


		//get only data that Contains C, O, V, W, P relationships
		var newData = getRelationshipData(myData);

		//render data on the screen
		results.innerHTML = userTemplate({
			department: newData
		});

		//render currently viewing data
		updateCurrentViewing(newData);

		//call total relationship function
		//pass the data, panel script DOM Element and Template to 
		//the function
		displayTotalRelationships(newData, panelData, panelTemplate);

		//render pie chart
		generateChart(newData);

		//search for department
		search.onkeyup = function (e) {

			var searchText = search.value;

			var searchResults = searchDepartment(newData, searchText);

			//render currently viewing data
			updateCurrentViewing(searchResults);

			//render results
			results.innerHTML = userTemplate({
				department: searchResults
			});
		};

		//The badges list items on click
		//filter data to display the correct relationships
		$('.list-group li').click(function () {
			//get li's index position 
			var liPosition = $(this).index();

			//array to store relationships 
			var arrRelationships = ["", 'C', 'O', 'V', 'W', 'P'];

			if (liPosition > 0) {
				filterProcessing(newData, arrRelationships[liPosition], results, userTemplate);
			} else {
				filterProcessing(newData, "", results, userTemplate);
			}
		});
});
})


function getRelationshipData(newData) {
		let updatedData = [];
	
		for (var i = 0; i < newData.length; i++) {
			if (newData[i].F0101_AT1.includes('C')) {
				updatedData.push(newData[i]);
			}

			if (newData[i].F0101_AT1.includes('O')) {
				updatedData.push(newData[i]);
			}

			if (newData[i].F0101_AT1.includes('V')) {
				updatedData.push(newData[i]);
			}

			if (newData[i].F0101_AT1.includes('W')) {
				updatedData.push(newData[i]);
			}

			if (newData[i].F0101_AT1.includes('P')) {
				updatedData.push(newData[i]);
			}
		}
	
	return updatedData;
}