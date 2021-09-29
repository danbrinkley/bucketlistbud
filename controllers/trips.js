//TRIPS CONTROLLER
const Trips = require('../models/Trip');
const User = require('../models/User');

function newTrips (req, res) {
    res.render('trips/new',
    {user: req.body.googleId});
}

async function post (req, res) {
    try{
        req.body.user = req.user.id
        await Trips.create(req.body)
        res.redirect('/trips')
    } catch (err) {
        res.send(err)
    }
}


async function allTrips (req, res) {
    try {
        const trips = await Trips.find()
        .populate('user')
        .lean()
        res.render('trips/index', {
            trips,
        })
    } catch (error) {
        res.send('error')
    }
}

async function edit (req, res) {
    try { 
        const trips = await Trips.findOne({
            _id: req.params.id,
        })
        .lean()

        if(!trips) {
            return res.send(err)
        } if(trips.user != req.user.id) {
            res.redirect('/trips')
        } else {
            res.render('trips/edit', {
                trips,
            })
            }
        } catch (err) {
    return res.send(err)
        }
    }


async function update (req, res) {
    try {
        const trips = await Trips.findById(req.params.id)
        .lean()

        if(!trips) {
            return res.send(err)
        }
        if(trips.user != req.user.id) {
            res.redirect('/trips')
        } else {
      const trips = await Trips.findOneAndUpdate({_id: req.params.id}, 
                req.body, {
                    new: true,
                })
                res.redirect(`/trips/${trips._id}`)
            }
        } catch (err) {
            console.log(err)
            return res.send(err)
        
    }

}

async function deleteTrip (req, res) {
    try {
        const trips = await Trips.findById(req.params.id)
        .lean()

        if(!trips) {
            return res.send(err)
        }
        if(trips.user != req.user.id) {
            res.redirect('/trips')
        } else { await Trips.remove({ _id: req.params.id})
    res.redirect('/trips')
}
    } catch (err) {
    res.send(err) 
    }

}

async function showTrip (req, res) {
    try {
        const trips = await Trips.findById(req.params.id)
        .populate('user')
        .lean()
    
        res.render('trips/details', {
                trips,
            })
        } 
 catch (err) {
           res.send(err)
        }
    }


async function userProfile (req, res) {
    try {
        const trips = await Trips.find({
            user: req.params.userId
        })
        .populate('user')
        .lean()
        res.render('trips/user/index', {
            trips,
            user: req.user,  
        })
    } catch (err) {
        res.send(err)
    }
} 




module.exports = {
    newTrips,
    post,
    allTrips,
    edit,
    update,
    deleteTrip,
    showTrip,
    userProfile,

}
