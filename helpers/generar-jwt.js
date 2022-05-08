const jwt = require('jsonwebtoken')




const key = process.env.SECRETORPRIVATEKEY;




const generarJWT = (uid = '') => {

    return new Promise((resolve, reject) => {
        const payload = { uid };
        const expireToken = { expiresIn: '1h' };

        jwt.sign(payload, key, expireToken, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se genero el JWT');
            } else {
                resolve(token);
            }
        })
    })

}


module.exports = {
    generarJWT
}