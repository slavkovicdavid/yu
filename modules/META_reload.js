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

var META_reloadLoaded = true;