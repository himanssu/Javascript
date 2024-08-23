/// Stack(primitive) , Heap (non- primitive)
let name= "himanshu"
let anothername= name
anothername= "rahul"
console.log(name) //himanshu
console.log(anothername) // rahul
// ye isiliye hota h kyuki primitive datatypes me value store hoti h stack m
// non primitive me reference store hoti h stack m and jo reference hota h uska value or vo value store hoti h heap m 
// isliye jab hume koi bhi change karna h non primitive m to hume us reference se direct same data milta h or hum real data ko hi change krte h 
// pr primitive k case m stack me copy milti h data ki origional ni milta to change karne k baad bhi jo initial variable hoga vo change ni hoga
let user1={
    email: "user@gmail.com",
    gender: "male"
}
let user2=user1
user2.email="user2@gmail.com"
console.log(user1.email) //  user2@gmail.com
console.log(user2.email) //  user2@gmail.com
