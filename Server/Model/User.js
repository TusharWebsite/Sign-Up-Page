const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: String,
    password: String
});

// Hash the password before saving
UserSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, salt);
        user.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;
