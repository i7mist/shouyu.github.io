
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
	var str = "<table id = \"recTab\" class = \"h5 table table-hover\">" + 
			"<th>���</th>" + 
			"<th>��Ŀ</th>" +
			"<th>��</th>" +
			"<th>��¼</th>";
	for(var i = 0 ; i < recsize ; ++i){;
		loadQuestion(history.charAt(i));
		var sid = "p" + String(i);
		str +="<tr>"  + 
							"<td>" + i + "</td>" +
							"<td>" + question + "</td>" + 
							"<td>" + ((answer == 'A')? optionA : optionB) + "</td>";
							
		if(feedback.charAt(i) == String(1)){
			str += "<td> <span id = " + sid + " style = \"color:#0000FF\"> Accepted </span> </td>";
		}
		else{
			str += "<td> <span id = " + sid + " style = \"color:#FF2100\"> Wrong Answer </span> </td>";
		}
		str += "</tr>";
	}
	str += "</table>";
	mainDoc.innerHTML = str;
}

function loadIntroUI(){
	if(!decided){
		cnt --;
		history = history.substring(0,history.length-1);
	}
	document.getElementById("tagQuiz").className = "";
	document.getElementById("tagRec").className = "";
	document.getElementById("tagIntro").className = "active";
	var mainDoc = document.getElementById("main");
	mainDoc.innerHTML = "<h2>���������ǡ������Ļ���֪ʶ����--�����</h3>"+
						"<h4>�ص㣺</h4>" + "<h6>������ѧ����������ǰ�㳡</h6>" +
						"<h4>ʱ�䣺</h4>" + "<h6>2014��4��13��</h6>" + 
						"<h4>���ʽ</h4>" + "<h5>(1)����</h5>" + 	
						"<h6>��֪ʶ������Ŀ�Ǳ��������Ļ��������ӵ���Ŀ������Ŀ��һ��Ⱥ����Ȥζ���´�����Ŀ������ʽ�����֪��Ϊ�������ڴ�֮�϶����̽���һ���̶ȵĸ���ʹ��£�����Ŀ�����������Ļ��ͱ����������������ʶΪ��Ҫ���ݣ�ͨ����������ķ�ʽ����У������ʿ��ע�����Ļ�������֪ʶ���Դﵽ���������Ļ����ƹ��й������Ŀ�ġ�</h6>" +
						"<h5>(2)�����</h5> <h6>�������ڲ���������������У������ʿ</h6>"+
						"<h5>(3)�ֳ�����</h5>" + 
						"<h6>��һ����Ϊţ��С�ԣ�������������Ŀ�������߾�������������Ŀ����5s��������չʾ�Լ��Ĵ𰸣��������˹�����ȷ�𰸣���Ե������£��������˳��� �������������ڲμӵ�������������֮��ʱ�����и�����������ķ�ʽΪ�ֳ���ȡ������Ŀ���б��ݣ�Ҫ����˵�������ݽ������ֳ�����ͶƱ��ͶƱ��������һ����Ŀ���ѡ�ָ��֮��������д��⻷�ڣ�ֱ������ɸѡ��ʣ6�ˡ� �ڶ�����Ϊ��������Աչʾ������Ŀ�� ��������Ϊ�۷�֮ս����ʣ��6��ʱ������̨��ʽ�����ν��н������⣬�����ݵ÷�����һ���������Ƚ��������ּ���������Ŀ����ͬʱ����������ͬ���˽������𣬴������һ�����������һ��������˳λ��ʽ�ų�����˳��</h6>"
}