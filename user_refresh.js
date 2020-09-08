const axios = require("axios");
const cred = require("./cred");
const encrypt = require("./rsa_encrypt");

const apiURL = "https://penhcs.eduro.go.kr/userrefresh";
const data = {
	userPNo: cred.userPNo,
	orgCode: cred.org
};

(async () => {
	let ret = await axios.post(apiURL, data, {
		headers: {
			"Authorization": `Bearer ${cred.Authorization}`
		}
	});
	console.log(ret.data);
})();