// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

let submitButton = document.getElementById("submit-button");
let contactPage = document.getElementById("contact-page");

function changeStyle(){
    let message = "Thank you for your message";
    let messageElement = document.createElement("span");    
    messageElement.textContent = message;
    messageElement.style.fontSize = "24px";
    contactPage.innerHTML = ""; 
    contactPage.appendChild(messageElement); 
}
submitButton.addEventListener("click",changeStyle);