/**/

yu.BOARD.catalog = function catalog()
{

	//load dependencies if not set (HTTP_request, DOM_find)
	yu.DOM.require('HTTP_request.js, DOM_find.js', function(loaded)
	{
		yu.BOARD.confPages=10;
		yu.BOARD.confPagePrefix='p';
		yu.BOARD.threads=
		{
			1:{}, 2:{}, 3:{}, 4:{}, 5:{}, 6:{}, 7:{}, 8:{}, 9:{}, 10:{} // pages
		};

		this.fetchThreads = function fetchThreads(forPage)
		{

			yu.HTTP.request
			(
				yu.junk.confBoard + yu.BOARD.confPagePrefix+forPage,
				function
				(
					response
				)
				{
					// make fauxDOM
					yu.junk.fauxDOM = _d.createElement('div');
					yu.junk.fauxDOM.innerHTML = response;
					yu.BOARD.cpt = yu.DOM.find('.thread', yu.junk.fauxDOM); // cpt (current page threads)

						// clean fauxDOM
						yu.junk.fauxDOM = null;

					for(var i = 0; i < yu.BOARD.cpt.length; i++)
					{

						yu.BOARD.threads[forPage][i] =
						{
							'id':yu.BOARD.cpt[i].id.replace(/\D/, ''),
							'text':yu.BOARD.cpt[i].querySelector('blockquote').innerText,
							'pic':yu.BOARD.cpt[i].querySelector('.filecont a').href,
							'page':forPage,
							'order':i
						};

					}
				}
			);


		};

		for(var page = 1; page <= yu.BOARD.confPages; page++)
		{

			this.fetchThreads(page);

		}
	});

};

var BOARD_catalogLoaded = true;