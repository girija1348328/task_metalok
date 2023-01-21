const jwt = require("jsonwebtoken")


const auth = async function (req, res, next) {

    try {
        let token = req.headers.authorization;
        token = token.split(' ')[1] 

        if (!token) return res.status(401).send({ status: false, message: "missing auth token in header" })

        decodedToken = jwt.verify(token, "template")

        req.decodedToken = decodedToken

        next()
    }
    catch (error) {
        if (error.message == 'invalid token') return res.status(400).send({ status: false, message: "invalid token" });

        if (error.message == "jwt expired") return res.status(400).send({ status: false, message: "please login one more time, token is expired" });

        if (error.message == "invalid signature") return res.status(401).send({ status: false, message: "invalid signature" });

        return res.status(500).send({ status: false, message: error.message });
    }
}

module.exports = { auth }

