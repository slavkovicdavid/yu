"use strict";

	var _d = document,
	yu = // essential functionality
	{
		'junk':{
			'confVersionStatus':'dev',
			'confServerLocation':'http://localhost:1389/',
			'confModuleClassName':'yuExtModule'
		},
		'DOM':
		{
			'require':function require
			(
				filename,
				callback
			)
			{

				this.moduleName = filename.replace(/\.js/, '');

				this.n = _d.createElement('script');
				this.n.src = yu.junk.confServerLocation + (filename=='main.js' ? '':'modules/') + filename;
				this.n.className += ' yuExtModule';

					_d.body.appendChild(this.n);

				var YLMwait = setInterval(function()
				{
					typeof(eval(yu.DOM.moduleName+'Loaded')) !== 'undefined'
					?
					(
						callback(true),
						clearInterval(YLMwait)
					)
					:callback(false);
				}, 100);
				
					// clean up
					delete
						this.n,
						this.moduleName;
			}
		},
		'HTTP':{},
		'META':{}
	};

	yu.init = function init()
	{

		// get META.reload
		yu.DOM.require('META_reload.js', function(MrDone)
		{
			if(mrDone)
			{

				// get main, run main
				yu.DOM.require('main.js', function(mainLoaded)
				{
					if(mainLoaded)
					{
						yu.main();
					}
				});

			}
		});
		
	};

	yu.init();