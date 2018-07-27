var mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg",
        description: "Typewriter occupy kickstarter franzen vinyl chia lumbersexual chillwave bespoke trust fund 3 wolf moon schlitz cold-pressed forage beard. Coloring book cornhole squid neutra cardigan tumblr distillery normcore yuccie pork belly cronut trust fund pickled farm-to-table meggings. Hot chicken freegan shaman pitchfork chartreuse. Cardigan four dollar toast letterpress master cleanse taiyaki affogato."
    },
    {
        name: "Desert Mesa",
        image: "https://farm2.staticflickr.com/1281/4684194306_18ebcdb01c.jpg",
        description: "Typewriter occupy kickstarter franzen vinyl chia lumbersexual chillwave bespoke trust fund 3 wolf moon schlitz cold-pressed forage beard. Coloring book cornhole squid neutra cardigan tumblr distillery normcore yuccie pork belly cronut trust fund pickled farm-to-table meggings. Hot chicken freegan shaman pitchfork chartreuse. Cardigan four dollar toast letterpress master cleanse taiyaki affogato."
    },{
        name: "Canyon Floor",
        image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg",
        description: "Typewriter occupy kickstarter franzen vinyl chia lumbersexual chillwave bespoke trust fund 3 wolf moon schlitz cold-pressed forage beard. Coloring book cornhole squid neutra cardigan tumblr distillery normcore yuccie pork belly cronut trust fund pickled farm-to-table meggings. Hot chicken freegan shaman pitchfork chartreuse. Cardigan four dollar toast letterpress master cleanse taiyaki affogato."
    }
]

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } 
        console.log("Removed Campgrounds!");
    
        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("Added Campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created New Comment");
                            }
                        });
                            
                }
            });
        });
    });
       
        
    //add a few comments
}

module.exports = seedDB;
