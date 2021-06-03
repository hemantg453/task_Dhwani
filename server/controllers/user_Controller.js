var User_Data = require("../models/users")

class userData {
    // ----------------------POST_USER_DATA------------------------------------------
    async post_data(req, res) {
        var { first_name, last_name, email, gender } = req.body
        var data_user = new User_Data({
            first_name: first_name,
            last_name: last_name,
            email: email,
            gender: gender
        })
        data_user.save()
            .then((data) => {
                console.log(data)
                return res.status(200).json({ USER_DATA: data })
            })
            .catch((error) => {
                return res.status(400).json({ error: error })
            })
    }

    // ----------------------GET_USER_DATA-----------------------------------------------

    async get_data(req, res) {
        try{
        var data = await User_Data.find()
        console.log("getData", data)
        return res.status(200).json({ data: data });
    }
    catch(error)
    {
        return res.status(400).json({ error: error })
    }
    }

}

module.exports = userData;