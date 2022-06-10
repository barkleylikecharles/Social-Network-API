const { Schema, model } = require("mongoose");

constUserSchemal = new Schema (
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        
    }
)