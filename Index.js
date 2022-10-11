const express = require('express');
const BodyParser = require('body-parser');

const app = express();
const port = 3400;
app.use(BodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine',"ejs");  // Render krna ka lia..
var Items=["Play Cricket","Coding","Eating"]; // storing the UserItems


app.get('/',(req,res)=>{

    var today = new Date();
    var currentDay=today.getDay();
    var day="";
    var option={
        day : "numeric" ,
        month : "long",
        year : "numeric",
        weekday : "long",
    };
    var day = today.toLocaleDateString("en-US",option)
    // switch(currentDay){
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day = "Thrusday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         break;
    // } 
    res.render('list',{ListDay:day,newListItem:Items});
    // res.render('list',{TDate:today.getDate});

    // res.sendFile(__dirname+"/Index.html");
});

app.post("/",(req,res)=>{
        var UserItem = req.body.NewItems;
         Items.push(UserItem);
        res.redirect("/");
        
})
app.listen(port,()=>{
    console.log(`You are Listening to : ${port}`);
})