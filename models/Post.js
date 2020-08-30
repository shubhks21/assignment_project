const mongoose = require('mongoose');


const PostSchema = mongoose.Schema
(
    {
        name: 
        {
            type: String,
            required: true
        },

        phone_number:
        {
            type: Number,
            required: true
        },

        timing:
        {

            day: Date,

            hours: Number,
            
            minutes: Number
        },

        mark_expiry:
        {
            type: Boolean,
            default: 0
        }

    }
    
    
);


module.exports = mongoose.model('Posts',PostSchema);