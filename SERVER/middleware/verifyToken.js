const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).send({ auth: false, message: 'No token provided.' });

    const tokenParts = token.split(' ');
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
        console.log("Token format is incorrect.");
        return res.status(400).send({ auth: false, message: 'Token format is incorrect.' });
    }
    console.log("authetooken",token)
    const actualToken = tokenParts[1];
    console.log("actualToken",actualToken)

    jwt.verify(actualToken, process.env.JWT_SECRET, function(err, decoded) {
        if (err) {
            console.log("Failed to authenticate token.", err);
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        }
        req.userId = decoded.id;
        next();
    });
}

module.exports = verifyToken;