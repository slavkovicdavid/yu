yu.META.reload=function reload()
{
	yu.DOM.require('DOM_find.js', function(loaded) // load yu.DOM.find dependency
	{
		if(loaded)
		{
			yu.junk.moduleElements = yu.DOM.find('.'+yu.junk.confModuleClassName, _d);
			for(var i=0; i<yu.junk.moduleElements.length; i++)
			{

				// get filename of the element to be removed
				yu.junk.rEF = yu.junk.moduleElements[i].src.split('/');
				yu.junk.rEF = yu.junk.rEF[yu.junk.rEF.length-1];

				// redefine module+Loaded value
				window[yu.junk.rEF.replace(/\.js/, '')+'Loaded']=false;

				// remove element from DOM
				yu.junk.moduleElements[i].parentNode.removeChild(yu.junk.moduleElements[i]);
			}

			yu.init();
		}
	});
};

var META_reloadLoaded = true;