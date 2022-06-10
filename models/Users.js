const { Schema, model } = require("mongoose");

const UserSchema = new Schema (
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Thoughts",
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: "Users",
            }
        ],
    },
    {
        toJSON: 
        {
            virtuals:true,
            getters: true,
        },
        id: false,
        }
);

//Get total count of friends
UserSchema.virtual("friendCount").get(function () {
    return this.friends.length;
  });

const Users = model("Users", UserSchema)  

module.exports = Users;