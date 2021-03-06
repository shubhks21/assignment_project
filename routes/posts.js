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


// FINDS SPECIFIC POSTS BY ID
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


// FINDS SPECIFIC POSTS BY time
router.get
('/:day/:hours/:minutes', async (req,res) => 
    {
        try{
            const spost = await Post.find({timing:{day: req.params.day, hours:req.params.hours, minutes:req.params.minutes}});
            //console.log(req.params.day);
            //console.log(req.params.minutes);
            res.json(spost);
        }
          catch(err)
          {
            res.json({message:err});
          } 
      
           
        
      
    }    
);



// DELETING A TICKET
router.delete
('/:ticketid', async (req,res) => 
    {
        try{
            const removedPost = await Post.remove({_id : req.params.ticketid});
            res.json(removedPost);
        }
        catch(err){
            res.json({message:err});
        }
      
    }    
);

// UPDATING A POST BY ID
router.patch
('/:ticketid', async (req,res) => 
    {
        try{
            const updatedPost = await Post.updateOne(
                {   _id : req.params.ticketid},
                { $set: { timing:
                
                     {
                         day: req.body.timing.day,
                        hours: req.body.timing.hours,
                        minutes: req.body.timing.minutes
                     } 
                  }
                }

             );      
                
                res.json(updatedPost);
                
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
                        day: req.body.timing.day,
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
