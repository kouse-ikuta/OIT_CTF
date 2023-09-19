window.onload = function(){
    // ページ読み込み時に実行したい処理
    document.getElementById("lastresult").textContent = "あなたの正解数は"+$.cookie('count')+"です！";
    }
    