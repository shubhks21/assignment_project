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
            hours: Number,
            
            minutes: Number
        }

    }
    
    
);


module.exports = mongoose.model('Posts',PostSchema);