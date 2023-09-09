const blogModel = require("../models/blogModel");

async function createBlog(req, res) {
    const data = req.body;
    console.log(data);
    try {
        const result = await blogModel.create(data)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error);
    }
}


module.exports = {
    createBlog: createBlog
};