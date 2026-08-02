// startを見つける //
document.getElementById("start")
//startを探したら、その結果をstartButtonと名付ける//
const startButton = document.getElementById("start")
//--クリックされたら「開始しました」と表示//
const message = document.getElementById("message");
startButton.addEventListener("click",function(){
        message.textContent = "開始しました"
    });
document.getElementById("stop")
const stopButton = document.getElementById("stop")
