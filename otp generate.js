// let key="ema_live_KYjy6OrFlCNinIaedeDxB7eXf10VhDet0pi5jQE0";

// let url=`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
let result=
    {
        "tag": "",
        "free": true,
        "role": false,
        "user": "sethischiranjeev",
        "email": "sethischiranjeev@gmail.com",
        "score": 0.48,
        "state": "unknown",
        "domain": "gmail.com",
        "reason": "no_connect",
        "mx_found": true,
        "catch_all": null,
        "disposable": false,
        "smtp_check": false,
        "did_you_mean": "",
        "format_valid": true
      }

let submitBtn=document.getElementById('submitBtn');
submitBtn.addEventListener("click",async function(e){
e.preventDefault()
resultCont.innerHTML=`<img width="123px" src="img/loading.svg" alt="image not displayed">`
let key="ema_live_KYjy6OrFlCNinIaedeDxB7eXf10VhDet0pi5jQE0";
let email=document.getElementById('user-id').value;
let url=`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
let res=await fetch(url)
let result=await res.json()
let str=``;
for(let keys in result){
if(result[keys]!==""){
str=str+`<div>${keys}:${result[keys]}</div>`
}
}
resultCont.innerHTML=str;


})
// let result=
//     {
//         "tag": "",
//         "free": true,
//         "role": false,
//         "user": "sethischiranjeev",
//         "email": "sethischiranjeev@gmail.com",
//         "score": 0.48,
//         "state": "unknown",
//         "domain": "gmail.com",
//         "reason": "no_connect",
//         "mx_found": true,
//         "catch_all": null,
//         "disposable": false,
//         "smtp_check": false,
//         "did_you_mean": "",
//         "format_valid": true
//       };

// let str=``;
// for(let keys in result){
// str+=<div>${keys}:${result[keys]}</div>
// }
// resultCont.innerHTML=str;
