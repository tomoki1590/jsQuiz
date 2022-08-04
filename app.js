 // クイズの設定
 const quiz = [

    {
        question : '『神楽』　これをなんと読む',
        choose:["からく","かぐら","かみらく","わかんない"],
        correct: 'かぐら'
    },
    {
        question : '大暮神楽団の保持演目数は何個あるか',
        choose :['10','12','13','15','20'],
        correct : '13'
    },
    {
        question : '『八岐の大蛇』　これをなんと読む',
        choose :['やまたのおろち','はちひきのおおへび','やきのおろち','やきのおおへび','知らんがな'],
        correct : 'やまたのおろち'
    }

 ];
 
const quizLength = quiz.length;
let quizIndex = 0;

let score =0;

 const $button = document.getElementsByTagName('button');

 const buttonLength = $button.length;

 // クイズの問題文、選択肢を定義
const setupQuiz=() => {
   console.log(document.getElementById('js-question').textContent = quiz[quizIndex].question);
   let buttonIndex = 0;
   while (buttonIndex < buttonLength) {
   $button[buttonIndex].textContent = quiz[quizIndex].choose[buttonIndex];
       buttonIndex++;
   }
}
setupQuiz();

// 正誤判定

const trueForse = (e)=> {
    if(quiz[quizIndex].correct ===  e.target.textContent){
        window.alert('正解');
        score ++;
    }else{
        window.alert('残念　不正解');
}
quizIndex ++;

if(quizIndex < quizLength){

    setupQuiz();

}else{
    window.alert('終了　お疲れ様でしたー あなたの正解数は'+ score +'/' + quizLength + 'です');

}

};

let tfIndex = 0;
 while (tfIndex < buttonLength) {
$button[tfIndex].addEventListener('click',(e) =>{
    trueForse(e);
});
tfIndex++;
 }




