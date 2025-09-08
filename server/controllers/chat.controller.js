const { generateStreamToken } = require("../config/stream")

const getStreamToken = (req, res) => {
    try {
        const token = generateStreamToken(req.auth().userId); // res.auth() is provided by Clerk middleware to get authenticated user info i.e. userId from Clerk session object and pass it to generateStreamToken function to generate Stream token
        if (!token) {
            return res.status(400).json({ message: 'Invalid user ID' });
        }
        res.status(200).json({ token });
    } catch (error) {
        console.log("Error in getStreamToken:", error);
        res.status(500).json({
            message: 'Error generating Stream token',
            error: error.message
        })
    }
}

module.exports = { getStreamToken };