/*
Created With char-mod-mail Package.
Created By Odd Coder.
Odd Coder Discord: https://discord.gg/7KtdeePrHV
Odd Coder Youtube: https://www.youtube.com/channel/UCwsiWQMSomXFjWWpRQbc35A
Thanks for using our coded bot.
*/
const Discord = require('discord.js');
const allIntents = new Discord.Intents(32767);
const client = new Discord.Client({
const keep_alive = require('./keep_alive.js')
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  allowedMentions: {
    parse: ["roles", "users", "eveoryone"],
    repliedUser: true,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: allIntents,
});

client.login(process.env.TOKEN);
const express = require('express')
const app = express();
const port = 3000
app.get('/', (req, res) => res.send('Odd is better.'))
app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);
const charModMail = require('char-mod-mail');
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);

  //Important Changing Area
charModMail.ModMail(client, {
  guildID: "1188874976951025675", //put your guild id here
  categoryID: "1188878225590460508", //put your category id here
  staffRole: "282861012648984576", //put your staff role id here
  embedColor: "#2f3136", //change the hax color code if you want
  anonymousReply: false/true, //make it false if only the staff can reply the user or make it true so anyone can reply.
  closedTitle: "Your Mod Mail Has Been Closed",
  closedMessage: "A Staff Member Has Deleted You Mod Mail!",
  staffOpenedTitle: "User Opened Mod Mail",
  staffOpenedMessage: "The User Opened A Mod Mail And Is Now Wait For A Reply!",
  userOpenedTitle: "Ticket Created",
  userOpenedMessage: "You Have Reached Air France Support Team, A Member Will Contact You Soon",
  wrongEmoji: "❎", // if you want you can change but don't change it recommaned.
  rightEmoji: "✅" // if you want you can change but don't change it recommaned.
})
});

