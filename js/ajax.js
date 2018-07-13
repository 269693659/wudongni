function ajax(type,url,data,success,error){

	var xml = new XMLHttpRequest() || new ActiveXObject("Microsoft,XMLHTTP");

	var str="";

	for(var key in data){
		str+="&"+key+"="+data[key];
	}
	str=str.slice(1);

	if(type=="get"){

		url = url+"?"+str;

		xml.open("get",url,true);

		xml.send();

	}else{

		xml.open("post",url,true);

		xml.setRequestHeader("content-type","application/x-www-form-urlencoded");

		xml.send(str);

	}

	xml.onreadystatechange=function(){
		if(xml.readyState==4 && xml.status==200){
			var newdata=xml.responseText;
			if( typeof newdata !="object" && newdata !=""){
				newdata=JSON.parse(newdata);
			}
			
			success&&success(newdata)
		}else{
			error&&error(xml.status)
		}
	}

}