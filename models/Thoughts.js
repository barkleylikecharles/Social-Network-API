// Mongoos and Moment
const { Schema, Model, DataTypes } = require('mongoose');
const moment = require('moment');

//Reaction Schema
const ReactionSchema = new Schema(
    {
        reactionId: {
            tpye: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
            required: true,
            maxlength: 280,
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 300,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => moment(createdAtVal),
        },
    },
    {
        toJSON: {
            getters: true,
        }
        }
    );

//Thoughts Schema
const ThoughtsSchema = new Schema(
    {
        thoughtText: {
            tpye: String,
            required: true,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) = moment(createdAtVal)
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
    }
);

// Category.init(
//   {
//     // define columns
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     category_name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     }, 
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'category',
//   }
// );
const Thoughts = model("Thoughts", ThoughtsSchema);

module.exports = Thoughts;