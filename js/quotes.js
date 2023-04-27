const quotes = [
  {
    quote : "What we dwell on is who we become.",
    koreanQuote : "우리가 무슨 생각을 하느냐가 우리가 어떤 사람이 되는지를 결정한다.",
    author : "Oprah Winfrey",
  },
  {
    quote : "The best way to predict the future is to invent it.",
    koreanQuote : "미래를 예측하는 최선의 방법은 미래를 창조하는 것이다.",
    author : "Alan Kay",
  },
  {
    quote : "It's lack of faith that makes people afraid of meeting challenges, and I believe in myself.",
    koreanQuote : "믿음이 부족하기 때문에 도전하길 두려워하는 바, 나는 스스로를 믿는다.",
    author : "Muhammad Ali",
  },
  {
    quote : "What makes the engine go? Desire, desire, desire.",
    koreanQuote : "삶의 원동력은 무엇일까? 첫째도 욕망, 둘째도 욕망, 셋째도 욕망이다.",
    author : "Stanley Kunitz",
  },
  {
    quote : "Think not those faithful who praise all your words and actions; but those who kindly reprove your faults.",
    koreanQuote : "모든 언행을 칭찬하는 자보다 결점을 친절하게 말해주는 친구를 가까이하라.",
    author : "Socrates",
  },
  {
    quote : "I never think of myself as an icon. What is in other people's minds is not in my mind. I just do my thing.",
    koreanQuote : "나는 결코 나 자신을 우상이라고 생각하지 않는다. 다른 사람들의 마음 속에 있는 것이 내 마음 속에는 없다. 나는 단지 내 일을 할 뿐이다. ",
    author : "Audrey Hepburn",
  },
  {
    quote : "Love all, trust a few. Do wrong to none.",
    koreanQuote : "모두를 사랑하되, 몇 사람만 믿으라. 누구에게도 잘못을 저지르지 말라.",
    author : "William Shakespeare",
  },
  {
    quote : "The way to gain a good reputation is to endeavor to be what you desire to appear.",
    koreanQuote : "훌륭한 평판을 받는 법은 자신이 드러내고자 하는 모습이 되도록 노력하는 것이다.",
    author : "Socrates",
  },
  {
    quote : "The revolution is not an apple that falls when it is ripe. You have to make it fall.",
    koreanQuote : "혁명은 다 익어 저절로 떨어지는 사과가 아니다. 떨어뜨려야 하는 것이다.",
    author : "Ernesto Che Guevara",
  },
  {
    quote : "Let bravery be thy choice, but not bravado.",
    koreanQuote : "용기를 가지되 허세는 부리지 말라.",
    author : "Menander",
  },
];

const quote = document.querySelector("#quote span:nth-of-type(1)");
// const koreanQuote = document.querySelector("#quote span:nth-of-type(2)");
// const author = document.querySelector("#quote span:nth-of-type(3)");

const todaysQuote = quotes[Math.floor((Math.random() * quotes.length))];

quote.innerText = `"${todaysQuote.quote}"`;
// koreanQuote.innerText = todaysQuote.koreanQuote;
// author.innerText = todaysQuote.author;