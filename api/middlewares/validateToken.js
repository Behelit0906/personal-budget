import { jwtVerify } from "jose";

const tokenValidator = async (req, res, next) => {
    const {authorization} = req.headers;
    if(!authorization) return res.sendStatus(401);
    const parts = authorization.split(" ");
    const jwt = parts.length > 1 ? parts[1] : parts[0];

    const jwtPrivateKey = process.env.JWT_PRIVATE_KEY;
    const enconder = new TextEncoder();

    try{
        const {payload} = await jwtVerify(jwt, enconder.encode(jwtPrivateKey));
        req.body.userId = payload.userId;
        next();
    }
    catch(error){
        return res.sendStatus(401);
    }

}

export default tokenValidator;