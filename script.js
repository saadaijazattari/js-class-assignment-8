        function show_img(){
    let img_box=document.querySelector(".img")
    img_box.innerHTML="<img src='./images/saad.jpg' alt=''>"
}

function more(){
    let more=document.querySelector(".more")
    more.innerHTML=`<p class='a more'>My name is Saad Aijaz. And my father name is Aijaz. I live in Mehmoodabad, Karachi.</p>
    <hr>
    <h1>Education</h1>
    <p class='a'>I am currently studying in first year. I completed my matric in 2023 with good grades. I am also learning computer-related subjects to improve my knowledge</p>
    <hr>
    <h1>skils</h1>
    <p class='a'>I have learned the advanced of HTML, CSS and basics of JS from Saylani. I am studying more to become a professional developer</p>
    <hr>
    <h1>Hobbies & Interests</h1>
    <p class='a'>I enjoy reading books and exploring new technology. In my free time, I like coding and designing simple projects.</p>
    <hr>`
}
let y_name=document.querySelector(".y_name")
let y_email=document.querySelector(".y_email")
let y_message=document.querySelector(".y_message")
function check_form(){
    if(y_name.value=="" || y_email.value=="" || y_message.value==""){
        alert("Plz fill all the fields")
    } else {
        alert("Thankyou you for contacting me !")
        y_name.value="";
        y_email.value="";
        y_message.value=""
    }
}