const axios = require("axios");
const cred = require("./cred");
const encrypt = require("./rsa_encrypt");

const apiURL = "https://penhcs.eduro.go.kr/selectGroupList";
const data = {
};

(async () => {
	let ret = await axios.post(apiURL, data, {
		headers: {
			"Authorization": `Bearer ${cred.Authorization}`
		}
	});
	console.log(ret.data);
})();