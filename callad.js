module.exports.config = {
	name: "callad",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "loi",
	description: "Lấy thông tin lỗi của bot.",
	commandCategory: "Admin",
	usages: "callad",
	cooldowns: 5,
};
module.exports.handleReply = async function({ api, args, event, handleReply }) {
  let {body} = event;
return api.sendMessage(body, handleReply.id, handleReply.messID);
}
const request = require('request')
const fs = require('fs')
const axios = require("axios")	
module.exports.run = async ({ event, api, args, client, Currencies, Users, utils, global, reminder }) => {
var idbox = event.threadID;
	var content = args.join(' ');
	        const listAdmin = global.config.ADMINBOT;
			if (!content) return api.sendMessage('Có vẻ như bạn chưa nhập thông tin, vui lòng nhập thông tin lỗi bạn gặp phải!', event.threadID, event.messageID);
			var threadName = (await api.getThreadInfo(event.threadID)).name;		
 let data = await api.getUserInfo(event.senderID);			
		let name = data[event.senderID].name;
				let vanity = data[event.senderID].vanity;
				var bodyy = `Báo cáo từ ${name} \nUID: ${event.senderID}\nGroup gặp lỗi: ${threadName}\nTid: ${event.threadID}\nUrl: ${vanity}\n https://fb.me/${vanity} \nNội dung: ${content}`
    api.sendMessage("🛠Thông tin của bạn đã được gửi tới admin !!!🛠",event.threadID);
     var path = __dirname + "/cache/tik1.png";
    let getimg = (await axios.get(`https://api.miraiproject.tk/getavatar?ID=${event.senderID}`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getimg, "utf-8"));
      for(var idad of listAdmin){
   api.sendMessage({body: bodyy, attachment: fs.createReadStream(__dirname + "/cache/tik1.png")}, idad, (error, info) => client.handleReply.push({
      name: this.config.name,
      messageID: info.messageID,
      author: event.senderID,
      messID: event.messageID,
      id: idbox}
                   ));
  	
		}   
	}