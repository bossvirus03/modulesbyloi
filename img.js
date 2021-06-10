module.exports.config = {
	name: "img",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Lợi",
	description: "ảnh blabla",
	commandCategory: "Hình ảnh",
	usages: "gai, trai, ...",
	cooldowns: 1,
};
    const axios = require('axios')
	const fs = require('fs')
	const request = require('request') 
module.exports.run = ({ api, event, args, __GLOBAL }) => {
if (!args.join("") != " " ) return api.sendMessage("Các tag của img\ngai, trai, gai2k, wibu, duckbo, jimmy, cosplay, meme, fox, meow", event.threadID, event.messageID); 
axios.get(`https://api.berver.tech/${args.join(" ")}`).then(res => {
				let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
				let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/meme.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/meme.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/meme.${ext}`)).on("close", callback);
			})
switch (args[0]) {
case "meow": {
	return request('http://aws.random.cat/meow', (err, response, body) => {
				let picData = JSON.parse(body);
				let getURL = picData.file;
				let ext = getURL.substring(getURL.lastIndexOf(".") + 1);
				let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/meow.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/meow.${ext}`), event.messageID);
				};
				request(getURL).pipe(fs.createWriteStream(__dirname + `/cache/meow.${ext}`)).on("close", callback);
			});
}
      }
  }
