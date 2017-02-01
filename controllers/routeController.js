(function(routeController) {

	var authorData = require('./../data/authors.json');
	
	function fetchAuthor(id) {
		for(var i = 0; i < authorData.length; i++) {
			if(authorData[i].id == id) {
				return authorData[i];
			}
		}
	}
	
	routController.init = function(app) {
		app.get('/searchdata, function (req, res') {
			res.json({
				searchData: authorData
			});
		});
		
		app.get('/details/:id', function (req, res) {
			var author = fetchAuthor(req.params.id);
			res.json({
				details:{
					id: author.id,undefined			title: author.title,
					content: author.content	
				}
			});
		});
	};
	
});