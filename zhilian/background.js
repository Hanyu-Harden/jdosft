var js;
var js2;
chrome.extension.onMessage.addListener(function(request, sender, sendResponse){
		if(request.cmd=='setJson'){
	 			js=request.arr;
		}else if(request.cmd='setJson2'){
				js2=request.ar;
		}
})