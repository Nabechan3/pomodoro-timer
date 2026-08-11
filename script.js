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

// id = "timer"のHTML要素を取得する　タイマー表示(h2)を取得する　25:00をさがしたら、id="timer"のHTML要素を取得する//
const timer = document.getElementById("timer");

// 中身を変更するletでcountdownという変数を定義、残り時間を秒で管理する
let countdown = 25 * 60;

// countdownという変数から、1秒(1000ms)ずつ実行してcountdownを減らしていく
const timerId = setInterval(function() {
    // countdownを1減らす
        countdown = countdown -1;
        // Math.floorで整数にする
        m = Math.floor(countdown/60)
        s = countdown % 60
        //sはNumberで、String(s)で文字列に変更、padStartは文字列でないと機能しない
        zero_s = String(s).padStart(2,'0')
        timer.textContent = (m) + ":" +(zero_s);
    if (countdown == 0){
        clearInterval(timerId);
    } 
}, 1000);


