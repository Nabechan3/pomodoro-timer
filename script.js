// startを見つける //
document.getElementById("start");
//startを探したら、その結果をstartButtonと名付ける//
const startButton = document.getElementById("start")
//--クリックされたら「開始しました」と表示//
const message = document.getElementById("message");
startButton.addEventListener("click",function(){
        message.textContent = "開始しました"
    });
document.getElementById("stop");
const stopButton = document.getElementById("stop")

// id = "timer"のHTML要素を取得する　タイマー表示(h2)を取得する　25:00をさがしたら、その結果をtimerと名付ける//
const timer = document.getElementById("timer");

console.log(timer.textContent);