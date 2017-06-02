function searchDepartment(myData, value) {
	searchResults = [];
	
	changeText = value.charAt(0).toUpperCase() + value.slice(1);
	
	for (var i = 0; i < myData.length; i++) {
		if (myData[i].F0101_ALPH.includes(changeText)) {
			searchResults.push(myData[i]);
		}
	}

	return searchResults;
};
