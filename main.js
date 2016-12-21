yu.main = function()
{

	// require parts of the framework
	yu.DOM.require('lib.js', function(loaded)
	{
		if(loaded)
		{
			console.log('lib loaded');
		}
	});

}

var mainLoaded = true; // tell framework code is available