// let button=document.getElementsByClassName('Butt');
// button.addEventListener(submit,function(e){

// const FormObj={
//  userId:prompt(userId),
//  PhoneNo:Number.parseInt(prompt(PhoneNo)),
// };

let encryptOTP=(final_length)=>{
if(final_length<8){
alert("The otp needs to be of 8 digits minimum!!")
return;
}

const part1=function(length){
const part="";
const characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for(let i=0;i<length;i++){
part+=characters.charAt(Math.floor(Math.random*characters.length()));
}
return part;
}

const part2=function(length){
    const digpart="";
    const dig=[0,1,2,3,4,5,6,7,8,9]
    for(let i=0;i<length;i++){
    digpart+=dig[Math.floor(Math.random*dig.length())];
    }
    return digpart;
    }

    const part3=function(length){
        const smallpart="";
        const characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const smallchar=characters.toLowerCase();
        for(let i=0;i<length;i++){
        smallpart+=smallchar[Math.floor(Math.random*dig.length())];
        }
        return smallpart;
        }
    
    const phase_1=part1(final_length%3);
    const phase_2=part2(final_length%4);
    const phase_3=part3(final_length%3);

    let finalOTP=phase_1.concat(phase_2.concat(phase_3))

return finalOTP;
}

let button=document.getElementsByClassName('Butt');

button.addEventListener('click',function(event){
let OTP=encryptOTP(10);

})

