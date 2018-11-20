export const dynRemEvent = (params) => {

	if (window.gtag) {
		const gtag = window.gtag;
		gtag('event', 'page_view', {'send_to': ['AW-790864943', 'UA-129282058-1'],
		  'dynx_itemid': params.id,
		  'dynx_pagetype': params.pagetype,
		  'dynx_totalvalue': params.price
		});
	}

}