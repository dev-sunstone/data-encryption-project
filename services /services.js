const { Sequelize } = require("sequelize");
const db = require("../models")


const AES_KEY = "4u7x!A%D*G-KaPdS";


async function getUsers(id) {
    try {
        const result = await db.Users.findOne({
            where: {
                id: id
            },
            attributes: [
                "name",
                [
                    Sequelize.cast(Sequelize.fn('aes_decrypt',Sequelize.col('email'),AES_KEY),
                        'CHAR(255)'),
                    "email"
                ],
                "phone"
            ]
        })
        return result;
    } catch (err) {
        console.log(err)
    }
}

async function createUser({ name, email, phone }) {
    try {
        return db.Users.create({
            name,
            email: Sequelize.fn("aes_encrypt", email, AES_KEY),
            phone
        })
    } catch (err) {
        console.log(err)
    }
}


module.exports = { getUsers, createUser }