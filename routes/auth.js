const router = require('express').Router();
const User = require('../model/User');
const {registerValidation, loginValidation} = require('../validation');


router.post('/register', async (req, res)=>{
    //lets validate user
    const {error} = registerValidation(req.body)

    if(error) return res.status(400).send(error.details[0].message)
    // cheacking already exists user
    const emailAlreadyExits = await User.findOne({email: req.body.email})
    if(emailAlreadyExits)  return res.status(400).send("Email Already exists")
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password

    });
    
    try {
        const savedUser = await user.save();
        res.send(savedUser);
        
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router;