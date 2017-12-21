$(function(){
	var bg = chrome.extension.getBackgroundPage();
	var json1=bg.js;
	var json2=bg.js2;
	var str=[];
	str[0]=json1.hireTime;
	str[1]=json1.job;
	str[2]=json1.num;
	str[3]=json1.name;
	str[4]=json1.sex;
	str[5]=json2.birthday;
	str[6]=json1.age;
	str[7]=json1.record;
	str[8]=json1.college;
	str[9]=json1.profe;
	str[10]=json2.state;
	str[11]=json2.hukou;
	str[12]=json1.address;
	str[13]=json2.marry;
	str[14]=json2.place;
	str[15]=json2.salary;
	str[16]=json1.tel;
	str[17]=json2.edu;
	str[18]=json2.rejob;
	str[19]=json2.xmu;
	var tb=$('#tab tr td');
	for(var i=0;i<str.length;i++){
			$(tb[i]).append(str[i]);
	}
	var clipboard = new Clipboard('#bv');
	
	
	
	

             

})
