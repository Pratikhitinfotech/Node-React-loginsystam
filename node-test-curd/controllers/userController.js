const bcrypt = require("bcrypt");
const User = require('../models/userModel');


const register = async (req, res, next) => {
    try {

        const { firstName, lastName, email, password } = req.body;
        const finduserexist = await User.findOne({ email });
        if (finduserexist) {
            return res.json({ msg: "User Already Reagister", status: false });
        }
        var hasPass = await bcrypt.hash(password, 10);
        const users = await new User.create({ firstName, lastName, email, password: hasPass });

        res.status(200).json({ status: true, users });
    } catch (ex) {
        next(ex)
    }
}

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ msg: "Incorrect email and password", status: false });
        }
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.json({ msg: "Incorrect email and password", status: false });
        }
        // delete user.password;
        const { password : samplepass, ...userdata } = user._doc
        return res.json({ status: true, userdata });

    } catch (error) {

    }
}

module.exports = { register, login }