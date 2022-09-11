const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 1,
        max: 100,
        // Custom validation
        validate: {
            validator: v => v % 2 == 0,
            message: props => `${props.value} is not an even number`,
        }
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    },
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: {
        street: String,
        city: String,
    }
});

module.exports = mongoose.model("User", userSchema);