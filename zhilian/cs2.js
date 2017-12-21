$(function(){
	 var person2={};
	 var ss=[];
	 var ss2=[];
	 var sp=$('.summary-top span').text();
     ss=sp.split(/\s+/);
     var rpt=$('.resume-preview-top table tr')
     person2.birthday=ss[1].substring(4,ss[1].length-1);
     var sta=rpt.find('td').eq(5).text();
     if(sta.indexOf('离职')>=0){
     	person2.state='离职';
     }else if(sta.indexOf('在职')>=0){
     	person2.state='在职';
     }else if(sta.indexOf('应届毕业生')>=0){
     	person2.state='应届毕业生';
     }else{
     	person2.state='';
     }
     var su=$('.summary-top').text();
     var suu=su.substring(su.lastIndexOf('：')+1,su.lastIndexOf('|'));
	 person2.hukou=suu;
	 person2.place=rpt.find('td').eq(1).text();
	 person2.marry=ss[4];
	 person2.salary=rpt.find('td').eq(3).text();
     var rrr =$('.resume-preview-all h3');
     rrr.each(function(){
     	if($(this).text()=='项目经历'){
     		person2.xmu=$(this).parent().text();
     	}else if($(this).text()=='教育经历'){
     		person2.edu=$(this).parent().text();
     	}else if($(this).text()=='工作经历'){
     		person2.rejob=$(this).parent().text();
     	}
     })
     chrome.extension.sendMessage(
       	{cmd:'setJson2',ar:person2},
       	function(response) {
			console.log(response); 
	});
})
