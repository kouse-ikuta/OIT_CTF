let score = 0;
counter=0;
function answerQuiz1() {
    // テキストボックスの値を取得
    
    if(counter==0){
    var textBoxValue = document.getElementById("myTextBox").value;
    let score=$.cookie('count');
    score=Number(score);

    // 予め考えていた正解の値
    var correctAnswer = "1"; // ここに正解の値を設定
   
    // テキストボックスの値と正解の値を比較
    if (textBoxValue.toLowerCase() === correctAnswer.toLowerCase()) {
        // 正解の場合
        score++;
        document.getElementById("result").textContent = "正解です！";
        $.cookie('count', score, { expires: 7, path: '/' });
    } else {
        // 不正解の場合
        document.getElementById("result").textContent = "不正解です。正解は " + correctAnswer + " です。";
    }
    counter++;
    }
}

function answerQuiz2() {
    // テキストボックスの値を取得

    if(counter==0){
    var textBoxValue = document.getElementById("myTextBox2").value;
    let score=$.cookie('count');
    score=Number(score);
    // 予め考えていた正解の値
    var correctAnswer = "Gather at Point A"; // ここに正解の値を設定
    
    // テキストボックスの値と正解の値を比較
    if (textBoxValue.toLowerCase() === correctAnswer.toLowerCase()) {
        // 正解の場合
        document.getElementById("result2").textContent = "正解です！";
        score++;
        $.cookie('count', score, { expires: 7, path: '/' });
    } else {
        // 不正解の場合
        document.getElementById("result2").textContent = "不正解です。正解は " + correctAnswer + " です。";
    }
    counter++;
    }
}

