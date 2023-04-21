function help(req,res){
    res.status(200).send({
        msg:"Successfully hitting help api",
        success:true,
        data:{
            contact:"+91 XXXXXXXXXX"
        }
    });
};

module.exports = {
    help
}