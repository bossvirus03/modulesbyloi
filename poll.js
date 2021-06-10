module.exports.config = {
	name: "poll",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Loi",
	description: "Lấy thông tin osu thông qua tên người dùng",
	commandCategory: "other",
	usages: "osu username",
	cooldowns: 5,
    dependencies: ["request", "fs-extra"]
};
module.exports.run = function({ api, event, args, client, __GLOBAL }) {
	var content = args.join(' ')
			var title = args[0];
			var options = content.substring(content.indexOf(" -> ") + 4)
			var option = options.split(" | ");
			var object = {};
			if (option.length == 1 && option[0].includes(' | ')) option[0] = option[0].replace(' | ', ' ');
			for (var i = 0; i < option.length; i++) object[option[i]] = false;
			return api.createPoll(title, event.threadID, object, (err) => (err) ? api.sendMessage('error', event.threadID, event.messageID) : '');
		}