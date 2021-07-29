const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    visible: Boolean,
    imageUrl: String,
    title: String,
    description: String,
    resources: Array,
    githubUrl: String,
    siteUrl: String
})

const projectModel = mongoose.model('projects', projectSchema)

module.exports = projectModel