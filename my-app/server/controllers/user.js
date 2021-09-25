const User = require('../models/User')
const Trip = require('../models/Trip')

const index = (req, res, next) => {
    User.find({}, (err, user) => {
        Trip.find({}, (err, trip) => {
        res.render("user/index", {
            // users,
            user: req.user,
            })
		});
	});
};

const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) return next();
	res.redirect("/auth/google");
};

const indexTrip = (req, res) => {
    Trip.find({}, (err, trips) => {
        if(err) return res.send(err);
        res.render('user/trips/index', {
            trips,
        })
    })
}

function updatePage(req, res) {
    trip.findById(trip.id, (err, trip) => {
        res.render('user/trips/update', {
            trip
        });
    })
    
};

function updateTrip(req, res) {
    trip.findOneAndUpdate({"_id": user.trip.id}, {
        location: req.body.location,
        date: req.body.date,
    }, function(err, trip) {
        res.redirect(`/user/trips`)
    })
};

function deleteTrip(req,res) {
    console.log(trip.id);
    trip.findOneAndDelete({"_id": user.trip.id})
    .then((err) => {
        if (err) console.log(err)
        res.redirect(`/user/trips`)
    })
};


// function newUser(req, res) {
//     res.render('user/new')
// };

// function create(req, res){
//     req.body.name;
//     req.body.email;
//     req.body.hometown;
    
//     const newUser = new User(req.body);
    
//     newUser.save(function(err, user) {
//         if (err) return res.send(err);
//         res.redirect('/user');
//     });
// }

// function profile(req, res) {
//     User.find({googleId: req.user.googleId},
//         function(err, user){
//             res.redirect('user/index', {user})
//              })
            
//     }        
    
    
    module.exports = {
        // profile,
        index,
        isLoggedIn,
        indexTrip,
        updatePage,
        updateTrip,
        deleteTrip,
    };
