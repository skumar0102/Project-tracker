import jwt from 'jsonwebtoken';

async function admin(req,res,next){
    let token = await req.headers.token;
    let result =  jwt.verify(token,process.env.JWT_SECRET_KEY);
    // if(!result) res.status(401).send('Access Denied');
    if(result.role === "Admin"){
        next();
    }else{
        res.status(401).send('Access Denied');
    }
}

async function hasTokenExpired(req,res,next){
    try {
        let token = await req.headers.token;
        let decoded_info = jwt.verify(token,process.env.JWT_SECRET_KEY);
        let interval = parseInt(new Date().getTime() / 1000) - decoded_info.iat;
        if(!(interval < decoded_info.expiresIn)){
            res.status(401).send("Token has been expired");
        }
        next();
    } catch (error) {
        console.log(error.message);
    }
}






export {admin};
