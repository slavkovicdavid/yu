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

var HTTP_requestLoaded = true;