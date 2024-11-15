// models/Post.js
const moment = require('moment');
const mongoose = require('mongoose');

const FEED = new mongoose.Schema({
    title: {
         type: String, 
         required: true ,
         maxlength: 15
        },
    content: { type: String, 
        required: true,
        maxlength: 40
     },
     createdAT:{
        type: Date,
        default: Date.now,
        get:function(createdAT){
            return moment( createdAT).format('MM /D /YYYY');
        }

     }
});

module.exports = mongoose.model('FEED', FEED);