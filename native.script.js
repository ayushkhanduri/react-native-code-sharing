const fs = require('fs');
const async = require('async');
const walk = require('walk');

const argument = String(process.argv[2]);
console.log(argument);

const walker = walk.walk('./app/shared',{followLinks: false});
let files =[];

walker.on('file',(root,stat,next)=>{
    files.push(root + "/" + stat.name);
    next();
})

walker.on('end',()=>{
    let replaceText = (argument==="web") ? "_PLATFORM" :  "native";
    let findText = (argument==="web") ? "native" : "_PLATFORM";
    console.log("find : " + findText + " and replace it with : " +replaceText);
    files.forEach((item)=>{
        let regExp = new RegExp(findText,"g");
        let contents = fs.readFileSync(item).toString().replace(regExp,replaceText);
        fs.writeFileSync(item , contents , 'utf-8');
    });
})