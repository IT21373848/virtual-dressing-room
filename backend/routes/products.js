const router = require("express").Router();
const { response } = require("express");
let Student = require("../models/product");

router.route("/add").post((req,res)=>{

    const image = req.body.image;
    const title = req.body.title;
    const price = req.body.price;

    const newStudent = new Student({
        image,
        title,
        price
    })

    newStudent.save().then(()=>{
        res.json("Item Aded")
    }).catch((err)=>{
        console.log(err)
    })

})


router.route("/").get((req,res)=>{

    Student.find().then((todos)=>{
        res.json(todos)
    }).catch((err)=>{
        console.log(err)
    })

})

router.route("/update/:id").put(async (req, res) =>{
    let todoId = req.params.id;
    const {
        image,
        title,
        price} = req.body;

    const updateStudent = {
        image,
        title,
        price
    }

    const update = await Student.findByIdAndUpdate(todoId, updateStudent)
    .then(()=>{
        res.status(200).send({status: "Item Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data",error:err.message});
    })
})

//Delete User by ID
router.route("/delete/:id").delete(async (req, res) => {
    let todoId = req.params.id;

    await Student.findByIdAndDelete(todoId)
    .then(() => {
        res.status(200).send({status: "deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete",error:err.message})
    })
})

module.exports = router;