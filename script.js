var score = 0;
counter=0;

function hint(){
    document.getElementById("hinto").textContent = "シーザー暗号とはアルファベットを何文字かずらすことで暗号化する方式です。また、シーザー暗号には有名な換字の数があります。";
}

function hint2(){
    document.getElementById("hinto2").textContent = "最初のカッコまでの部分は前回と同じです。そこから鍵を求めてみてください。";
}
function answerQuiz1() {
    // テキストボックスの値を取得
    
    if(counter==0){
    var textBoxValue = document.getElementById("myTextBox").value;
  
    // 予め考えていた正解の値
    var correctAnswer = "OITctf{Welcom_to_OIT_Carnival}"; // ここに正解の値を設定
   
    // テキストボックスの値と正解の値を比較
    if (textBoxValue.toLowerCase() === correctAnswer.toLowerCase()) {
        // 正解の場合
        score++;
        document.getElementById("result").textContent = "正解です！";
        document.getElementById("btn4-text").textContent="正解です!"
        $.cookie('count',score, { expires: 7, path: '/' });
    } else {
        // 不正解の場合
        document.getElementById("result").textContent = "不正解です。正解は " + correctAnswer + " です。";
        document.getElementById("btn4-text").textContent="不正解です!"
        $.cookie('count',score, { expires: 7, path: '/' });
    }
    counter++;
    }
}

function answerQuiz2() {
    // テキストボックスの値を取得

    if(counter==0){
    var textBoxValue = document.getElementById("myTextBox").value;
    score=$.cookie('count');
    score=Number(score);
    // 予め考えていた正解の値
    var correctAnswer = "oitctf{Gather at Point A}"; // ここに正解の値を設定
    
    // テキストボックスの値と正解の値を比較
    if (textBoxValue.toLowerCase() === correctAnswer.toLowerCase()) {
        // 正解の場合
        document.getElementById("result").textContent = "正解です！";
        document.getElementById("btn4-text").textContent="正解です!"
        score++;
        $.cookie('count', score, { expires: 7, path: '/' });
    } else {
        // 不正解の場合
        document.getElementById("result").textContent = "不正解です。正解は " + correctAnswer + " です。";
        document.getElementById("btn4-text").textContent="不正解です!"
    }
    counter++;
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
  