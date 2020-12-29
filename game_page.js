p1_name=localStorage.getItem("player1");
p2_name=localStorage.getItem("player2");

p1_score=0;
p2_score=0;

document.getElementById("p1_name").innerHTML=p1_name;
document.getElementById("p2_name").innerHTML=p2_name;

document.getElementById("p1_score").innerHTML=p1_score;
document.getElementById("p2_score").innerHTML=p2_score;

document.getElementById("player_question").innerHTML="Question turn= " + p1_name;
document.getElementById("player_answer").innerHTML="Answer turn= "+ p2_name;

function send(){
    number1 = document.getElementById("number1").value;
	number2 = document.getElementById("number2").value;
	actual_answer = parseInt(number1) * parseInt(number2);
	console.log(actual_answer);


    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";
}
qturn="p1"
aturn="p2"
function check(){
    get_answer=document.getElementById("input_check_box").value;
    answer=get_answer.toLowerCase();

    if(answer==actual_answer){
        if(aturn=="p1"){
            p1_score=p1_score+1;
            document.getElementById("p1_socre").innerHTML=p1_score
        }
        else{
            p2_score=p2_score+1;
            document.getElementById("p2_score").innerHTML=p2_score;
        }
    }
    if(qturn=="p1"){
        qturn="p2";
        document.getElementById("player_question").innerHTML="Question turn: "+p2_name
    }
    else{
        qturn="p1";
        document.getElementById("player_question").innerHTML="Question turn: "+p1_name;
    }
    if(aturn=="p1"){
        aturn="p2";
        document.getElementById("player_answer").innerHTML="Answer turn: "+p2_name
    }
    else{
        aturn="p1";
        document.getElementById("player_answer").innerHTML="Answer turn: "+p1_name;
    }
    document.getElementById("output").innerHTML="";
}
