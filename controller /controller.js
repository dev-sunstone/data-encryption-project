const {getUsers,createUser} = require("../services /services.js")


async function getUsersController(req,res,next){
    let id = req.params.id;
    try{const getUsersData  = await getUsers(id)
    res.status(200).json({
        data : getUsersData,
        message : "user data fetched successfully." 
    })
    }catch(err){
        console.log(err)
    }
}


async function createUserController(req,res,next){
    let {
        name,
        email,
        phone 
    } = req.body
    try {
        const createUsers = await createUser({name,email,phone})
        res.status(200).json({
            data : createUsers,
            message : "user created successfully."
        })
    } catch(err) {
        console.log(err);
    }
}




module.exports = {createUserController,getUsersController}
