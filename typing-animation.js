/* Updated: 22.9.2019
 *
 * HTML typing effect using JavaScript with semi-random delay between strokes
 * Use:
 *     Make an element with an id attribute with the inner HTML you want
 *     Call typing_effect(str: element_id, int: delay)
 *     delay = lower bound of average delay between keystokes
 *
 * By: Kim Säppi
 */

function typing_effect(element_id, delay)
{
	var str = document.getElementById(element_id).innerHTML;
	document.getElementById(element_id).innerHTML = "";
	typing_effect_recursive(str, element_id, delay, 0);
}

function typing_effect_recursive(str, element_id, delay, n)
{
	setTimeout(function()
	{
		if (n < str.length)
		{
			var next_char = str[n];
			if (next_char == " ")
				next_char = "&nbsp;"
			if (next_char == "<")
			{
				var brackets = 1;
				for (i = ++n; brackets != 0; i++)
				{
					next_char += str[i];
					if (str[i] == "<")
						brackets++;
					else if(str[i] == ">")
						brackets--;
					n++;
				}
				next_char += str[i];
			}
			document.getElementById(element_id).innerHTML += next_char;
			n++;
				typing_effect_recursive(str, element_id, delay, n);
		}
	}, delay + Math.random() * delay * 2);
}