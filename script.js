const mongoose = require("mongoose");
const User = require("./user");

mongoose.connect("mongodb://localhost/testdb", 
    () => {
        console.log("Connected to database!");
    },
    (e) => {
        console.log("Connection to database failed.");
    }
)

// Create new user
/*
const user = new User({ name: "Mihir", age: 20 });
user.save().then(() => console.log("User saved"));
*/
// Or use .create()
//const user = await User.create({ name: "Mihir", age: 20 });

// Values are not validated if functions other than .save() or .create() are used. Because of this it's recommended that you always find a user, update values, and use .save()

// .find() works in the same way as in mongosh
// .find() methods can be confusing, so mongoose has .where(), which has a lot of helper methods to make querying easier

const run = async () => {
    try {
        const user = new User({ 
                name: "Mihir", 
                age: 20,
                hobbies: ["Cardistry", "Skateboarding", "Coding"],
                email: "2002mihir@gmail.com",
        });
        await user.save().then(() => console.log("User saved"));
    }
    catch(e) {
        console.log(e.message);
    }
}

run();