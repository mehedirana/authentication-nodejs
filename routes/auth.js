const router = require('express').Router();
const User = require('../model/User');
const bodyParser = require('body-parser');
const Joi = require('joi');


router.post('/register', async (req, res)=>{
    //lets validate user
    const {error} = schema.validate(req.body)

    if(error) res.status(400).send(error.details[0].message)

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password

    });
    
    try {
        const savedUser = await user.save();
        // console.log(`saved User: ${savedUser}`);
        res.send(savedUser);
        
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router;