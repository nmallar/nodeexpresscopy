//CommonJS , every file is a module(by default)
//Modules - Encapsulated code (share minimum)
const {mailar,ajit}=require('./2-names');
const say=require('./5-utils');
// say(mailar);
// say(ajit);
const data=require('./6-alternative');
//console.log(data);

require('./7-mind-grenade'); //calls the addValues() method