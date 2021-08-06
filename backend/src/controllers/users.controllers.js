const userCtrl = {};
const User = require('../models/User');

userCtrl.getUser = async (req, res) => {
    const users = await User.find()
    res.send(users)
}

userCtrl.createUser = async (req, res) => {
    const {username} = req.body;
    const newUser = new User({username});
    await newUser.save();
    res.json('Users created')
}

userCtrl.deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id);
    res.json({message: 'User Deleted'});
}
module.exports = userCtrl;