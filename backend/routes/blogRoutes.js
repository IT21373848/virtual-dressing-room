const express = require('express');
const { createBlog } = require('../controllers/blogController');

const blogRouter = express.Router();

blogRouter.post('/create', createBlog);

module.exports = blogRouter