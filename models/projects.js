const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    visible: Boolean,
    active: Boolean,
    imageUrl: String,
    title: String,
    description: String,
    resources: Array,
    githubUrl: String,
    siteUrl: String,
    creationDate: Date,
    updateDate: Date,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
})

const projectModel = mongoose.model('projects', projectSchema)

module.exports = projectModel