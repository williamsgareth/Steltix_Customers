var records = document.querySelector('.records').innerHTML;
var recordsTemplate = Handlebars.compile(records);
var viewing = document.querySelector('.rowTwo');

var updateCurrentViewing = function (data) {
	//render currently viewing data
	viewing.innerHTML = recordsTemplate({
		records: data.length
	});
}