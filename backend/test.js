import jwt from 'jsonwebtoken';

let secret = 'fkjdsahfkjsdahfkjh34523478905ytejshf9235ht';

// let token = jwt.sign({id:852963,name:"sushil",location:"chandigarh",expiresIn:20},secret);
// console.log(token);

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODUyOTYzLCJuYW1lIjoic3VzaGlsIiwibG9jYXRpb24iOiJjaGFuZGlnYXJoIiwiZXhwaXJlc0luIjoyMCwiaWF0IjoxNjgyNTA1OTE4fQ.6c-OrBSi5UHVlRrqHKTiXx-RI7rbR8lSJw6_4WMR1m4";

// decode the token

let info = jwt.verify(token,secret);
let duration = parseInt(new Date().getTime() /1000) - info.iat;
if(duration > info.exp){
    console.log('Token has been expired');
}

console.log("Duration : ",duration);
console.log("Info", info);