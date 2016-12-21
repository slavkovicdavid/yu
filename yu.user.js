"use strict";

if(location.origin.match(/yuchan/)!==null)
{

	var n = document.createElement('script');
		n.src = 'http://localhost:1389/init.js';

	document.body.appendChild(n);
	n = null;

}