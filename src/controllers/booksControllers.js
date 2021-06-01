const {books} =require("../models/")

module.exports = {
    getAllBooks : (req, res)=>{
        books.findAll()
        .then((data)=>{

            res.send({
                msg : "succes",
                status : 200,
                data
            })
        })
        .catch ((err)=>{
            res.send({
                msg : "error",
                status : 500,
                err,
            })
        })
    },
    postBooks : (req, res)=>{
        let{body} = req;
        books.create(body)
        .then((data)=>{
            res.status(200).send({
                msg: "succes post data",
                status : 200,
                data
            })
        })
        .catch((err)=>{
            res.status(500).send({
                msg: 'failed get data',
                status: 500,
                err,
            })
        })
    },
    getDataById :(req,res)=>{
        let{ id }=req.params;
        books.findOne({
            where : {id},
        })
        .then ((data)=>{
            res.status(200).send({
                msg: 'succes get data By Id',
                status:200,
                data
            })
        })
        .catch((err)=>{
            res.status(500).send({
                msg: 'failed while get data where By Id',
                status: 500,
                err,
            })
        })
    },
    //delete
    deleteDataById :(req, res)=>{
        let{id}=req.params;
        books.destroy({
            where : {id},
        })
        .then((data)=>{
            res.status(200).send({
                msg: 'succes delete data by id',
                status: 200,
                data
            })
        })
        .catch((err)=>{
            res.status(500).send({
                msg: 'failed delete data by id',
                status: 590,
                err,
            })
        })
    },
    //put
    putDataById: (req, res)=>{
        let{id}=req.params;
        let{body}=req;
        books.update(body,{
            where:{id}
        })
        .then((data)=>{
            res.status(200).send({
                msg: 'succes edit data by id',
                status: 200,
                data
            })
        })
        .catch((err)=>{
            res.status(500).send({
                msg: 'failed edit data by id',
                msg: 500,
                err,
            })
        })
    }
}