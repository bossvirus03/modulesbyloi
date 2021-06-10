module.exports.config = {
	name: "tik",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "lợi",
	description: "Lấy info người dùng tiktok",
	commandCategory: "Info",
	usages: "tik [Text]",
	cooldowns: 10,
	dependencies: ["tiktok-scraper"],
};
module.exports.run = async function({ api, event, args, Currencies, utils }) {
  const axios = require('axios');  
const tikk = require('tiktok-scraper');
    const fs = require('fs');
    if (!args.join("") != " " ){ return api.sendMessage("Bạn phải ngập id tiktok !!!", event.threadID, event.messageID);}
var uid = args[0];
    try {
        const options = { 
            number: 100,
            by_user_id: true, 
            sessionList: ['sid_tt=01b48a403ce585d04be97107dc122c7c'] 
        };
        const user = await tikk.getUserProfileInfo(uid, options);
      var id = user.user.uniqueId;
     var name = user.user.nickname;
      var followe = user.stats.followerCount;
       var followi = user.stats.followingCount;
       var video = await user.stats.videoCount;
   
       var abc = await user.user.signature;
        var tym = await user.stats.heart;
       var img = await user.user.avatarMedium;
        var path = __dirname + "/cache/tik1.png";
    let getimg = (await axios.get(`${img}`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(path, Buffer.from(getimg, "utf-8"));
        console.log(user);
    } catch (error) {
        console.log(error);
    }
    var body = `👀Tên:${name}\n🪧ID:${id}\n${abc}\n✅Follower: ${followe}\n❌Following: ${followi}\n💗Số lượt tym: ${tym}\n🖥Số video: ${video}\n`
    
return api.sendMessage({body: body, attachment: fs.createReadStream(__dirname + "/cache/tik1.png")}, event.threadID, event.messageID);
}
