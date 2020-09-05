const mongo = require('../../../infra/database/mongoose');

class UsersRepository {
    async add(data) {
        const user = await mongo
        .collection('users')
        .insert(data)
        .then(result => {
            return result;
        });

        delete user.ops[0].password;
        return user;
    }

    async findByEmail(email) {
        
    }
}
module.exports = new UsersRepository();