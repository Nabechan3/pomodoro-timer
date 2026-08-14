// startを見つける //
document.getElementById("start");
//startを探したら、その結果をstartButtonと名付ける//
const startButton = document.getElementById("start")

// id = "timer"のHTML要素を取得する　タイマー表示(h2)を取得する　25:00をさがしたら、id="timer"のHTML要素を取得する//
const timer = document.getElementById("timer");

// 中身を変更するletでcountdownという変数を定義、残り時間を秒で管理する
let countdown = 25 * 60;

//タイマーIDを入れるための変数
let timerId;

//クリックされたら「開始しました/停止しました/リセットしました」と表示//
const message = document.getElementById("message");

//startButtonで1秒ずつカウントダウンが始まる
startButton.addEventListener("click",function(){
    message.textContent = "開始しました"
    // countdownという変数から、1秒(1000ms)ずつ実行してcountdownを減らしていく
    timerId = setInterval(function() {
        // countdownを1減らす
        countdown = countdown -1;
        // Math.floorで整数にする、mとsという変数と宣言する
        const m = Math.floor(countdown/60)
        const s = countdown % 60
        //sはNumberで、String(s)で文字列に変更、padStartは文字列でないと機能しない
        const zero_s = String(s).padStart(2,'0')
        timer.textContent = (m) + ":" +(zero_s);
        if (countdown === 0){
            clearInterval(timerId);
        } 
    }, 1000);
 });

 // 停止ボタンを押したら、「停止しました」と表示して、カウントダウンを停止する
document.getElementById("stop");
const stopButton = document.getElementById("stop")
stopButton.addEventListener("click",function(){
    message.textContent = "停止しました"
    clearInterval(timerId);
})

// リセットボタンを押したら、「リセットしました」と表示して、カウントダウンをリセットする
document.getElementById("reset");
const resetButton = document.getElementById("reset")
resetButton.addEventListener("click",function(){
    message.textContent = "リセットしました"
    // タイマーを停止する
    clearInterval(timerId);
    // countdownを25*60に戻す
    countdown = 25* 60;
    // もともとのtimerの表示(25:00)に戻す
    timer.textContent = "25:00";
})
