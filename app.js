let record_btn=document.getElementById("record_btn");
let count=0
let url='https://tightrope.jp/stone/server/control.php'

record_btn.addEventListener('click',function(){
  count++
  console.log(JSON.stringify(count));
  fetch(url , {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(count)
  }).then((response) => {
    if(!response.ok) {
        console.log('error!');
    } 
    //console.log('ok!',response.json());
    return response.json();
  }).then((data)  => {
      console.log(data);
  }).catch((error) => {
      console.log(error);
  });
})




