const protectRoute = (req, res, next) => {
    try {
        if (!req.auth() || !req.auth().userId || !req.auth().Authenticated) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        next();
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

module.exports = { protectRoute };