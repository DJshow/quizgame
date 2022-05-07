'use strict';

{
// 問題
const quiz = [
      {
            question: '2022年4月から放送開始した『かぐや様は告らせたい』のサブタイトルは次のうちどれ？',
            answers: [
                  'ウルトラロマンティック',
                  'スーパーロマンティック',
                  'ハイパーロマンティック',
                  'ウルトラスーパーハイパーミラクルロマンティック'
            ],
            correct: 'ウルトラロマンティック'
      }, {
            question: 'かぐや達はどこの学校に通っている？',
            answers: [
                  '羞恥院学園',
                  '秀知院学園',
                  '伊勢崎商業高等学校',
                  '東京都立呪術高等専門学校'
            ],
            correct: '秀知院学園'
      }, {
            question: '『かぐや様は告らせたい〜天才たちの恋愛頭脳戦〜』原作者の名前は？',
            answers: [
                  '吾峠呼世晴',
                  '稲垣理一郎',
                  '藤本タツキ',
                  '赤坂アカ'
            ],
            correct: '赤坂アカ'
      }
];

let quizIndex = 0;

let score = 0;

// ボタンを取得
const buttons = document.querySelectorAll('.selection');

// 問題文、選択肢にテキストを追加
const setupQuiz = () => {
      document.getElementById('text').textContent = quiz[quizIndex].question;
      let answerIndex = 0;
      buttons.forEach((button, answerIndex) => {
            button.textContent = quiz[quizIndex].answers[answerIndex];
            answerIndex++;
      });
}

setupQuiz();

// クリックしたら正誤判定
const clickHandler = (e) => {
      if (quiz[quizIndex].correct === e.target.textContent){
            window.alert('正解');
            score++;
      } else {
            window.alert('不正解');
      }

      quizIndex++;

      if (quizIndex < quiz.length) {
         setupQuiz();
      } else {
            window.alert('終了! あなたの正解数は' + score + '/' + quiz.length + 'です！');
      }
};

let buttonsIndex = 0;

while (buttonsIndex < buttons.length) {
      buttons[buttonsIndex].addEventListener('click', (e) => {
            clickHandler(e);
      });
      buttonsIndex++;
}


}