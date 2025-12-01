document.getElementById("clickbtn").onclick = function () {
   let Mark = parseInt(document.getElementById("mark").value); // Convert to number
   let r = document.getElementById("resultp");
   let sname = document.getElementById("sname").value;
   document.getElementById("Sid").textContent = sname;
 
   if (Mark >= 90) {
     r.innerHTML = `Your Mark is ${Mark}, so you get <span style="color: green;font-size:50px;">A+</span>`;
   } else if (Mark >= 85) {
     r.innerHTML = `Your Mark is ${Mark}, so you get <span style="color: green;font-size:50px;">A</span>`;
   } else if (Mark >= 75) {
     r.innerHTML = `Your Mark is ${Mark}, so you get <span style="color: green;font-size:50px;">B+</span>`;
   } else if (Mark >= 65) {
     r.innerHTML = `Your Mark is ${Mark}, so you get <span style="color: yellow;font-size:50px;">B</span>`;
   } else if (Mark >= 55) {
     r.innerHTML = `Your Mark is ${Mark}, so you get <span style="color: yellow;font-size:50px;">B-</span>`;
   } else if (Mark >= 45) {
     r.innerHTML = `Your Mark is ${Mark}, so you get <span style="color: yellow;font-size:50px;">C</span>`;
   } else if (Mark <= 35) {
     r.innerHTML = `Your Mark is ${Mark}, so you get <span style="color: red;font-size:50px;">F</span>`;
   } else {
     r.innerHTML = `Your Enter is <span style="color: red;">invalid</span>`;
   }
 
   console.log(Mark);
 };