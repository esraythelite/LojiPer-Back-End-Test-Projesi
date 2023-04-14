function verifyToken(req, res, next){
    const authorization = req.header("Authorization")
    if(!authorization){
        res.status(401).send("Access denied. No token provided.");
        return;
    }

    const token = authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_CODE);
    next();
}

module.exports = verifyToken;