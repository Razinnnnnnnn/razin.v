function sendMail(){
    var params={
        name:document.getElementById("name").value ,
        email:document.getElementById("email").value ,
        message:document.getElementById("message").value , 
    }
const seviceID= "service_lc3hyzk"
const templateID="template_2nflays";

emailjs
.send(seviceID,templateID,params)
.then((res)=>{
        document.getElementById("name").value= "";
         document.getElementById("email").value= "";
          document.getElementById("message").value= "";
          console.log(res);
          alert("your message send successfully")


    })
.catch((err) => console.log(err));
}