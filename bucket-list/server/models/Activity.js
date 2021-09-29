//ACITIVTY MODEL

//Pulling in mongoose
const mongoose = require('mongoose');

//Make a variable for mongoose.Schema
const Schema = mongoose.Schema;

const activitySchema = new Schema(
    {
        activity: { type: String, required: true },
        location: { type: String, required: true },
        trips: {type: Schema.Types.ObjectId, ref: "Trips"},
        user: {type: Schema.Types.ObjectId, ref: "User"}
    }, {
        timestamps: true
    });

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;
