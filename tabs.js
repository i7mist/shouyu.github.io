
function loadQuizUI(){
	document.getElementById("tagQuiz").className = "active";
	document.getElementById("tagRec").className = "";
	document.getElementById("tagIntro").className = "";
	var mainDoc = document.getElementById("main");
	mainDoc.className = "jumbotron";
	if(finish){
		 mainDoc.innerHTML = "<button class = \"btn-lg btn-success\" onClick=\"again()\">   再做一遍：） </button>"	;
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
			"<th>编号</th>" + 
			"<th>题目</th>" +
			"<th>答案</th>" +
			"<th>记录</th>";
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
	mainDoc.innerHTML = "<h2>“集中声智”手语文化节知识竞答--活动介绍</h3>"+
						"<h4>地点：</h4>" + "<h6>北京大学百周年纪念讲堂前广场</h6>" +
						"<h4>时间：</h4>" + "<h6>2014年4月13日</h6>" + 
						"<h4>活动形式</h4>" + "<h5>(1)活动简介</h5>" + 	
						"<h6>“知识竞答”项目是本届手语文化节新增加的项目，该项目是一个群众性趣味竞猜闯关项目，其形式以天才知道为基础，在此之上对流程进行一定程度的改造和创新，而题目则是以聋人文化和背景及基本的手语辨识为主要内容，通过竞赛答题的方式吸引校内外人士关注聋人文化和手语知识，以达到传播聋人文化、推广中国手语的目的。</h6>" +
						"<h5>(2)活动对象</h5> <h6>所有乐于参与的无手语基础的校内外人士</h6>"+
						"<h5>(3)现场流程</h5>" + 
						"<h6>第一部分为牛刀小试，由主持人念题目，参赛者举牌作答，念完题目后在5s后所有人展示自己的答案，由主持人公布正确答案，答对的人留下，答错的人退场。 当场上人数少于参加的总人数的三分之二时，进行复活赛。复活的方式为现场抽取表演题目进行表演，要求不能说话，表演结束后现场观众投票，投票人数超过一定数目则该选手复活。之后继续进行答题环节，直至场上筛选至剩6人。 第二部分为手语分社成员展示快闪节目。 第三部分为巅峰之战，在剩余6人时，以擂台形式，依次进行接龙答题，两根据得分评出一、二、三等奖。当出现几人所答题目数相同时，则题数相同的人进行抢答，答对向上一级，答错向下一级，按照顺位形式排出最终顺序。</h6>"
}