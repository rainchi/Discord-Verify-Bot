const Discord = require('discord.js');
const client = new Discord.Client();

var authkey = new Map();

client.on('ready', () => {
    console.log("機器人已載入,請再次確認HEROKU平台上已設定下列變數:VERIFIYED_ROLE_ID、MESSAGE_ALREADY_VERIFYED、MESSAGE_AUTH_KEY、MESSAGE_AUTH_SUCCESS、MESSAGE_AUTH_ERRORKEY、MESSAGE_AUTH_NOTFOUNDKEY、MESSAGE_CMD_ERROR");
})
client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) {
        return;
    }
    if (receivedMessage.content.startsWith("!")) {
        processCmd(receivedMessage);
    }
})
function processCmd(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1); // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" "); // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0]; // The first word directly after the exclamation is the command
    let arguments = splitCommand.slice(1); // All other words are arguments/parameters/options for the command

    if (primaryCommand == "auth") {
        var val = Math.floor(1000 + Math.random() * 9000).toString();
        if(receivedMessage.member.roles.has(process.env.VERIFIYED_ROLE_ID)){
            receivedMessage.channel.send(process.env.MESSAGE_ALREADY_VERIFYED);
            return;
        }
        authkey.set(receivedMessage.author.id, val);
        receivedMessage.channel.send(process.env.MESSAGE_AUTH_KEY.replace(/\<key\>/g, val));
    }else if (primaryCommand == "authkey") {
        if(receivedMessage.member.roles.has(process.env.VERIFIYED_ROLE_ID)){
            receivedMessage.channel.send(MESSAGE_ALREADY_VERIFYED);
            return;
        }
        var val = authkey.get(receivedMessage.author.id);
        if(arguments[0] != null && val!=null){
            if(arguments[0] == val){
                receivedMessage.member.addRole(process.env.VERIFIYED_ROLE_ID).catch(console.error);
                receivedMessage.channel.send(process.env.MESSAGE_AUTH_SUCCESS);
                authkey.delete(arguments[0]);
            }else{
                receivedMessage.channel.send(process.env.MESSAGE_AUTH_ERRORKEY);
            }
        }else if(arguments[0] == null){
            receivedMessage.channel.send(process.env.MESSAGE_CMD_ERROR);
        }else if(val == null){
            receivedMessage.channel.send(process.env.MESSAGE_AUTH_NOTFOUNDKEY);
        }
    }
}

client.login(process.env.BOT_TOKEN)
