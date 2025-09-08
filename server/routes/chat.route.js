const express = require('express');
const { getStreamToken } = require('../controllers/chat.controller');
const { protectRoute } = require('../middlewares/auth.middleware');
const chatRouter = express.Router();

chatRouter.get('/token', protectRoute, getStreamToken);

module.exports = chatRouter;