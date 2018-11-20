const discord_token = "NDI4NTgyNTYwNDQwNzc4NzU3.DtLaxA.FfAcWG28LPQO26vLr7LK64nFoA4";
const prefix = "$"
client.login(discord_token);
client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== '232564113459511306') return;

if (message.content.startsWith(prefix + 'g')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**✅  : ${argresult}**`)
} else 

if (message.content.startsWith(prefix + 'w')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**✅  : ${argresult}**`)
} else 
if (message.content.startsWith(prefix + 'l')) {
client.user.setActivity(argresult, {type:'LISTENING'});
    message.channel.sendMessage(`**✅  : ${argresult}**`)
} else 

if (message.content.startsWith(prefix + 's')) {
  client.user.setGame(argresult, "https://www.twitch.tv/Justin-Ly0001");
    message.channel.sendMessage(`**✅  : ${argresult}**`)
}

});

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
