document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".multi-form");
  
  const btn = document.querySelector(".btn");
  
  const step = document.querySelectorAll(".step");
  
  const username = document.querySelector("#username");
  
  const email = document.querySelector("#em");
  
  const errUser = document.querySelector(".err-user");
  
  const errEmail =document.querySelector(".err-email");
  
  const invalidEmailMsg = document.querySelector(".inv-email");
  
  const divBtns = document.querySelectorAll(".option");
  
  const list = document.querySelector("ul");
  
  
  const spUser = document.createElement('span');
  const spEmail = document.createElement('span');
  const pUser = document.querySelector('.p-user-info');
  const pEmail = document.querySelector('.p-email-info');
  
  const submitBtn = document.querySelector("#submit-btn");
  
  const stepperP = document.querySelector(".stepper-p");
  
  const stepperSp = document.querySelector(".stepper-sp");
  
  const stepItems = document.querySelectorAll(".item");
  
  
  
  let stepIndx = 0;
  
  function isValidEmail(emailValue) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(emailValue);
  }
  
  
  function resetForm() {
    // Reset the form fields
    form.reset();
  
    // Reset step index and show the first step
    stepIndx = 0;
    step.forEach((s, index) => {
      s.style.display = index === 0 ? "block" : "none";
    });
  
    // Reset button text
    submitBtn.style.display = "none";
    btn.style.display = "block";
  
    // Clear dynamically added elements
    list.innerHTML = ""; // Clear the list of selected options
    pUser.innerHTML = ""; // Clear the user info
    pEmail.innerHTML = ""; // Clear the email info
  
    // Reset error messages and styles
    username.style.border = "";
    email.style.border = "";
    errUser.style.display = "none";
    errEmail.style.display = "none";
    invalidEmailMsg.style.display = "none";
  }
  
  divBtns.forEach(divBtn => { 
    let isChecked = false;
  divBtn.addEventListener("click", function() {
    if(!isChecked){
      divBtn.id = "selected";
      isChecked = true;
      const li = document.createElement('li');
      li.textContent = divBtn.textContent;
      list.append(li);
    }
   
     });
  });
  
  
  
  
  btn.addEventListener("click",function(e){
    e.preventDefault();
  
    stepItems[stepIndx+1].id = "sel-item";
    
  
    if(stepIndx == 0 ){
      if(username.value.trim() === ""){
        username.style.border = "2px solid red";
        errUser.style.display = "block";
        return;
      }else{
        username.style.border = ""; 
        errUser.style.display = "none";
        spUser.textContent = username.value;
      }
      if(email.value.trim() === ""){
        email.style.border = "2px solid red";
        errEmail.style.display = "block";
        return;
      }else if(!isValidEmail(email.value)){
        email.style.border = "2px solid red";
        invalidEmailMsg.style.display = "block";
        return;
  
      }else{
        email.style.border = "";
        errEmail.style.display = "none";
        invalidEmailMsg.style.display = "none";
        spEmail.textContent = email.value;
        stepperSp.textContent = `${stepIndx + 1}`;
  
      }
      
    }
  
    if(stepIndx < step.length - 1){
      step[stepIndx].style.display = "none";
      stepIndx++;
      step[stepIndx].style.display = "block";
      stepperSp.textContent = `${stepIndx + 1}`;
      
    }
  
    if (stepIndx === step.length - 1  ) {
      btn.style.display = "none";
      pUser.append(spUser);
      pEmail.append(spEmail);
      submitBtn.style.display = "block";
      stepperSp.textContent = `${stepIndx + 1}`;
  
  
      submitBtn.addEventListener("click",function(){
        alert("SUCCESS ✅✅✅");
        resetForm();
      });
  
  
      }
    }
  );
    
  
  username.addEventListener("input",function(){
      if(username.value.trim() === ""){
        username.style.border = "2px solid red";
      }
      else{
        username.style.border = "";
      }
  });
  
  email.addEventListener("input",function(){
    if(email.value.trim() === ""){
      email.style.border = "2px solid red";
    }
    else{
      email.style.border = "";
    }
  });
  });
  
  