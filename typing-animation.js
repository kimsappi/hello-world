/*function typing_clear_typo(str, delay, element_id, n)
{
	setTimeout(function()
	{
		document.getElementById(element_id).innerHTML = str.slice(0, n - 1);
	}, delay);
}

function typing_typo(str, delay, element_id, n)
{
	var random_alpha;
	var random;
	random = Math.random() * 100 % 26 + "A".charCodeAt(0)
	if (str.charCodeAt(n) > "Z".charCodeAt(0))
	{
		random += "a".charCodeAt(0) - "A".charCodeAt(0)
	}
	random_alpha = String.fromCharCode(random);
	setTimeout(function()
	{
		document.getElementById(element_id).innerHTML = str.slice(0, n - 1) + random_alpha;
	}, delay);
	setTimeout(function()
	{
		typing_clear_typo(str, delay, element_id, n);
	}, delay);
}*/

function typing_effect(str, delay, element_id, n)
{
	//var typo = 0;
	setTimeout(function()
	{
		if (n < str.length)
		{
			var next_char = str[n];
			if (next_char == " ")
			{
				next_char = "&nbsp;"
			}
			document.getElementById(element_id).innerHTML = document.getElementById(element_id).innerHTML + next_char;
			n++;
			/*if (Math.random() < 0.3)
			{
				typing_typo(str, delay, element_id, n);
				typo = 1
			}*/
			//setTimeout(function()
			//{
				typing_effect(str, delay, element_id, n);
			//}, (n - 1 % 1) * delay + Math.random() * delay);
		}
	}, delay + Math.random() * delay);
	/*if (str == 0)
	{
		setTimeout(function()
		{
			document.getElementById(element_id).innerHTML = str;
		}, delay * 3 * str.length);
		
	}*/
}