$(function(){
	var person={};
	var msg=[];
	var msg2=[];
	var msg3=[];
	 $('.listTab tr td a').each(function(){  
     var tab = $(this); 
     tab.click(function(){  
           var fath=tab.parent().parent();
      	   var str=fath.children('.tdCheckbox').children('.smpcheckbox').attr('userinfo_forsend');
      	   msg=str.split('$');
      	   var msg2=fath.find('td').eq(22).attr('title').split(/\s+/);
      	   var msg3=msg2[0].split('/');
      	   person.hireTime=msg3[2]+'-'+msg3[0]+'-'+msg3[1];
      	   person.job=msg[5];
      	   person.num=msg[14];
      	   person.name=msg[0];
      	   person.sex=msg[6];
      	   person.age=msg[7];
      	   person.record=msg[8];
      	   person.college=fath.find('td').eq(17).text();
      	   person.profe=msg[10];
      	   person.tel=msg[3];
      	   person.address=msg[15];
      	   chrome.extension.sendMessage(
       		{cmd:'setJson',arr:person},
       		function(response) {
				console.log(response); 
		});
     });  
    });  
})
