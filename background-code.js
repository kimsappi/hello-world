/* Updated: 22.9.2019
 *
 * Fetches contents of a page and passes it on to be printed typing style.
 * Use:
 *     Include jQuery (slim might not work)
 *     Include typing-animation.js
 *     Call background_code(element_id, delay, url)
 *     delay = lower bound of average delay between keystokes (ms)
 *     url = content you want displayed
 *
 * By: Kim Säppi
 */

function background_code(element_id, delay, url)
{
	$.get(url, function(data){
		document.getElementById(element_id).innerHTML = data;
		typing_effect(element_id, delay);
	});
}