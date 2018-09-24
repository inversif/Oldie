var locationHost = window.location.host;
var pathName     = window.location.pathname;
var search       = window.location.search;
if(locationHost == "www.reddit.com")
{
	if(search == "")
		window.location.href = "https://old.reddit.com" + pathName;
	else
		window.location.href = "https://old.reddit.com" + pathName + search;
}