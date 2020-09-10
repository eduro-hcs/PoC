const axios = require("axios");
const cred = require("./cred");
const encrypt = require("./rsa_encrypt");

const apiURL = "https://penhcs.eduro.go.kr/registerServey";
const data = {
	"rspns01": "1",
	"rspns02": "1",
	"rspns03": null,
	"rspns04": null,
	"rspns05": null,
	"rspns06": null,
	"rspns07": "0",
	"rspns08": "0",
	"rspns09": "0",
	"rspns10": null,
	"rspns11": null,
	"rspns12": null,
	"rspns13": null,
	"rspns14": null,
	"rspns15": null,
	"rspns00": "Y",
	"deviceUuid": ""
};

(async () => {
	let ret = await axios.post(apiURL, data, {
		headers: {
			"Authorization": `Bearer ${cred.Authorization}`
		}
	});
	console.log(ret.data);
})();