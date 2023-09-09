const blogModel = require("../models/blogModel");


async function readBlog(req, res) {
    try {
        const result = await blogModel.find()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error);
    }
}

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

async function updateBlog(req, res) {
    const {id} = req.params
    const data = req.body;
    try {
        const isExist = await blogModel.findById(id)
        if(isExist){
            const result = await blogModel.findByIdAndUpdate(id,data);
            res.status(200).json(result)
        }else{
            res.status(500).json({error: 'Blog Not Exist'})
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

async function deleteBlog(req, res) {
    const {id} = req.params
    try {
        const isExist = await blogModel.findById(id)
        
        if(isExist){
            const result = await blogModel.findByIdAndDelete(id);
            res.status(200).json({message: 'Successfully Deleted', result: result})
        }else{
            res.status(500).json({error: 'Blog Not Exist'})
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    createBlog: createBlog,
    updateBlog: updateBlog,
    deleteBlog : deleteBlog,
    readBlog: readBlog
};