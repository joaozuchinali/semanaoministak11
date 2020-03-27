const connection = require('../database/connections');
const cripto = require('crypto');

module.exports = {

    async list (request, response){

        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },
    
    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;

        const id = cripto.randomBytes(5).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
};