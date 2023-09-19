var score = 0;
counter=0;

function hint(){
    document.getElementById("hinto").textContent = "シーザー暗号とはアルファベットを何文字かずらすことで暗号化する方式です。また、シーザー暗号には有名な換字の数があります。";
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
        $.cookie('count',score, { expires: 7, path: '/' });
    } else {
        // 不正解の場合
        document.getElementById("result").textContent = "不正解です。正解は " + correctAnswer + " です。";
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
    var correctAnswer = "1"; // ここに正解の値を設定
    
    // テキストボックスの値と正解の値を比較
    if (textBoxValue.toLowerCase() === correctAnswer.toLowerCase()) {
        // 正解の場合
        document.getElementById("result").textContent = "正解です！";
        score++;
        $.cookie('count', score, { expires: 7, path: '/' });
    } else {
        // 不正解の場合
        document.getElementById("result").textContent = "不正解です。正解は " + correctAnswer + " です。";
    }
    counter++;
    }
}

