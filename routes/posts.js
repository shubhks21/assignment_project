const express = require('express');
const router = express.Router();
var bodyParser= require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })


const Post = require('../models/Post');


// FINDS ALL POSTS
router.get
('/', async (req,res) => 
    {
        try{
            const posts = await Post.find();
            res.json(posts);
        }
        catch(err){
            res.json({message:err});
        }
    }    

);


// FINDS SPECIFIC POSTS
router.get
('/:ticketid', async (req,res) => 
    {
        try{
            const post = await Post.findById(req.params.ticketid);
            res.json(post);
        }
        catch(err){
            res.json({message:err});
        }
      
    }    
);




// SUBMITS A POST
router.post
('/',urlencodedParser,(req,res) => 
    {
        console.log(req.body);
        if(req.body.timing.hours>23||req.body.timing.hours<0)
        {
           
                    res.json({message: "Please enter hours between 0 and 23 "});
                
                 return;

        }

        if(req.body.timing.minutes>59||req.body.timing.minutes<0)
        {
           
                    res.json({message: "Please enter minutes between 0 and 59 "});
                    
                    return;
                
                 

        }
        const post = new Post
        (
            {
                name: req.body.name,
                phone_number: req.body.phone_number,
                timing:
                
                    {
                        hours: req.body.timing.hours,
                        minutes: req.body.timing.minutes
                    }
             
                   
                    
                
            }
        );
        post.save()
        .then
        (
            data=>
            {
                res.json(data);
            }
        )
        .catch
        (err=>
            {
                res.json({message: err});
            }
        
        )
        
    }    

);

router.post
('/update',urlencodedParser,(req,res) => 
    {
        //console.log(req.body);
        if(req.body.name)
        {
           
                    res.json({message: " You don't have any bookinngs "});
                
                 return;

        }

        
        const post = new Post
        (
            {
                name: req.body.name,
                phone_number: req.body.phone_number,
                timing:
                    {
                        hours: req.body.timing.hours,
                        minutes: req.body.timing.minutes
                    }
             
                   
                    
                
            }
        );
        post.save()
        .then
        (
            data=>
            {
                res.json(data);
            }
        )
        .catch
        (err=>
            {
                res.json({message: err});
            }
        
        )
        
    }    

);


module.exports = router;
