yu.main = function()
{

	// do work

		/*
		catalog:

			> scan all pages with HTTP_request
			> take thread (id, optext, picture href, number of replies) from scan
			> put it all in a JSON
			> display it in some UI
		*/

		yu.DOM.require('BOARD_catalog.js', function(loaded)
		{
			if(loaded)
			{
				yu.BOARD.catalog(); // will return a catalog in JSON format
			}
		});
		console.log('main loaded');

}

var mainLoaded = true; // tell framework code is available