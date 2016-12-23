"use strict";

	var _d = document,
	yu = // essential functionality
	{
		'junk':{
			'confBoard':'http://yuchan.org/yu/',
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

				filename = typeof filename == 'string'
				?
					filename.split(',')
				: filename.trim();

				this.insert = function insert(module)
				{

					if(!window[module+'Loaded'])
					{
						yu.junk.n = _d.createElement('script');
						yu.junk.n.src = yu.junk.confServerLocation + (module=='main' ? '':'modules/') + module + '.js';
						yu.junk.n.className += ' yuExtModule';

							_d.body.appendChild(yu.junk.n);
						
							// clean up
							delete
								yu.junk.n;
					}
					else
					{
						console.log('module ' + module + ' has already been loaded');
					}
				};


				filename.forEach(function(module)
				{
					module=module.trim();
					yu.DOM.moduleName = module.replace(/\.js/, '');
					yu.DOM.insert(yu.DOM.moduleName);
				});

				// run callback if last item is loaded
				var YLMwait = setInterval(function()
				{
					typeof window[yu.DOM.moduleName+'Loaded'] !== 'undefined'
					?
					(
						callback(true),
						clearInterval(YLMwait)
					)
					:callback(false);
				}, 100);

			}
		},
		'HTTP':{},
		'META':{},
		'BOARD':{}
	};

	yu.init = function init()
	{

		// get META.reload
		yu.DOM.require('META_reload.js', function(MrDone)
		{
			if(MrDone)
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