const axios = require("axios");
const encrypt = require("./rsa_encrypt");
const cred = require("./cred");

const apiURL = "https://penhcs.eduro.go.kr/loginwithschool";
const data = {
	birthday: encrypt(cred.birthday), //YYMMDD
	name: encrypt(cred.name),
	orgcode: cred.org
};

(async () => {
	let ret = await axios.post(apiURL, data);
	console.log(ret.data);
})();