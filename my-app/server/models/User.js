//USER MODEL

//Pulling in mongoose
const mongoose = require('mongoose');

//Make a variable for mongoose.Schema
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        googleId: {type: String, required: true},
        name: { type: String, required: true },
		email: { type: String, required: true },
        image: {type: String},
    }, {
        timestamps: true
    });

    const User = mongoose.model('User', userSchema);

    module.exports = User;
