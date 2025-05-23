const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    authorID: {
        type: String,
        required: true
    },
    repositoryID: {
        type: String,
        required: true
    },
    //releaseID: {
    // type: String,
    // required: true
    // },
    // releaseTag: {
    //   type: String,
    //   required: true
    // },
    repoName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    usernameImageURL: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
//  rating: {
//    type: Number,
//    min: 1, max: 5

    //},

    //title: {
    //  type: String,
    //   required: true
    // },
    body: {
        type: String,
        required: true
    },





});

module.exports = mongoose.model('Comment', commentSchema);