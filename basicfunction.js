var question,optionA,optionB,answer;
var decided = true,cnt = 0,finish = false;
var history = "" , feedback = "";
function loadXMLDoc(dname){
	try{
		xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
	}
	catch(e){
		try{
			xmlDoc = document.implementation.createDocument("","",null);
		}
		catch(e){
			alert(e.message)
		}
	}
	try{
		xmlDoc.async = false;
		xmlDoc.load(dname);
		return(xmlDoc);
	}
	catch(e) {
		var xmlhr = new window.XMLHttpRequest();
		xmlhr.open("GET",dname,false);
		xmlhr.send(null);
		xmlDoc = xmlhr.responseXML.documentElement;
		return(xmlDoc);			
	}
	return(null);
}
function rand(num){
	return Math.floor(Math.random()*(num+1)-0.001);
}
function getPid(){
	var pid;
	while(1){
		pid = rand(5);
		if(history.indexOf(String(pid)) < 0){
			history += String(pid);
			cnt++;
			break;
		}
	}
	return pid;	
}

function loadQuestion(pid){
	var path = "xmldata/p" + pid + ".xml";
	var xmlDoc = loadXMLDoc(path);
	question = xmlDoc.getElementsByTagName("question")[0].childNodes[0].nodeValue;
	optionA = xmlDoc.getElementsByTagName("option")[0].childNodes[0].nodeValue;
	optionB = xmlDoc.getElementsByTagName("option")[1].childNodes[0].nodeValue;
	answer = xmlDoc.getElementsByTagName("answer")[0].childNodes[0].nodeValue;
}

function nextQuestion(){
	if(!decided){
		cnt --;
		history = history.substring(0,history.length-1);
	}
	var pid = getPid();
	if(pid < 0)	return;
	loadQuestion(pid);
	// Place question
	document.getElementById("text").innerHTML = question;
	document.getElementById("optionA").innerHTML = optionA;
	document.getElementById("optionB").innerHTML = optionB;
	document.getElementById("result").innerHTML = "";
	decided = false;	
}

function A(){
	if(decided)	return;
	decided = true;		
	if(answer == 'A'){
		document.getElementById("result").innerHTML = "Accepted";
		document.getElementById("result").style.color = "#0000FF";
		feedback += String(1);
	}	
	else{
		document.getElementById("result").innerHTML = "Wrong Answer";
		document.getElementById("result").style.color = "#FF2100";
		feedback += String(0);
	}	
	if(cnt > 5){
		alert("题库已爆☆ω☆");
		 var mainDoc = document.getElementById("main");
		 finish = true;
		 mainDoc.innerHTML = "<button class = \"btn-lg btn-success\" onClick=\"again()\">   再做一遍：） </button>"
		return;
	}	
}
function B(){
	if(decided)	return;
	decided = true;
	if(answer == 'B'){
		document.getElementById("result").innerHTML = "Accepted";
		document.getElementById("result").style.color = "#0000FF";	
		feedback += String(1);
	}	
	else{
		document.getElementById("result").innerHTML = "Wrong Answer";
		document.getElementById("result").style.color = "#FF2100";
		feedback += String(0);
	}
	if(cnt > 5){
		alert("题库已爆☆ω☆");
		 var mainDoc = document.getElementById("main");
		 mainDoc.innerHTML = "<button class = \"btn-lg btn-success\" onClick=\"again()\">   再做一遍：） </button>"
		return;
	}
}
function test(){
	alert("hehehehe");	
}
function again(){
		 cnt = 0;
		 decided = true;
		 finish = false;
		 history = feedback = "";
		 loadQuizUI();
}