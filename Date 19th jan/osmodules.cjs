const { timeStamp } = require('console');
const os=require('os'); //system information require krte hain
const totalmemory=os.totalmem()/(1024*1024*1024); //total memory in gb
const freememory=os.freemem()/(1024*1024*1024); //free memory in gb
const plateform=os.platform();  //operating system ka platform
const cpus=os.cpus()[0].model;   //cpu ki information

const uptime=os.uptime()/3600; //system kitne time se chalu hai seconds me
const userinfo=os.userInfo(); //current user ki information

//set interval to print memory info every 5 seconds
const fs=require('fs');
const log=`
Time:${timeStamp}
free Memory: ${freememory}
uptime:${uptime}
userinfo:${userinfo.username}`


setInterval(() => {
    fs.appendFile("./os_info.txt",log,(err)=>{
        if(err){
            console.log("error");
        }
    })
}, 5000);