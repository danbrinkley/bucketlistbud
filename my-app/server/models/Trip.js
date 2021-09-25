//TRIP MODEL

//Pulling in mongoose
const mongoose = require('mongoose');

//Make a variable for mongoose.Schema
const Schema = mongoose.Schema;

//Creating a repeatable outline for data mapped to the bucket list event
const tripSchema = new Schema (
    {
        title: {type: String, required: true},
        eventDate: Date,
        location: {type: String, required: true},
        description: {type: String},
        stay: {type: String,
        enum: ["Hotel", "AirBnB", "With Family/Friends", "Be a Nomad"]
        },
        user: {type: Schema.Types.ObjectId, ref: 'User'},
        activity: [{type: Schema.Types.ObjectId, ref: 'Activity'}],
    }, {
        timestamps: true
    }
);

const Trips = mongoose.model('Trips', tripSchema);

// export
module.exports = Trips;
