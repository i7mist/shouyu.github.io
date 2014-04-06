
function loadQuizUI(){
	document.getElementById("tagQuiz").className = "active";
	document.getElementById("tagRec").className = "";
	document.getElementById("tagIntro").className = "";
	var mainDoc = document.getElementById("main");
	mainDoc.className = "jumbotron";
	if(finish){
		 mainDoc.innerHTML = "<button class = \"btn-lg btn-success\" onClick=\"again()\">   ����һ�飺�� </button>"	;
		 return;
	}
	mainDoc.innerHTML = 
	"<p id = \"text\" class=\"lead\"></p>" + 
	"<p> <button class = \"btn-sm btn-success\" onClick=\"nextQuestion()\">   Next   </button>" + 
	"<button id = \"optionA\" class=\"btn-sm btn-default\" onClick=\"A()\"></button>" +
	"<button id = \"optionB\" class=\"btn-sm btn-default\" onClick=\"B()\"></button>" + 
	"</p>" +
	"<p>" + 
	"<div id = \"result\"></div>" +
	"</p>"
	nextQuestion();
}
function loadRecUI(){
	var recsize = cnt;
	if(!decided){
		recsize --;
	}
	document.getElementById("tagQuiz").className = "";
	document.getElementById("tagRec").className = "active";
	document.getElementById("tagIntro").className = "";
	var mainDoc = document.getElementById("main");
	mainDoc.className = "jumbotron";
	var str = "<table id = \"recTab\" class = \"h5 table table-hover\">" + 
			"<th>���</th>" + 
			"<th>��Ŀ</th>" +
			"<th>��</th>" +
			"<th>��¼</th>";
	for(var i = 0 ; i < recsize ; ++i){;
		loadQuestion(history[i]);
		str +="<tr>"  + 
							"<td>" + i + "</td>" +
							"<td>" + question + "</td>" + 
							"<td>" + ((answer == 'A')? optionA : optionB) + "</td>";
							
		if(feedback[i] == 1){
			str += "<td> <span style = \"color:#0000FF\"> Accepted </span> </td>";
		}
		else{
			str += "<td> <span style = \"color:#FF2100\"> Wrong Answer </span> </td>";
		}
		str += "</tr>";
	}
	str += "</table>";
	mainDoc.innerHTML = str;
}

function loadIntroUI(){
	/*
	if(!decided){
		cnt --;
		history = history.substring(0,history.length-1);
	}*/
	document.getElementById("tagQuiz").className = "";
	document.getElementById("tagRec").className = "";
	document.getElementById("tagIntro").className = "active";
	var mainDoc = document.getElementById("main");
	mainDoc.className = "";
	mainDoc.innerHTML = "<h2>���������ǡ������Ļ���֪ʶ����--�����</h3>"+
						"<span class=\"label label-success\">�ص�</span>" + "<h6>������ѧ����������ǰ�㳡</h6>" +
						"<span class=\"label label-warning\">ʱ��</span>" + "<h6>2014��4��13��</h6>" + 
						"<span class=\"label label-success\">����</span>"  + 	
						"<h6>��֪ʶ������Ŀ�Ǳ��������Ļ��������ӵ���Ŀ������Ŀ��һ��Ⱥ����Ȥζ���´�����Ŀ������ʽ�����֪��Ϊ�������ڴ�֮�϶����̽���һ���̶ȵĸ���ʹ��£�����Ŀ�����������Ļ��ͱ����������������ʶΪ��Ҫ���ݣ�ͨ����������ķ�ʽ����У������ʿ��ע�����Ļ�������֪ʶ���Դﵽ���������Ļ����ƹ��й������Ŀ�ġ�</h6>" +
						"<span class = \"label label-warning\">�����</span>"+ "<h6>�������ڲ���������������У������ʿ</h6>"+
						"<span class=\"label label-success\">�ֳ�����</span>" + 
						"<h6>��һ����Ϊţ��С�ԣ�������������Ŀ�������߾�������������Ŀ����5s��������չʾ�Լ��Ĵ𰸣��������˹�����ȷ�𰸣���Ե������£��������˳��� �������������ڲμӵ�������������֮��ʱ�����и�����������ķ�ʽΪ�ֳ���ȡ������Ŀ���б��ݣ�Ҫ����˵�������ݽ������ֳ�����ͶƱ��ͶƱ��������һ����Ŀ���ѡ�ָ��֮��������д��⻷�ڣ�ֱ������ɸѡ��ʣ6�ˡ� �ڶ�����Ϊ��������Աչʾ������Ŀ�� ��������Ϊ�۷�֮ս����ʣ��6��ʱ������̨��ʽ�����ν��н������⣬�����ݵ÷�����һ���������Ƚ��������ּ���������Ŀ����ͬʱ����������ͬ���˽������𣬴������һ�����������һ��������˳λ��ʽ�ų�����˳��</h6>"
}