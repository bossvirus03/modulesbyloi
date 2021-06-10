module.exports.config = {
	name: "iss",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "loi",
	description: "lấy ảnh trai",
	commandCategory: "Hình ảnh",
	usages: "gif bomman",
	cooldowns: 5,
	dependencies: ["request"],
};
	
module.exports.run = async ({ event, api, args, client, Currencies, Users, utils, __GLOBAL }) => {
		const request = require('request')
	return request(`http://api.open-notify.org/iss-now.json`, (err, response, body) => {
				if (err) throw err;
				var jsonData = JSON.parse(body);
				api.sendMessage(`Vị trí hiện tại của International Space Station 🌌🌠🌃\n- Vĩ độ: ${jsonData.iss_position.latitude}\n- Kinh độ: ${jsonData.iss_position.longitude}`, event.threadID, event.messageID);
			});
		}