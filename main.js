yu.main = function()
{

	// require parts of the framework
	// do work

		/*
		catalog:

			> scan all pages with HTTP_request
			> take thread (id, optext, picture href, number of replies) from scan
			> put it all in a JSON
			> display it in some UI
		*/

		console.log(typeof(yu.HTTP.request));

}

var mainLoaded = true; // tell framework code is available