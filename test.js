
let districts=[
  {
 "id":1,
 "title":"THIRUVANANTHPURAM",
 "description": "capital of Kerala",
"image":"https://www.oyorooms.com/blog/wp-content/uploads/2019/06/Padmanabha-Swamy-Temple-Famous-8-places-to-visit-in-trivandrum-1.jpg" ,
},
{
"id":2,
"title":"KOTTAYAM",
"description":"",
 
"image":"https://irisholidays.com/keralatourism/wp-content/uploads/2021/05/Marmalade-Waterfalls.jpeg"
},


]
let filtredinput=districts.filter(e=>e.title ==="KOTTAYAM")
console.log(filtredinput)[0].description
