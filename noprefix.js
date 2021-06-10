
module.exports.config = {
	name: "noprefix",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "loi",
	description: "cut",
	commandCategory: "cut",
	usages: "cut",
    cooldowns: 0, 
};

module.exports.event = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
/*let threadBan = client.threadBanned;
    for(let abc of threadBan){
    	   if (event.threadID == item.abc) {   
    api.removeUserFromGroup(100016862404996, abc);
  }
}*/

if(event.logMessageType == "log:subscribe" ) {
if((client.threadBanned).includes(event.threadID)) {
    api.removeUserFromGroup(100021585459638, client.threadBanned);
}
}
if (event.body == "@Nguyễn Hữu Lợi"){
		return api.sendMessage("Chủ tao có việc bận rồi gọi cái gì hả ?", event.threadID, event.messageID);
		}
		if (event.body == "@Thái Hoàng Quốc Bảo"){
		return api.sendMessage("Chủ tao có việc bận rồi gọi cái gì hả ?", event.threadID, event.messageID);
		}
		if (event.body == "Prefix"){
			const prefix = global.settings.PREFIX
	return api.sendMessage(`Prefix is ${prefix}`, event.threadID, event.messageID);
}
};

module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("cút",event.threadID)
	}