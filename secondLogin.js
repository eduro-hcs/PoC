const axios = require("axios");
const encrypt = require("./rsa_encrypt");
const cred = require("./cred");

const apiURL = "https://penhcs.eduro.go.kr/secondlogin";
const data = {
	deviceUuid: "",
	password: encrypt(cred.password)
};

(async () => {
	let ret = await axios.post(apiURL, data, {
		headers: {
			"Authorization": `Bearer ${cred.Authorization}`
		}
	});
	console.log(ret.data);
})();