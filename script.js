// startを見つける //
document.getElementById("start");
//startを探したら、その結果をstartButtonと名付ける//
const startButton = document.getElementById("start");

// id = "timer"のHTML要素を取得する　タイマー表示(h2)を取得する　25:00をさがしたら、id="timer"のHTML要素を取得する//
const timer = document.getElementById("timer");

// 中身を変更するletでcountdownという変数を定義、残り時間を秒で管理する
let countdown = 25 * 60;

//タイマーIDを入れるための変数、どのタイマーを動かしているか
let timerId;

//タイマーが現在動いているかを覚えている変数
let isRunning = false; //動いていない　true:動いている

//作業時間か休憩時間かを判断する変数
let isBreak = false; //作業時間　true:休憩時間

//クリックされたら「開始しました/停止しました/リセットしました」と表示//
const message = document.getElementById("message");

//startButtonで1秒ずつカウントダウンが始まる
startButton.addEventListener("click",function(){
    //タイマーが動いている状態のとき、何もしない
    if (isRunning === true){
    }
    //タイマーが動いていないとき、カウントダウンが始まる
    else {
        message.textContent = "開始しました"
        //カウントダウンが0の場合
        if (countdown === 0 ){
            if (isBreak === true){
                //休憩が終わった、次は25分
                countdown = 25 * 60;
                isBreak = false;
            }else{
                //作業時間が終わった、次は休憩
                countdown = 5 * 60;
                isBreak = true;  
            }
        }
        // countdownという変数から、1秒(1000ms)ずつ実行してcountdownを減らしていく
        timerId = setInterval(function() {
            // countdownを1減らす
            countdown = countdown -1;
            // Math.floorで整数にする、mとsという変数と宣言する
            const m = Math.floor(countdown/60);
            const s = countdown % 60;
            //sはNumberで、String(s)で文字列に変更、padStartは文字列でないと機能しない
            const zero_s = String(s).padStart(2,'0');
            timer.textContent = (m) + ":" +(zero_s);
            //カウントダウンが0になったら止める
            if (countdown === 0){
                clearInterval(timerId);
                //タイマーは動いていない状態にする
                isRunning = false;
                if (isBreak === false){
                    message.textContent = "お疲れ様です！5分休憩です"
                    //「お疲れ様です！5分休憩です」は目立たせる
                     message.classList.add("message-end");
                }else{
                    message.textContent = "休憩終了！作業を始めましょう"
                    //「休憩終了！作業を始めましょう」は目立たせる
                     message.classList.add("message-end");
                }
                //音を鳴らす
                const sound = new Audio("sound.mp3");
                sound.play();
            }
        }, 1000);
         //タイマーが現在動いている状態に変更
        isRunning = true;
    };
 });

 // 停止ボタンを押したら、「停止しました」と表示して、カウントダウンを停止する
document.getElementById("stop");
const stopButton = document.getElementById("stop");
stopButton.addEventListener("click",function(){
    message.textContent = "停止しました"
    clearInterval(timerId);
    //タイマーは動いていない状態にする
    isRunning = false;
});

// リセットボタンを押したら、「リセットしました」と表示して、カウントダウンをリセットする
document.getElementById("reset");
const resetButton = document.getElementById("reset")
resetButton.addEventListener("click",function(){
    message.textContent = "リセットしました"
    // タイマーを停止する
    clearInterval(timerId);
    //タイマーは動いていない状態にする
    isRunning = false;
    // countdownを25*60に戻す
    countdown = 25* 60;
    // もともとのtimerの表示(25:00)に戻す
    timer.textContent = "25:00";
    // 終了しましたをもとの大きさに戻す
    message.classList.remove("message-end");
})
