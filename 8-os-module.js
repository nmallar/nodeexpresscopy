
// modules
const { log } = require('console');
const os =require('os');
const user=os.userInfo();
console.log("Lets understand our computer details :");
console.log(`User information : ${user.username}`);
console.log(`User information : ${user.homedir}`);
console.log(`User information : ${user.uid}`);
console.log(`System uptime in seconds is ${os.uptime}`);
console.log("My laptop OS is: "+os.platform);
//console.log(`My laptop has ${os.cpus()} CPUS`);
console.log(`Hostname is ${os.hostname}`);

const currentOS={

    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOS);