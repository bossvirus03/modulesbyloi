module.exports.config = {
	name: "out",
	version: "1.0.2",
	credits: "loi",
	hasPermssion: 1,
	description: "Quản lý tin nhắn chờ của bot",
	commandCategory: "System",
	usages: "pending",
	cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
	if (!args[0]) {
		api.sendMessage("Đã nhận lệnh rời nhóm từ admin !!!", event.threadID);
 api.removeUserFromGroup(`100016862404996`, event.threadID);
	api.removeUserFromGroup("100021585459638", event.threadID);
}
 	api.sendMessage("Đã nhận lệnh rời nhóm từ admin !!!", args.join(" "))

 api.removeUserFromGroup(`100016862404996`, args.join(" "));
 	 api.removeUserFromGroup(`100021585459638`, args.join(" "));


}