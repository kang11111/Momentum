const clock = document.querySelector("h2#clock");

export function getClock(){
  //호출할 당시의 시간을 data에 저장
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;

  return hours;
}

//창 열리자마자 실행
getClock();
setInterval(getClock, 1000);