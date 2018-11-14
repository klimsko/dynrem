export const dynRemEvent = (params) => {

	if (window.gtag) {
		const gtag = window.gtag;
		gtag('event', 'page_view', {
		  'dynx_itemid': params.id,
		  'dynx_pagetype': params.pagetype,
		  'dynx_totalvalue': params.price
		});
		console.log('ecomms')
	}

}