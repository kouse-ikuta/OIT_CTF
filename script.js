var score = 0;
var scorel=0;
counter=0;

function hint0(){
    document.getElementById("hinto0").textContent = "アルファベットの順番に注目";
}
function hint1(){
    document.getElementById("url1").textContent = "";
    document.getElementById("url2").textContent = "";
    document.getElementById("hinto").textContent = "シーザー暗号とはアルファベットを何文字かずらすことで暗号化する方式です。また、シーザー暗号には有名な換字の数があります。";
    
}

function hint2(){
    document.getElementById("url1").textContent = "更に詳しく知りたい場合は外部のサイトへ";
    document.getElementById("url2").textContent = "";
    document.getElementById("hinto").textContent = "";
    
}

function hint3(){
    document.getElementById("url1").textContent = "";
    document.getElementById("url2").textContent = "暗号複合サイト";
    document.getElementById("hinto").textContent = "";
}

function hint4(){
    document.getElementById("url3").textContent = "";
    document.getElementById("url4").textContent = "";
    document.getElementById("hinto2").textContent = "カッコの前の文字が前回の文字と同じです。";
}

function hint5(){
    document.getElementById("url3").textContent = "更に詳しく知りたい場合は外部のサイトへ";
    document.getElementById("url4").textContent = "";
    document.getElementById("hinto2").textContent = "";
}

function hint6(){
    document.getElementById("url3").textContent = "";
    document.getElementById("url4").textContent = "ヴィジュネル暗号復号サイト";
    document.getElementById("hinto2").textContent = "";
}


function hint7(){
    document.getElementById("url5").textContent = "";
    document.getElementById("url6").textContent = "";
    document.getElementById("hinto3").innerHTML = "これを参考にしてください。<br>暗号化: c = m^e mod N<br> 復号化: m = c^d mod N<br>N= pxq<br>復号化した数字は問題0と同じ方法で文字に戻せる。";
}

function hint8(){
    document.getElementById("url5").textContent = "更に詳しく知りたい場合は外部のサイトへ";
    document.getElementById("url6").textContent = "";
    document.getElementById("hinto3").textContent = "";
}

function hint9(){
    document.getElementById("url5").textContent = "";
    document.getElementById("url6").textContent = "RSA暗号複合サイト";
    document.getElementById("hinto2").textContent = "";
}

function answerQuiz0() {
    // テキストボックスの値を取得
    
    score=0;
    var textBoxValue = document.getElementById("myTextBox").value;
  
    // 予め考えていた正解の値
    var correctAnswer = "oitctf{welcome}"; // ここに正解の値を設定
    document.getElementById("result").textContent = "";
    document.getElementById("btn4-text").textContent="";
    // テキストボックスの値と正解の値を比較
    if (textBoxValue.toLowerCase() === correctAnswer.toLowerCase()) {
        // 正解の場合
        score++;
        document.getElementById("result").textContent = "正解です！";
        document.getElementById("btn4-text").textContent="正解です!";
        $.cookie('count',score, { expires: 7, path: '/' });
    } else {
        // 不正解の場合
        document.getElementById("result").textContent = "不正解です。";
        document.getElementById("btn4-text").textContent="不正解です!";
        $.cookie('count',score, { expires: 7, path: '/' });
    }
    
}



function answerQuiz1() {
    // テキストボックスの値を取得

    if(counter==0){
        scorel=$.cookie('count');
        scorel=Number(scorel);
        counter++;
    }
    var textBoxValue = document.getElementById("myTextBox").value;
    // 予め考えていた正解の値
    var correctAnswer = "oitctf{fukuzawaken_youkoso}"; // ここに正解の値を設定
    document.getElementById("result").textContent = "";
    document.getElementById("btn4-text").textContent="";

    // テキストボックスの値と正解の値を比較
    if (textBoxValue.toLowerCase() === correctAnswer.toLowerCase()) {
        // 正解の場合
        document.getElementById("result").textContent = "正解です！";
        document.getElementById("btn4-text").textContent="正解です!";
        score=scorel+1;
        $.cookie('count', score, { expires: 7, path: '/' });
    } else {
        // 不正解の場合
        document.getElementById("result").textContent = "不正解です。";
        document.getElementById("btn4-text").textContent="不正解です!";
        $.cookie('count', scorel, { expires: 7, path: '/' });
    }
  
}

function answerQuiz2() {
    // テキストボックスの値を取得

    if(counter==0){
        scorel=$.cookie('count');
        scorel=Number(scorel);
        counter++;
    }
    var textBoxValue = document.getElementById("myTextBox").value;
    // 予め考えていた正解の値
    var correctAnswer = "oitctf{Gather at Point A}"; // ここに正解の値を設定
    document.getElementById("result").textContent = "";
    document.getElementById("btn4-text").textContent="";

    // テキストボックスの値と正解の値を比較
    if (textBoxValue.toLowerCase() === correctAnswer.toLowerCase()) {
        // 正解の場合
        document.getElementById("result").textContent = "正解です！";
        document.getElementById("btn4-text").textContent="正解です!";
        score=scorel+1;
        $.cookie('count', score, { expires: 7, path: '/' });
    } else {
        // 不正解の場合
        document.getElementById("result").textContent = "不正解です。";
        document.getElementById("btn4-text").textContent="不正解です!";
        $.cookie('count', scorel, { expires: 7, path: '/' });
    }
  
}

function answerQuiz3() {
    // テキストボックスの値を取得
    if(counter==0){
        scorel=$.cookie('count');
        scorel=Number(scorel);
        counter++;
    }
    
    var textBoxValue = document.getElementById("myTextBox").value;
   
    // 予め考えていた正解の値
    var correctAnswer = "oitctf{sugoi}"; // ここに正解の値を設定
    document.getElementById("result").textContent = "";
    document.getElementById("btn4-text").textContent="";

    // テキストボックスの値と正解の値を比較
    if (textBoxValue.toLowerCase() === correctAnswer.toLowerCase()) {
        // 正解の場合
        document.getElementById("result").textContent = "正解です！";
        document.getElementById("btn4-text").textContent="正解です!";
        score=scorel+1;
        $.cookie('count', score, { expires: 7, path: '/' });
    } else {
        // 不正解の場合
        document.getElementById("result").textContent = "不正解です。";
        document.getElementById("btn4-text").textContent="不正解です!";
        $.cookie('count', scorel, { expires: 7, path: '/' });
    }
    
}


document.addEventListener('DOMContentLoaded', () => {
    const btn4Text = document.getElementById('btn4-text');
    const btn4 = document.getElementById('btn02');
  
    btn4.addEventListener('click', () => {
      btn4Text.classList.remove('hidden');
      btn4Text.classList.add('popup-message');
    });
  
    btn4Text.addEventListener('animationend', () => {
      btn4Text.classList.remove('popup-message');
      btn4Text.classList.add('hidden');
    });
  });
  