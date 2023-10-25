let record_btn=document.getElementById("record_btn");
let message_area=document.getElementById("message_area");
let url='https://tightrope.jp/stone/server/control.php'

record_btn.addEventListener('click',function(){
  calcRPM()
})

let timeArray=[];
let averageCount=2;
let prevTime=0

function calcRPM(){
  let now=Math.floor(performance.now())
  
  if(timeArray.length > averageCount){
    timeArray.shift();
  }
  
  if(prevTime==0){
    console.log("一回目のクリック")
  }else{
    let span = now - prevTime
    let rpm = (60*1000)/span
    rpm=Math.floor((rpm*10))/10
    timeArray.push(rpm)
    console.log(timeArray)

    post(rpm)
  }
  
  prevTime=now
}


function post(message){
  console.log(message);
  message_area.innerText=message
  fetch(url , {
    method: "POST",
    //headers: { 'Content-Type': 'application/json' },
    body: message
  }).then((response) => {
    if(!response.ok) {
        console.log('error!');
    } 
    //console.log('ok!',response.text());
    return response.text();
  }).then((data)  => {
      console.log(data);
  }).catch((error) => {
      console.log(error);
  });
}




