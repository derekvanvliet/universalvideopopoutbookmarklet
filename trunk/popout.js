(function(){
	var dx = document;
	var id = '';
	var url = '';
	var e = '';
	var i = 0;
	function win(u,w,h){
		return window.open(u,u,'width=' + w + ',height=' + h);
	}
	function pStr(str){
		var uS = str.indexOf('http://');
		var uE = str.indexOf(unescape('%22'),uS);
		var u = str.substr(uS,uE-uS);
		return u;
	}
	function pId(id){
		var e = dx.getElementById(id).value;
		return pStr(e);
	}

	var loc = dx.location.href;
	if (loc.indexOf('youtube') != -1) {
		try
		{
			url = pId('embed_code');
			if (url)
			{
				win(url,435,354);
				return;
			}			
		}
		catch (err1)
		{
		}
	}
	if (loc.indexOf('video.google') != -1) {
		try
		{
			e = dx.getElementsByTagName('textarea')[0].value;
			url = pStr(e);
			if (url)
			{
				win(url,435,354);
				return;
			}			
		}
		catch (err2)
		{
		}
	}
	if (loc.indexOf('liveleak') != -1) {
		try
		{
			var oc = String(dx.getElementById('linkb').onclick);
			var iS = oc.indexOf('token=');
			var iE = oc.indexOf('&',iS);
			id = oc.substr(iS+6,iE-iS);
			if (id)
			{
				win('http://www.liveleak.com/e/' + id,450,370);
				return;
			}			
		}
		catch (err3)
		{
		}
	}
	if (loc.indexOf('blip.tv/file/') != -1) {
		try
		{
			var d = dx.getElementsByTagName('div');
			for (i = 0; i < d.length; i++)
			{
				if (d[i].id)
				{
					if (d[i].id.indexOf('post_masthed_') != -1)
					{
						id = d[i].id.substr(13,d[i].id.length);
					}
				}
			}
			if (id)
			{
				win('http://e.blip.tv/scripts/flash/showplayer.swf?file=http://blip.tv/rss/flash/' + id,435,360);
				return;
			}			
		}
		catch (err4)
		{
		}
	}

	url = dx.getElementsByTagName('link');
	for (i = 0; i < url.length; i++)
	{
		if(url[i].rel == 'video_src'){
			win(url[i].href,435,360);
			return;
		}
	}

	e = dx.getElementsByTagName('embed');
	if (e.length)
	{
		e = e[0];
		e = e.cloneNode(true);
		e.style.width = '100%';
		e.style.height = '100%';
		var w = win('',435,360);
		var s = unescape('%3Chtml%3E%3Chead%3E%3C/head%3E%3Cbody%20id=%22body%22%20style=%22margin:0;%22%3E%3C/body%3E%3C/html%3E');
		w.document.write(s);
		w.document.getElementById('body').appendChild(e);
		return;
	}

	alert('No video found.');
})();