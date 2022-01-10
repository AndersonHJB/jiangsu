var deviceWidth
var clientFontSize
setHtmlFontSize()

if (window.addEventListener) {
  window.addEventListener('resize', function () {
      setHtmlFontSize()
  }, false)
}
function setHtmlFontSize () {
	var clientWidth = document.documentElement.clientWidth;
	if(clientWidth>=1920){
	    clientFontSize = 140 * (clientWidth / 1920);
	}
	else
	if(clientWidth>=1440){
	    clientFontSize = 100 * (clientWidth / 1440);
	}
	else
	if(clientWidth>=1366){
	    clientFontSize = 100 * (clientWidth / 1366);
	}
	else
	if(clientWidth>=1024){
	    clientFontSize =75 * (clientWidth / 1024);
	}
	else
	{
	    clientFontSize = 100 * (clientWidth / 750);
	}
	
    document.getElementsByTagName('html')[0].style.cssText = 'font-size:' + clientFontSize + 'px !important'
}