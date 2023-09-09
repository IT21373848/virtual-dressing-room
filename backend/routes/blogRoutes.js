const express = require('express');
const { createBlog, readBlog, updateBlog, deleteBlog } = require('../controllers/blogController');

const blogRouter = express.Router();

blogRouter.get('/', readBlog);
blogRouter.post('/create', createBlog);
blogRouter.put('/:id', updateBlog)
blogRouter.delete('/:id', deleteBlog)

module.exports = blogRouter