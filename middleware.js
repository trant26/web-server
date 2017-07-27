var middleware = {
    requireAuth: function(req,res,next){
        console.log('private route hit!');
        next();
    },
    logger: function(req, res, next){
        console.log(req.method + ' ' + new Date().toString());
        next();
    }

}

module.exports = middleware;