const axios = require('axios');

const get = async function () {
	try{
		var data = await axios.get('https://ge.globo.com/futebol/brasileirao-serie-a/');
		data = data.data;
		let script = '{"classificacao":[{"' + data.split('{"classificacao":[{"')[1];
		script = script.split(';')[0];
		//script = `${script}`
		script = JSON.parse(script);
		return new Promise((resolve, reject) => {
			resolve(script.classificacao);
		})
	}catch(err){
		return new Promise((resolve, reject) => reject(err));
	}
}

module.exports = get;
