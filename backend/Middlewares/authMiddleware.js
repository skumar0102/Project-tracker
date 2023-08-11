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






export {admin};
