yu.HTTP={}; yu.META={}; // define HTTP, META property of yu

yu.HTTP.request = function request
	(
		target,
		data,
		callback
	)
	{

		// determine method
		this.method = typeof(data) == 'function'
		?
			'GET'
		:'POST';

		// shift callback in case method is GET
		callback = this.method == 'GET'
		?
			data
		:callback;

		// init request, trigger event
		this.req = new XMLHttpRequest;
		this.req.addEventListener('readystatechange', function()
		{
			//*
			this.status == 200 &&
			this.readyState == 4
			?
				callback
				(
					this.responseText
				)
			:null;
			//*/
		});

		// connection cases
		this.options =
		{
			'packet':this.method == 'POST'
			?
				data
			:'',
			'options':this.method == 'POST'
			?
				'application/x-www-form-urlencoded'
			:'text/html'
		};

		// connect
		this.req.open(this.method, target);
		this.req.setRequestHeader('Content-type', this.options.header);
		this.req.send(this.options.packet);

			// clean up
			this.req = null;
	};

yu.DOM.find=function find
	(
		what,
		from
	)
	{
		return from.querySelectorAll(what);
	};

yu.META.reload=function reload()
	{
		yu.junk.moduleElements = yu.DOM.find('.'+yu.junk.confModuleClassName, _d);
		for(var i=0; i<yu.junk.moduleElements.length; i++)
		{
			yu.junk.moduleElements[i].parentNode.removeChild(yu.junk.moduleElements[i]);
		}

			// clean up
			yu.junk.moduleElements = null;

		yu.init();
	};

var libLoaded = true; // tell framework code is available