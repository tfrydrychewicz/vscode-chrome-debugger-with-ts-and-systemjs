/// <reference path="../../typings/tsd.d.ts" />
import $ from 'jquery';

export function start() {
	
	$('#pressMe').click(() => {
		
		console.log(`I'd like to be able to debug that in chrome`);
		
	});
	
}