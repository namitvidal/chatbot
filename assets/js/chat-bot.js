// jQuery(document).ready(function () {
//   jQuery(".fa-star-o").click(function () {
//     jQuery(".fa-star-o.fa-st").addClass("fa-star")
//     jQuery(".fa-star-o").addClass("fa-star-o")

//   });

// });
$("#conf-text").click( function() {
  sendFeedback();
});

$(document).ready(function() {
  // Add click event to hide .BoxSentMSG
  $(".refresh-img, .close-chat").click(function() {
    $("#chat-bot-container").addClass("before-chat");
  });

  // Add click event to show .BoxSentMSG
  $(".close-chat2").click(function() {
    $("#chat-bot-container").removeClass("before-chat");
  });
});




jQuery(".refresh-img").click(function () {
  // jQuery(".chat-bot-container").toggle();
  jQuery("body").toggleClass("overflow-body");
  $(".refresh-chat-popup").toggle();
  // $(".feedback-popup").fade();
  $(".chat-bot-container").toggleClass("chat-bot");


});

$(function () {
  $('.fa-star-o').click(function () {
    // $('.fa-star-o.fa-star').removeClass('fa-star-o');
    $(this).removeClass('fa-star-o');
    $(this).addClass('fa-star');
  });
});

$(document).ready(function () {
  $(".minimise-chat").click(function () {
    $("body").removeClass("full-screen-chatboat-body");
    $("body").removeClass("overflow-body");
    $(".chat-bot-container").toggle("");
    $(".chat-bot-container").animate({


    }, 500);

  });
});


jQuery(document).ready(function () {
  jQuery(".chat-img").click(function () {
    // jQuery(".chat-bot-container").toggle();
    jQuery("body").toggleClass("overflow-body");
    $(".chat-bot-container").toggle("");
    $(".chat-bot-container").animate({


    }, 500);
    $(".chat-bot-container").removeClass("chat-bot");

  });




  jQuery(".chat-chat-text").click(function () {
    // jQuery(".chat-bot-container").toggle();
    jQuery("body").toggleClass("overflow-body");
    $(".chat-bot-container").toggle("");
    $(".chat-bot-container").animate({


    }, 500);
    $(".chat-bot-container").removeClass("chat-bot");

  });


  jQuery(".close-chat").click(function () {
    // jQuery(".chat-bot-container").toggle();
    jQuery("body").toggleClass("overflow-body");
    $(".feedback-popup").toggle();
    // $(".feedback-popup").fade();
    $(".chat-bot-container").toggleClass("chat-bot");


  });


  jQuery(".close-chat2").click(function () {
    // jQuery(".chat-bot-container").toggle();
    $(".chat-bot-container").removeClass("chat-bot");

    $(".feedback-popup").hide();


  });

  jQuery(".close-refreshpopup").click(function () {
    // jQuery(".chat-bot-container").toggle();
    $(".chat-bot-container").removeClass("chat-bot");

    $(".refresh-chat-popup").hide();


  });



  jQuery(".close-chat1").click(function () {
    // jQuery(".chat-bot-container").toggle();
    jQuery("body").toggleClass("overflow-body");
    $(".chat-bot-container").toggle("");
    $(".feedback-popup").toggle();
    $(".chat-bot-container").animate({


    }, 500);
    // location.reload();
  });


});


// chat bot

var send_icon = document.getElementsByClassName("send-icon")[0];
var input = document.getElementsByClassName("InputMSG")[0];
var ContentChat = document.getElementsByClassName("ContentChat")[0];
var san1 = document.getElementById("send1");
var san2 = document.getElementById("send2");
// Add event Click for icon send input massage

send_icon.addEventListener("click", sendMessage);

// Add event Enter for input massage
input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    sendMessage();
  }
});

//With the help of this parameter, we can find out whether the function status_func_SendMsgBot is difficult to send a message or not (0 = no | 1 = yes)
var status_func_SendMsgBot = 0;

// ---------------- Massage User ----------------

// Function Send Massage user in content chat
function SendMsgUser() {
  //alert("7");
  if (input.value != "" && status_func_SendMsgBot == 0) {
    send1.classList.add("none");
    send2.classList.remove("none");

    let elementCPT = document.createElement("div");
    elementCPT.classList.add("massage", "msgCaption" );
    elementCPT.setAttribute("data-user", "true");
    elementCPT.innerHTML = '<span class="captionUser" style="font-weight:600;font-size:14px">You</span>';
    ContentChat.appendChild(elementCPT);

    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.setAttribute("data-user", "true");
    elementMSG.innerHTML = `<div class="user-response">${input.value}</div>`;
    ContentChat.appendChild(elementMSG);
    elementMSG.scrollIntoView();
    SendMsgBot(input.value);
    input.value = "";
  }
}

//****************Included by me ******************* */

function linkify(inputText) {
  const regex = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi; 
  const replacedText = inputText.replace(regex, '<a href="$1" target="_blank">Click Here</a>');
  return replacedText;
}
function textArea() {
const textArea = document.querySelector('.InputMSG'); // or use document.querySelector('.your-text-area-class');
  
                // Check if the text area element exists
                if (textArea) {
                  textArea.focus(); // Focus on the text area
                }
              }
// Select the refresh icon using its class name
const refreshIcon = document.querySelector(".refresh-img");

// Add a click event listener to the refresh icon
refreshIcon.addEventListener("click", function() {
    // Call the refreshChat function when the icon is clicked
    refreshChat();
});

// Define the refreshChat function
async function refreshChat() {
    // Clear the chat content
    clearChat();
    // Send a special message or command to Rasa to restart the conversation
    await restartConversation();
}

// Define the restartConversation function
async function restartConversation() {
    // Send a '/restart' message to the Rasa server
    await sendMessage('/restart');
}

// Define the clearChat function
function clearChat() {
    // Get the ContentChat element and clear its HTML content
    const ContentChat = document.getElementsByClassName("ContentChat")[0];
    ContentChat.innerHTML = '';
}

// Optional: Change the cursor to pointer when hovering over the image
// refreshIcon.style.cursor = "pointer";

function getUniqueUserID() {
  // Check if the user ID already exists in the session storage
  let userID = sessionStorage.getItem('userID');
  
  // If not, create a new unique user ID
  if (!userID) {
      userID = 'user_' + Date.now();
      sessionStorage.setItem('userID', userID);
  }
  
  return userID;
}

function boldSubstring(originalString, substring) {
  const regex = new RegExp(substring, 'g');
  return originalString.replace(regex, `<strong>${substring}</strong>`);
}

function getSubstringBeforeAndIncludingColon(str) {
  const parts = str.split(':');
  if (parts.length > 1) {
      return parts[0] + ':';
  } else {
      return str;  // or return null or an empty string based on your requirements
  }
}


let isAwaitingOtp = false;
let isAwaitingCorporateName = false;
let isAwaitingEmployeeNumber = false;
let isAwaitingPolicyNumber = false;
let isAwaitingMobileNUmber = false;
let isAwaitingPinCode = false;
let isAwaitingHospitalName = false;
let isAwaitingDOB = false;
let isAwaitingPolicyno = false;
let lines = "";

async function sendFeedback() {
    event.preventDefault();

  // Get form data
  var rating = document.querySelector('input[name="rating"]:checked');
  var query = document.getElementById('query-textbox').value;

  // Display form data in the console for debugging
  //console.log('Rating:', rating ? rating.id.split('-')[1] : 'Not provided');
  // console.log('Query:', query ? query : 'Not provided');
  const userID = getUniqueUserID();

  //https://tips.vidalhealthtpa.com/webhooks/rest/webhook
  if (query || rating)
  {
    try {
      const response = await fetch('https://tips.vidalhealthtpa.com/webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login: false, sender: userID, message: {"rating": rating.id.split('-')[1], "feedback": query}, slots: {} }),
      });

      document.getElementById('query-textbox').value = ''; // Clear the 'query-textbox' field
          document.querySelector('input[name="rating"]:checked').checked = false; // Uncheck the radio button
    } catch (error) {
      console.error('Error:', error);
    }
  }
}

async function sendMessage(message = null) {
  const userInput = document.getElementsByClassName("InputMSG")[0];
  // const chatOutput = document.getElementById('chatOutput'); // Make sure chatOutput is your chat container
  const ContentChat = document.getElementsByClassName("ContentChat")[0]; // If ContentChat is different from chatOutput

  if (message && typeof message !== 'string') {
      message = null;
  }
  
  let messageToSend = message !== null ? message : userInput.value;
  console.log(":::")
  console.log(messageToSend)

  if (messageToSend === '/restart') {
    // If so, clear the chat and don't display the loading UI
    clearChat();
    // Load the specified div elements
    loadInitialDivElements();
    isAwaitingOtp = false;
    isAwaitingCorporateName = false;
    isAwaitingEmployeeNumber = false;
    isAwaitingPolicyNumber = false;
    isAwaitingMobileNUmber = false;
    isAwaitingPinCode = false;
    isAwaitingHospitalName = false;
    isAwaitingDOB = false;
    isAwaitingPolicyno = false;
  }
  else {
      if(isAwaitingOtp) {
            messageToSend = "OTP: " + messageToSend;
            isAwaitingOtp = false; // reset the flag once the OTP has been modified
          }
      if(isAwaitingCorporateName) {
            messageToSend = "Corporate Name: " + messageToSend;
            isAwaitingCorporateName = false; // reset the flag once the OTP has been modified
          } 
      if(isAwaitingEmployeeNumber) {
            messageToSend = "Employee Number: " + messageToSend;
            isAwaitingEmployeeNumber = false; // reset the flag once the OTP has been modified
          } 
      if(isAwaitingPolicyNumber) {
            messageToSend = "Policy Number: " + messageToSend;
            isAwaitingPolicyNumber = false; // reset the flag once the OTP has been modified
          } 
      if(isAwaitingMobileNUmber) {
            messageToSend = "Mobile Number: " + messageToSend;
            isAwaitingMobileNUmber = false; // reset the flag once the OTP has been modified
          } 
      if(isAwaitingPinCode) {
            messageToSend = "PIN Code: " + messageToSend;
            isAwaitingPinCode = false; // reset the flag once the OTP has been modified
          } 
      if(isAwaitingHospitalName) {
            messageToSend = "Hospital Name: " + messageToSend;
            isAwaitingHospitalName = false; // reset the flag once the OTP has been modified
          } 
      if(isAwaitingDOB) {
            messageToSend = "DOB: " + messageToSend;
            isAwaitingDOB = false; // reset the flag once the OTP has been modified
          } 
      if(isAwaitingPolicyNumber) {
            messageToSend = "POLICY NUMBER: " + messageToSend;
            isAwaitingDOB = false; // reset the flag once the OTP has been modified
          } 
    }
  
  

  if(!messageToSend.trim()) {
      console.warn('Cannot send an empty message');
      return;
  }

  send1.classList.add("none");
  send2.classList.remove("none");

  // Display the user's message on the chat interface using the style from SendMsgUser()
  if (message === null) {
    //alert("6");
  //let elementCPT = document.createElement("div");
  //elementCPT.classList.add("massage", "msgCaption", "user-msg");
  //elementCPT.setAttribute("data-user", "true");
  //elementCPT.innerHTML = '<span class="captionUser" style="font-weight:600;font-size:14px">You</span>';
  //ContentChat.appendChild(elementCPT);

  let elementMSG = document.createElement("div");
  elementMSG.classList.add("massage", "user-msg");
  elementMSG.setAttribute("data-user", "true");
  elementMSG.innerHTML = `<div class="user-response">${messageToSend}</div>`;
  ContentChat.appendChild(elementMSG);
  elementMSG.scrollIntoView();
  }
  // http://localhost:5005/webhooks/rest/webhook
  // Clear the input field
  userInput.value = '';
  const userID = getUniqueUserID();
  // https://tips.vidalhealthtpa.com/webhooks/rest/webhook
  try {
        // messageToSend = btoa(messageToSend)
        // console.log("*********")
        // console.log(messageToSend)
        // sender = btoa(sender)
        const response = await fetch('http://10.1.0.3:8005/webhook', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ login: false, sender: "12", message: messageToSend, slots: {} }),
      });

      const responseData = await response.json();
      console.log("####")
      console.log(responseData)
      console.log(response)
      // console.log(responseData.length );
      
      //Display the bot's message on the chat interface using the style from SendMsgBot()
       let elementBotCPT = document.createElement("div");
       elementBotCPT.classList.add("captionBot", "msgCaption");
      if (responseData.length!=0)
      {elementBotCPT.innerHTML = '<img src="assets/img/favicon.png" alt="Vidal"> <span style="font-weight:600"></span>';}
       ContentChat.appendChild(elementBotCPT);
       elementBotCPT.scrollIntoView();
      if (responseData.length!=0)
      {
              let elementBotMSG = document.createElement("div");
              elementBotMSG.classList.add("massage");
              elementBotMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
              ContentChat.appendChild(elementBotMSG);
              elementBotCPT.scrollIntoView();
              
              let index = 0;
              setTimeout(() => {
          
                  responseData.forEach((botMessage) => {
                    if (botMessage.text) {
                      const loadingAnimationDiv = document.querySelector('.bot-response[text-first="true"]');
                    
                      // Check if the loading animation div exists, and remove it if found
                      if (loadingAnimationDiv) {
                        loadingAnimationDiv.remove();
                      }
                    
                      // Split the response text by newline character
                      const lines = botMessage.text.split('\n');
                    
                      // Filter out lines with "Latitude: 0" and "Longitude: 0"
                      const filteredLines = lines.filter(line => !line.includes("Latitude: ") && !line.includes("Longitude: "));
                    
                      const maxLinesToShow = botMessage.text.includes("Claim Number:") ? 2 : filteredLines.length;
                      let isExpanded = false;
                    
                      // Function to toggle the visibility of additional lines
                      function toggleLines() {
                        isExpanded = !isExpanded;
                        const visibleLines = isExpanded ? filteredLines : filteredLines.slice(0, maxLinesToShow);
                        const formattedText = visibleLines.map((line, index) => {

                          // Use a regular expression to find and replace labels with strong tags
                          line = line.replace(/^(.+?:)\s*(.*)$/, '<div><strong>$1</strong> $2</div>');
                          return `<div>${line}</div>`;
                          
                        }).join('');
                        contentDiv.innerHTML = linkify(formattedText);
                        toggleButton.textContent = isExpanded ? "Read Less" : "Read More";
                      }
                    
                      // Create a "Read More" button
                      const toggleButton = document.createElement('button');
                      toggleButton.style.cssText = "color: green; font-weight: bold; background: none; border: none; cursor: pointer; outline: none; margin-left: auto; width: 100%; text-align: right";
                    
                      // Check if the response text contains "Claim Number:" and show the button accordingly
                      if (botMessage.text.includes("Claim Number:")) {
                        toggleButton.textContent = "Read More"; // Set the initial text to "Read More"
                        toggleButton.addEventListener('click', toggleLines);
                      }
                    
                      // Create a container for the content
                      const contentDiv = document.createElement('div');
                      contentDiv.classList.add('bot-response', 'text', 'full-widthbox', 'ver-process');
                    
                      // Initial formatting of the text
                      const visibleLines = filteredLines.slice(0, maxLinesToShow);
                      const formattedText = visibleLines.map((line, index) => {
                        if (line.includes("https://"))
                        {
                            return `<div >${line}</div>`;
                        }
                        else{
                        // Use a regular expression to find and replace labels with strong tags
                        line = line.replace(/^(.+?:)\s*(.*)$/, '<div><strong>$1</strong> $2</div>');
                        return `<div>${line}</div>`;
                        }
                      }).join('');
                    
                      contentDiv.innerHTML = linkify(formattedText);
                    
                      // Append the "Read More" button and contentDiv to elementBotMSG
                      elementBotMSG.appendChild(contentDiv);
                    
                      if (toggleButton.textContent === "Read More") {
                        elementBotMSG.appendChild(toggleButton);
                      }
                    
                      elementBotCPT.scrollIntoView();
                    }
                      
                      
                      const text = botMessage.text;
                      const latitudeMatch = /Latitude: ([\d.]+)/;
                      const longitudeMatch = /Longitude: ([\d.]+)/;
                    
                      const latitude = text.match(latitudeMatch);
                      const longitude = text.match(longitudeMatch);
                    
                      if (latitude && longitude) {
                        const lat = latitude[1];
                        const lon = longitude[1];
                        
                        // Create the Google Maps iframe URL
                        const mapUrl = `https://maps.google.com/?q=${lat},${lon}&zoom=15&output=embed`;
                    
                        // Create the iframe element
                        const iframe = document.createElement('iframe');
                        iframe.width = '100%';
                        iframe.height = '100px';
                        iframe.frameborder = '0';
                        iframe.style.border = '1px solid #008C8D';
                        iframe.className = 'bot-response text map-border'; // Use 'className' instead of 'class'
                        iframe.src = mapUrl;
                        iframe.allowFullscreen = true;
                    
                        // Include the iframe in a new div element
                        const googleMapDiv = document.createElement('div');
                        googleMapDiv.id = 'google-map';
                    
                        // Append the iframe to the div
                        googleMapDiv.appendChild(iframe);
                    
                        // Append the div to a parent element, for example, elementBotMSG
                        elementBotMSG.appendChild(googleMapDiv);
                      

                          
                        } else {
                          console.log("Latitude not found in the text.");
                        }
                      

                      if(botMessage.text === "Please enter the OTP you received.") {
                                  isAwaitingOtp = true;
                                  textArea();
                                }
                      if(botMessage.text === "Please provide your corporate name:") {
                        isAwaitingCorporateName = true;
                        textArea();
                                }
                      if(botMessage.text === "Please provide your employee number:") {
                        isAwaitingEmployeeNumber = true;
                        textArea();
                                }
                      if(botMessage.text === "Please provide your policy number:") {
                        isAwaitingPolicyNumberp = true;textArea();
                                }
                      if(botMessage.text === "Please provide your 10 digit registered mobile number:") {
                        isAwaitingMobileNUmber = true;textArea();
                        
                                }
                      if(botMessage.text === "Please provide your 6 digit PIN Code:") {
                        isAwaitingPinCode = true;textArea();
                                }
                      if(botMessage.text === "Please enter the hospital name:") {
                        isAwaitingHospitalName = true;textArea();
                                }
                      if(botMessage.text === "Please provide your date of birth in the format (DD/MM/YYYY):") {
                                  isAwaitingDOB = true;textArea();
                                }
                      if(botMessage.text === "Please provide your policy number:") {
                                  isAwaitingPolicyNumber = true;textArea();
                                }

                      // Handle buttons or any other components in the response
                        // if (botMessage.buttons) {
                          // console.log(botMessage);
                          // console.log(botMessage['buttons']); // Handle buttons or any other components in the response

                        // Check the condition (assuming you want to check if 'Retail' is in any of the button titles)
                        if (botMessage.buttons && Array.isArray(botMessage.buttons)) {
                          // Now you can use the .some() method safely
                          const isRetail = botMessage.buttons.some(button => button.title === 'Retail');
                        
                        if (isRetail) {
                          // Create a div element for the button group
                          const buttonGroup = document.createElement('div');
                          buttonGroup.classList.add('bot-response', 'text', 'full-widthbox', 'ver-process');
                          buttonGroup.id = 'process';
                          botMessage.buttons.forEach(button => {
                            const buttonElement = document.createElement('button');
                            buttonElement.classList.add('btn');
                            buttonElement.textContent = button.title;
                            buttonElement.onclick = function () {
                              sendMessage(button.payload);
                            };
                            buttonGroup.appendChild(buttonElement);
                          });
                          

                          // Append the button group to the parent element
                          elementBotMSG.appendChild(buttonGroup);
                          elementBotCPT.scrollIntoView();
                          textArea();
                        } else {
                          const buttonContainer = document.createElement('select');
                          buttonContainer.classList.add('select');

                          // Create a div element
                          const divElement = document.createElement('div');
                          // Add class 'full-widthbox' to the div
                          divElement.classList.add('full-widthbox');

                          // Create the default "Select" option
                          const defaultOption = document.createElement('option');
                          defaultOption.textContent = 'Select';
                          defaultOption.value = '';
                          buttonContainer.appendChild(defaultOption);

                          botMessage.buttons.forEach(button => {
                            const optionElement = document.createElement('option');
                            optionElement.textContent = button.title;
                            optionElement.value = button.payload;
                            buttonContainer.appendChild(optionElement);
                          });

                          // Append buttonContainer to the div
                          divElement.appendChild(buttonContainer);

                          // Append the div to elementBotMSG
                          elementBotMSG.appendChild(divElement);

                          // Add the change event listener to the select element
                          buttonContainer.addEventListener('change', () => {
                            // userInput.value = buttonContainer.value;
                            sendMessage(buttonContainer.value);
                          });
                          // Focus on the select element
                        buttonContainer.focus();  
                          elementBotCPT.scrollIntoView();
                        }
                      }
                    if(index != responseData.length-1) {
                    elementBotMSG = document.createElement("div");
                    elementBotMSG.classList.add("massage");
                    elementBotMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
                    ContentChat.appendChild(elementBotMSG);
                    }
                    index ++;
                  });
                  // elementBotMSG.scrollIntoView();
              }, 2000);

              send1.classList.remove("none");
              send2.classList.add("none");
        }      

  } catch (error) {
      console.error('Error:', error);
  }
}

function displayUserMessage(message) {
  //alert("4");
  const chatOutput = document.getElementById('chatOutput');
  const elementCPT = createBotCaptionElement('You');
  const elementMSG = createMessageElement(message);
  chatOutput.appendChild(elementCPT);
  chatOutput.appendChild(elementMSG);
  elementMSG.scrollIntoView();
}

function displayBotMessage(message) {
  //alert("3");
  const chatOutput = document.getElementById('chatOutput');
  const elementCPT = createBotCaptionElement('Vidal Health');
  const elementMSG = createMessageElement(message, true);
  chatOutput.appendChild(elementCPT);
  chatOutput.appendChild(elementMSG);
  elementMSG.scrollIntoView();
}

function createBotCaptionElement(sender) {
  //alert("2");
  const elementCPT = document.createElement("div");
  elementCPT.classList.add("captionBot", "msgCaption");
  elementCPT.innerHTML = '<img src="assets/img/favicon.png" alt="Vidal"> <span style="font-weight:600">' + sender + '</span>';
  return elementCPT;
}

function createMessageElement(message, isBotMessage = false) {
  //alert("1");
  const elementMSG = document.createElement("div");
  elementMSG.classList.add("massage");
  const textFirst = isBotMessage ? 'true' : 'false';
  elementMSG.innerHTML = `<div class="bot-response text" text-first="${textFirst}">${message}</div>`;
  return elementMSG;
}

function createButtonElement(title, payload) {
  const option = document.createElement('option');
  option.textContent = title;
  option.value = payload;
  return option;
}



// ---------------- Massage Bot ----------------

// Function Send Massage bot(Vidal Health) in content chat
function SendMsgBot(msg) {
  msg = msg.toLowerCase();
  msg = msg.replace(/<\s*br[^>]?>/, "\n");
  msg = msg.replace(/(<([^>]+)>)/g, "");

  status_func_SendMsgBot = 1;

  let elementCPT = document.createElement("div");
  elementCPT.classList.add("captionBot", "msgCaption");
  elementCPT.innerHTML =
    '<img class="chat-img-msg" src="assets/img/favicon.png" alt="Vidal"> <span style="font-weight:600"></span>';
  ContentChat.appendChild(elementCPT);
  elementCPT.scrollIntoView();

  let listMSG = {
    hello: [
      "Hello!",
      "Hi 👋 ! It's good to see you!",
      "Great to see you here!",
    ],
    hwa: [
      "I'm fine!",
      "I am fine",
      "I feel good seeing you 😊",
      "I feel great 🤪",
    ],
    about: [
      "I'm happy you asked about that!",
      "My name is Vidal, I'm a simple and fun bot and I can answer your questions to some extent and do the things you want 😉",
    ],
  };

  let listScan = {
    hello: ["hi", "hello", "hey"],
    hwa: [
      "how are you",
      "hwa",
      "you are good",
      "you are fine",
      "are you well",
      "are you alright",
    ],
    about: [
      "information",
      "tell me about yourself",
      "introduce yourself",
      "who are you",
      "how about your self",
    ],
  };

  let elementMSG = document.createElement("div");
  elementMSG.classList.add("massage");
  elementMSG.innerHTML = `<div class="bot-response text full-widthbox" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
  ContentChat.appendChild(elementMSG);

  let result;
  setTimeout(() => {
    for (i of listScan["hello"]) {
      if (i == msg || i + "?" == msg || i + "!" == msg) {
        result = `<div class="bot-response text" text-first="true">${listMSG["hello"][Math.floor(Math.random() * 3)]
          }</div>`;
      }
    }
    if (result == "" || result == undefined) {
      for (i of listScan["hwa"]) {
        if (i == msg || i + "?" == msg || i + "!" == msg) {
          result = `<div class="bot-response text" text-first="true">${listMSG["hwa"][Math.floor(Math.random() * 3)]
            }</div>`;
        }
      }
    }
    if (result == "" || result == undefined) {
      for (i of listScan["about"]) {
        if (i == msg || i + "?" == msg || i + "!" == msg) {
          result = `<img src="assets/img/favicon.png" alt="about raybot"></img><div class="bot-response text" text-first="true">${listMSG["about"][0]}</div><div class="bot-response text" text-last="true">${listMSG["about"][1]}</div>`;
        }
      }
    }

    if (result == "" || result == undefined) {
      result = `<div class="bot-response text" text-first="true">😵 Oops! Sorry, I didn't understand your question</div>`;
    }

    elementMSG.innerHTML = result;
    elementMSG.scrollIntoView();
    send1.classList.remove("none");
    send2.classList.add("none");
    status_func_SendMsgBot = 0;
  }, 2000);
  ContentChat.appendChild(elementMSG);
  elementMSG.scrollIntoView();
}


function loadInitialDivElements(){
 
  const contentContainer = document.getElementById("contentContainer");

  let elementCPT = document.createElement("div");
  elementCPT.classList.add("captionBot", "msgCaption");
  // elementCPT.innerHTML =
  //   '<img src="assets/img/favicon.png" class="main-chat-img" alt="vidal">';
  ContentChat.appendChild(elementCPT);
  elementCPT.scrollIntoView();

  setTimeout(() => {
    textArea();
    elementMSG.innerHTML = `
   
  
 
    
        <div class="bot-response text select-box main-list " text-last="true" id="network-list"  onclick="networkList()" >Network List</div>
        <div class="bot-response text select-box main-list" text-last="true" id="e-card" onclick="ecard();">E-Card</div>
        <div class="bot-response text select-box main-list" text-last="true" id="claimstatus" onclick="claimstatus()">Claim Status</div> 
        <div class="bot-response text select-box main-list" text-last="true" id="cashless" onclick="cashless()">Cashless Status</div>
        <div class="bot-response text select-box main-list" text-last="true" id="claimintimation" onclick=" claimintimation()">Claim Intimation</div>
         <div class="bot-response text select-box main-list" text-last="true" id="branches"  onclick="branches()">Branches</div>
           <div class="bot-response text select-box main-list" text-last="true"  id="claimprocess"  onclick="claimprocess()">Claim Process</div>
            <div class="bot-response text select-box main-list" text-last="true" id="download" onclick="download()">Downloads</div>


            `;
    elementMSG.scrollIntoView();
    send1.classList.remove("none");
    send2.classList.add("none");


    status_func_SendMsgBot = 0;
  }, 5000)


  let elementMSG = document.createElement("div");
  // main message box 
  elementMSG.classList.add("massage", "main-msg");
  elementMSG.innerHTML = `<div class="bot-response text new" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
  ContentChat.appendChild(elementMSG);

  status_func_SendMsgBot = 1;
  send1.classList.add("none");
  send2.classList.remove("none");
  elementMSG.scrollIntoView();
}

loadInitialDivElements();

// network List flow start
function networkList() {
  // clarity("set", "Network_List_click", "true");
  document.getElementById("network-list").classList.add("active");

  document.getElementById("e-card").classList.remove("active");
  document.getElementById("claimstatus").classList.remove("active");
  document.getElementById("cashless").classList.remove("active");
  document.getElementById("claimintimation").classList.remove("active");
  document.getElementById("branches").classList.remove("active");
  document.getElementById("claimprocess").classList.remove("active");
  document.getElementById("download").classList.remove("active");

  sendMessage("You have selected a  Network List");
  // {
  //   let elementCPT = document.createElement("div");
  //   elementCPT.classList.add("captionBot", "msgCaption");
  //   elementCPT.innerHTML =
  //     '<img src="assets/img/favicon.png" alt="vidal"> ';
  //   ContentChat.appendChild(elementCPT);
  //   elementCPT.scrollIntoView();

  //   setTimeout(() => {
  //     elementMSG.innerHTML = `<div class="bot-response text full-widthbox" text-first="true">
  //     <p class="" style="color:#4A906B"><b>You have selected a  Network List</b></p>
  //     <label style="margin-bottom:10px"> Select Insurer from the list</label>
  //     <select class="select" onchange="insureselect()">
  //        <option selected disabled>Select</option>
  //         <option>
  //           Test
  //           </option>
  //         </select>
  //         </div>
        
  //       `;
  //     elementMSG.scrollIntoView();
  //     send1.classList.remove("none");
  //     send2.classList.add("none");
  //     status_func_SendMsgBot = 0;
  //   }, 2000)


  //   let elementMSG = document.createElement("div");
  //   elementMSG.classList.add("massage");
  //   elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
  //   ContentChat.appendChild(elementMSG);

  //   status_func_SendMsgBot = 1;
  //   send1.classList.add("none");
  //   send2.classList.remove("none");
  //   elementMSG.scrollIntoView();
  // }


}
// insurer select

function insureselect() {
  {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal"> ';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox" text-first="true">
      <label style="margin-bottom:10px"> Select state from the list</label>
          <select class="select" onchange="selecstate()">
          <option disabled selected>
            Select
            </option>
          <option>
           Maharashtra
            </option>
            <option>
    Gujarat
            </option>
            <option>
        Kolkata
            </option>
          </select>
          </div>
        
        `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text full-widthbox" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  }

}

function selecstate() {
  {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal"> ';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox" text-first="true">
      <label style="margin-bottom:10px"> Select City from the list</label>
          <select class="select" onchange="selectcity()">
          <option disabled selected>
            Select
            </option>
          <option>
           Mumbai 
            </option>
            <option>
         Pune
            </option>
            <option>
        Kolkata
            </option>
          </select>
          </div>
        
        `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text full-widthbox" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  }

}


// select city

function selectcity() {
  {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal"> ';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox" text-first="true">

      <label style="margin-bottom:10px"> Enter Pin Code</label>
   

<div style="text-align:right" class="d-flex justify-content-between">


<div class="userInput">
<input type="text" id='ist' maxlength="1" onkeyup="clickEvent(this,'sec')" pattern="[0-9]*">
<input type="text" id="sec" maxlength="1" onkeyup="clickEvent(this,'third')" pattern="[0-9]*">
<input type="text" id="third" maxlength="1" onkeyup="clickEvent(this,'fourth')" pattern="[0-9]*">
<input type="text" id="fourth" maxlength="1" onkeyup="clickEvent(this,'fifth')" pattern="[0-9]*">
<input type="text" id="fifth" maxlength="1" onkeyup="clickEvent(this,'six')" pattern="[0-9]*">
<input type="text" id="six" maxlength="1" id="pincode"  onkeydown="pinenter(this)" pattern="[0-9]*">
</div>


<button type="submit" onclick="pin(this)" class="send-btn" > <i class="fa fa-send"></i></button>
</div>
    
    

          </div>
        
        `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  }

}


function clickEvent(first, last) {
  if (first.value.length) {
    document.getElementById(last).focus();
  }
}


// select pin

let txtVal = document.getElementById("pincode").value.length;


function pin(ele) {


  selectpin();


}

function pinenter(ele) {
  if (event.key == 'Enter') {

    selectpin();
  }
}

function selectpin() {

  {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox" text-first="true">
      <label style="margin-bottom:10px"> Select Hospital from the list</label>
            <select class="select" onchange="selecthospital()">
          <option disabled selected>
            Select
            </option>
          <option>
         Vidal Hospital 1
            </option>
            <option>
              Vidal Hospital 2
            </option>
            <option>
              Vidal Hospital 3
            </option>
          </select>
          </div>
        
        `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  }


}


//  select hospital

function selecthospital() {
  {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal"> ';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text" text-first="true">

  <p>Hospital Name: Vidal health 1</p>
  <p>Address: Ghansoli, Mumbai , 400089</p>
  <p>Time: 9:00 AM to 11:00 PM</p>
  <p>Contact Number: <a href="tel:9887687654">9887687654</a></p>
      

    
    

          </div>
        
        `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  }

}

// Network List Flow End

/////////////////////////////////////////////////////////////////////////////////

// branches flow start
function branches() {
  // sendMessage("You have selected a Branches");
  const url = 'https://www.vidalhealthtpa.com/vidalhealthtpa/contact.html'; // Replace with the actual URL of the page
  window.open(url, '_blank');
  // {
  //   let elementCPT = document.createElement("div");
  //   elementCPT.classList.add("captionBot", "msgCaption");
  //   elementCPT.innerHTML =
  //     '<img src="assets/img/favicon.png" alt="vidal"> ';
  //   ContentChat.appendChild(elementCPT);
  //   elementCPT.scrollIntoView();

  //   setTimeout(() => {
  //     elementMSG.innerHTML = `<div class="bot-response text full-widthbox" text-first="true">
      
  //     <label style="margin-bottom:10px"> Select Branch from the list</label>
  //     <select class="select" onchange="branchselect()">
  //         <option disabled selected>
  //           Select 
  //           </option>
  //         <option>
  //        Branch 1
  //           </option>
  //           <option>
  //        Branch 2
  //           </option>
  //           <option>
  //        Branch 3
  //           </option>
  //         </select>
  //         </div>
        
  //       `;
  //     elementMSG.scrollIntoView();
  //     send1.classList.remove("none");
  //     send2.classList.add("none");
  //     status_func_SendMsgBot = 0;
  //   }, 2000)


  //   let elementMSG = document.createElement("div");
  //   elementMSG.classList.add("massage");
  //   elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
  //   ContentChat.appendChild(elementMSG);

  //   status_func_SendMsgBot = 1;
  //   send1.classList.add("none");
  //   send2.classList.remove("none");
  //   elementMSG.scrollIntoView();
  // }


}

// branch select and branch details
function branchselect() {
  {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal"> ';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text" text-first="true">

  <p>Branch Name: Branch 1</p>
  <p>Branch Address: Ghansoli, Mumbai , 400089</p>
  <p>Contact Number: <a href="tel:9887687654">9887687654</a></p>
      

    
    

          </div>
        
        `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  }

}

// branches flow end

// verification Process


function ecard() {
  document.getElementById("e-card").classList.add("active");
  document.getElementById("network-list").classList.remove("active");
  document.getElementById("claimstatus").classList.remove("active");
  document.getElementById("cashless").classList.remove("active");
  document.getElementById("claimintimation").classList.remove("active");
  document.getElementById("branches").classList.remove("active");
  document.getElementById("claimprocess").classList.remove("active");
  document.getElementById("download").classList.remove("active");

  sendMessage("E-Card");

}

function selectgroupretail(tag) {
  ////alert(tag);
  if (tag == 1) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process" id="process" text-first="true">

   <p class="p-text" id="ecard-text" style="color:#4A906B;margin-bottom:10px"><b>You have selected a E-Card</b></p>       
<button class="btn " id="retail-btn" onclick="selectretail(1)">Retail</button>
<button class="btn"  id="group-btn" onclick="selectgroup(1)">Group</button>


    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
    // ////alert("tag 1");
  } else if (tag == 2) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process" id="process" text-first="true">

   <p class="p-text claim-text" style="color:#4A906B;margin-bottom:10px"><b>You have selected a Claim Status</b></p>      
<button class="btn " id="retail-btn" onclick="selectretail(2)">Retail</button>
<button class="btn"  id="group-btn" onclick="selectgroup(2)">Group</button>


    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
    // ////alert("tag 2");
  } else if (tag == 3) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process" id="process" text-first="true">

   <p class="p-text claim-text" style="color:#4A906B;margin-bottom:10px"><b>You have selected a Cashless Status</b></p>      
<button class="btn " id="retail-btn" onclick="selectretail(3)">Retail</button>
<button class="btn"  id="group-btn" onclick="selectgroup(3)">Group</button>


    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
    // ////alert("tag 2");
  } else if (tag == 4) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process" id="process" text-first="true">

   <p class="p-text claim-text" style="color:#4A906B;margin-bottom:10px"><b>You have selected a Claim Intimation</b></p>      
<button class="btn " id="retail-btn" onclick="selectretail(4)">Retail</button>
<button class="btn"  id="group-btn" onclick="selectgroup(4)">Group</button>


    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
    // ////alert("tag 2");
  } else if (tag == 5) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process" id="process" text-first="true">

   <p class="p-text claim-text" style="color:#4A906B;margin-bottom:10px"><b>You have selected a Claim Process</b></p>      
<button class="btn " id="retail-btn" onclick="selectretail(5)">Retail</button>
<button class="btn"  id="group-btn" onclick="selectgroup(5)">Group</button>


    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
    // ////alert("tag 2");
  }
}


// retail process start
function selectretail(tag) {
  ////alert(tag);
  document.getElementById("retail-btn").classList.add("btn-active");
  if (tag == 1) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process processB"  text-first="true">
<p class="mb-2"><input type="radio" id="verify-mobile" value="verify-mobile" class="radio-input" name="verify-p" onclick="selectmobilevr(1)"> <label for="verify-mobile">Registered Mobile No</label>
</p>

<p><input type="radio" id="verify-policy" value="verify-policy" class="radio-input" name="verify-p"  onclick="selectpolicyevr(1)"> <label for="verify-policy">Verify by Policy Details</label>
</p>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  } else if (tag == 2) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process processB"  text-first="true">
<p class="mb-2"><input type="radio" id="verify-mobile2" value="verify-mobile" class="radio-input" name="verify-p" onclick="selectmobilevr(2)"> <label for="verify-mobile2">Registered Mobile No</label>
</p>

<p><input type="radio" id="verify-policy2" value="verify-policy" class="radio-input" name="verify-p"  onclick="selectpolicyevr(2)"> <label for="verify-policy2">Verify by Policy Details</label>
</p>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  } else if (tag == 3) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process processB"  text-first="true">
<p class="mb-2"><input type="radio" id="verify-mobile3" value="verify-mobile" class="radio-input" name="verify-p" onclick="selectmobilevr(3)"> <label for="verify-mobile3">Registered Mobile No</label>
</p>

<p><input type="radio" id="verify-policy3" value="verify-policy" class="radio-input" name="verify-p"  onclick="selectpolicyevr(3)"> <label for="verify-policy3">Verify by Policy Details</label>
</p>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  } else if (tag == 4) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process processB"  text-first="true">
<p class="mb-2"><input type="radio" id="verify-mobile4" value="verify-mobile" class="radio-input" name="verify-p" onclick="selectmobilevr(4)"> <label for="verify-mobile4">Registered Mobile No</label>
</p>

<p><input type="radio" id="verify-policy4" value="verify-policy" class="radio-input" name="verify-p"  onclick="selectpolicyevr(4)"> <label for="verify-policy4">Verify by Policy Details</label>
</p>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  } else if (tag == 5) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process processB"  text-first="true">
<p class="mb-2"><input type="radio" id="verify-mobile5" value="verify-mobile" class="radio-input" name="verify-p" onclick="selectmobilevr(5)"> <label for="verify-mobile5">Registered Mobile No</label>
</p>

<p><input type="radio" id="verify-policy5" value="verify-policy" class="radio-input" name="verify-p"  onclick="selectpolicyevr(5)"> <label for="verify-policy5">Verify by Policy Details</label>
</p>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  } else {
    ////alert("selectretail error");
  }
}


// ////////////////////////

function selectmobilevr(tag) {
  // //alert(tag + "mobile");
  //document.getElementById("retail-btn").classList.add("btn-active"); 
  if (tag == 1) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process"  text-first="true">

      <label style="margin-bottom:10px;margin-left:0px"> Enter Mobile Number</label>

<div style="text-align:right" class="d-flex justify-content-between">
<input type="text" maxlength="11" minlength="10" onkeydown="mobenter(this, 1)" >
<button type="submit" onclick="mob(this, 1)" class="send-btn"> <i class="fa fa-send"></i></button>
</div>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  } else if (tag == 2) {

    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process"  text-first="true">

      <label style="margin-bottom:10px;margin-left:0px"> Enter Mobile Number</label>

<div style="text-align:right" class="d-flex justify-content-between">
<input type="text" onkeydown="mobenter(this, 2)"  maxlength="11" minlength="10" >
<button type="submit" onclick="mob(this, 2)" class="send-btn"> <i class="fa fa-send"></i></button>
</div>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  } else if (tag == 3) {

    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process"  text-first="true">

      <label style="margin-bottom:10px;margin-left:0px"> Enter Mobile Number</label>

<div style="text-align:right" class="d-flex justify-content-between">
<input type="text" onkeydown="mobenter(this, 3)"  maxlength="11" minlength="10">
<button type="submit" onclick="mob(this, 3)" class="send-btn"> <i class="fa fa-send"></i></button>
</div>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  } else if (tag == 4) {

    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process"  text-first="true">

      <label style="margin-bottom:10px;margin-left:0px"> Enter Mobile Number</label>

<div style="text-align:right" class="d-flex justify-content-between">
<input type="text" onkeydown="mobenter(this, 4)"  maxlength="11" minlength="10">
<button type="submit" onclick="mob(this, 4)" class="send-btn"> <i class="fa fa-send"></i></button>
</div>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  } else if (tag == 5) {

    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process"  text-first="true">

      <label style="margin-bottom:10px;margin-left:0px"> Enter Mobile Number</label>

<div style="text-align:right" class="d-flex justify-content-between">
<input type="text" onkeydown="mobenter(this, 5)"  maxlength="11" minlength="10">
<button type="submit" onclick="mob(this, 5)" class="send-btn"> <i class="fa fa-send"></i></button>
</div>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  } else {
    ////alert("selectmobilevr error");

  }
}

function mobenter(ele, tag) {
  // ////alert(tag);
  if (event.key == 'Enter') {
    if (tag == 1) {
      selectotp(1);
    } else if (tag == 2) {
      selectotp(2);
    } else if (tag == 3) {
      selectotp(3);
    } else if (tag == 4) {
      selectotp(4);
    } else if (tag == 5) {
      selectotp(5);
    }
  } else {
    ////alert("mobenter")

  }
}


function mob(ele, tag) {
  // ////alert(tag);
  if (tag == 1) {
    selectotp(1);
  } else if (tag == 2) {
    selectotp(2);

  } else if (tag == 3) {
    selectotp(3);

  } else if (tag == 4) {
    selectotp(4);

  } else if (tag == 5) {
    selectotp(5);

  } else {
    ////alert(tag + "error mob");
  }


}

function selectotp(tag) {
  //document.getElementById("retail-btn").classList.add("btn-active"); 
  if (tag == 1) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process"  text-first="true">

      <label style="margin-bottom:10px;margin-left:0px"> Enter OTP</label>

<div style="text-align:right" class="d-flex justify-content-between">


<div class="userInput">
<input type="text" id='ist1' maxlength="1"   onkeyup="clickEvent(this,'sec')" pattern="[0-9]*">
<input type="text" id="sec1" maxlength="1"  onkeyup="clickEvent(this,'third')" pattern="[0-9]*">
<input type="text" id="third1" maxlength="1"  onkeyup="clickEvent(this,'fourth')" pattern="[0-9]*">
<input type="text" id="fourth1" maxlength="1"  onkeyup="clickEvent(this,'fifth')" pattern="[0-9]*">
<input type="text" id="fifth1" maxlength="1"  onkeyup="clickEvent(this,'six')" pattern="[0-9]*">
<input type="text"  maxlength="1" id="OTP"    onkeydown="mobotpenter(this, 1)" pattern="[0-9]*">
</div>

<button type="submit" onclick="otp(this,1)" class="send-btn"> <i class="fa fa-send"></i></button>
</div>

 </div>`;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)

    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
    // ////alert("tag 1 selectotp");
  } else if (tag == 2) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process"  text-first="true">

      <label style="margin-bottom:10px;margin-left:0px"> Enter OTP</label>

<div style="text-align:right" class="d-flex justify-content-between">
<div class="userInput">
<input type="text" id='ist1' maxlength="1"   onkeyup="clickEvent(this,'sec')" pattern="[0-9]*">
<input type="text" id="sec1" maxlength="1"  onkeyup="clickEvent(this,'third')" pattern="[0-9]*">
<input type="text" id="third1" maxlength="1"  onkeyup="clickEvent(this,'fourth')" pattern="[0-9]*">
<input type="text" id="fourth1" maxlength="1"  onkeyup="clickEvent(this,'fifth')" pattern="[0-9]*">
<input type="text" id="fifth1" maxlength="1"  onkeyup="clickEvent(this,'six')" pattern="[0-9]*">
<input type="text"  maxlength="1" id="OTP"    onkeydown="mobotpenter(this, 2)" pattern="[0-9]*">
</div>
<button type="submit" onclick="otp(this, 2)" class="send-btn"> <i class="fa fa-send"></i></button>
</div>

 </div>`;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)

    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();

  } else if (tag == 3) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process"  text-first="true">

      <label style="margin-bottom:10px;margin-left:0px"> Enter OTP</label>

<div style="text-align:right" class="d-flex justify-content-between">
<div class="userInput">
<input type="text" id='ist1' maxlength="1"   onkeyup="clickEvent(this,'sec')" pattern="[0-9]*">
<input type="text" id="sec1" maxlength="1"  onkeyup="clickEvent(this,'third')" pattern="[0-9]*">
<input type="text" id="third1" maxlength="1"  onkeyup="clickEvent(this,'fourth')" pattern="[0-9]*">
<input type="text" id="fourth1" maxlength="1"  onkeyup="clickEvent(this,'fifth')" pattern="[0-9]*">
<input type="text" id="fifth1" maxlength="1"  onkeyup="clickEvent(this,'six')" pattern="[0-9]*">
<input type="text"  maxlength="1" id="OTP"    onkeydown="mobotpenter(this, 3)" pattern="[0-9]*">
</div>
<button type="submit" onclick="otp(this, 3)" class="send-btn"> <i class="fa fa-send"></i></button>
</div>

 </div>`;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)

    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();

  } else if (tag == 4) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process"  text-first="true">

      <label style="margin-bottom:10px;margin-left:0px"> Enter OTP</label>

<div style="text-align:right" class="d-flex justify-content-between">
<div class="userInput">
<input type="text" id='ist1' maxlength="1"   onkeyup="clickEvent(this,'sec')" pattern="[0-9]*">
<input type="text" id="sec1" maxlength="1"  onkeyup="clickEvent(this,'third')" pattern="[0-9]*">
<input type="text" id="third1" maxlength="1"  onkeyup="clickEvent(this,'fourth')" pattern="[0-9]*">
<input type="text" id="fourth1" maxlength="1"  onkeyup="clickEvent(this,'fifth')" pattern="[0-9]*">
<input type="text" id="fifth1" maxlength="1"  onkeyup="clickEvent(this,'six')" pattern="[0-9]*">
<input type="text"  maxlength="1" id="OTP"    onkeydown="mobotpenter(this, 4)" pattern="[0-9]*">
</div>
<button type="submit" onclick="otp(this, 4)" class="send-btn"> <i class="fa fa-send"></i></button>
</div>

 </div>`;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)

    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();

  } else if (tag == 5) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process"  text-first="true">

      <label style="margin-bottom:10px;margin-left:0px"> Enter OTP</label>

<div style="text-align:right" class="d-flex justify-content-between">
<div class="userInput">
<input type="text" id='ist1' maxlength="1"   onkeyup="clickEvent(this,'sec')" pattern="[0-9]*">
<input type="text" id="sec1" maxlength="1"  onkeyup="clickEvent(this,'third')" pattern="[0-9]*">
<input type="text" id="third1" maxlength="1"  onkeyup="clickEvent(this,'fourth')" pattern="[0-9]*">
<input type="text" id="fourth1" maxlength="1"  onkeyup="clickEvent(this,'fifth')" pattern="[0-9]*">
<input type="text" id="fifth1" maxlength="1"  onkeyup="clickEvent(this,'six')" pattern="[0-9]*">
<input type="text"  maxlength="1" id="OTP"    onkeydown="mobotpenter(this, 5)" pattern="[0-9]*">
</div>
<button type="submit" onclick="otp(this, 5)" class="send-btn"> <i class="fa fa-send"></i></button>
</div>

 </div>`;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)

    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();

  }
  // else (////alert("select selectotp ta 2"))
}


function mobotpenter(ele, tag) {
  // ////alert(tag + "mobotpenter");
  const val = document.querySelector('#OTP').value;
  if (event.key == 'Enter') {
    if (tag == 1) {
      verifyotp(1);
    } else if (tag == 2) {
      verifyotp(2);
    } else if (tag == 3) {
      verifyotp(3);
    } else if (tag == 4) {
      verifyotp(4);
    } else if (tag == 5) {
      verifyotp(5);
    } else {
      ////alert("verify if");
    }
    //verifyotp();
    // processB()
  } else if (event.key == 'Enter' && val != '123456') {
    verifyotpnone();
  } else {
    // ////alert("error1");
  }

}


function otp(ele, tag) {
  // ////alert(tag);
  const val = document.querySelector('#OTP').value;
  if (val != '') {
    if (tag == 1) {
      verifyotp(1);
    } else if (tag == 2) {
      verifyotp(2);
    } else if (tag == 3) {
      verifyotp(3);
    } else if (tag == 4) {
      verifyotp(4);
    } else if (tag == 5) {
      verifyotp(5);
    }

  } else {
    verifyotpnone();
  }

}


function verifyotp(tag) {
  // document.getElementById("retail-btn").classList.add("btn-active"); 
  if (tag == 1) {
    {
      let elementCPT = document.createElement("div");
      elementCPT.classList.add("captionBot", "msgCaption");
      elementCPT.innerHTML =
        '<img src="assets/img/favicon.png" alt="vidal">';
      ContentChat.appendChild(elementCPT);
      elementCPT.scrollIntoView();

      setTimeout(() => {
        elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process"  text-first="true">
<p class="text-sucess" >Verified Successfully!</p>

    </div>
  
  `;
        elementMSG.scrollIntoView();
        send1.classList.remove("none");
        send2.classList.add("none");
        status_func_SendMsgBot = 0;
      }, 2000)


      let elementMSG = document.createElement("div");
      elementMSG.classList.add("massage");
      elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
      ContentChat.appendChild(elementMSG);

      status_func_SendMsgBot = 1;
      send1.classList.add("none");
      send2.classList.remove("none");
      elementMSG.scrollIntoView();
    }
    processB(1);
  } else if (tag == 2) {
    {
      let elementCPT = document.createElement("div");
      elementCPT.classList.add("captionBot", "msgCaption");
      elementCPT.innerHTML =
        '<img src="assets/img/favicon.png" alt="vidal">';
      ContentChat.appendChild(elementCPT);
      elementCPT.scrollIntoView();

      setTimeout(() => {
        elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process"  text-first="true">
<p class="text-sucess" >Verified Successfully!</p>

    </div>
  
  `;
        elementMSG.scrollIntoView();
        send1.classList.remove("none");
        send2.classList.add("none");
        status_func_SendMsgBot = 0;
      }, 2000)


      let elementMSG = document.createElement("div");
      elementMSG.classList.add("massage");
      elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
      ContentChat.appendChild(elementMSG);

      status_func_SendMsgBot = 1;
      send1.classList.add("none");
      send2.classList.remove("none");
      elementMSG.scrollIntoView();
    }
    processC(2);
    // ////alert("tag 2");
  } else if (tag == 3) {
    {
      let elementCPT = document.createElement("div");
      elementCPT.classList.add("captionBot", "msgCaption");
      elementCPT.innerHTML =
        '<img src="assets/img/favicon.png" alt="vidal">';
      ContentChat.appendChild(elementCPT);
      elementCPT.scrollIntoView();

      setTimeout(() => {
        elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process"  text-first="true">
<p class="text-sucess" >Verified Successfully!</p>

    </div>
  
  `;
        elementMSG.scrollIntoView();
        send1.classList.remove("none");
        send2.classList.add("none");
        status_func_SendMsgBot = 0;
      }, 2000)


      let elementMSG = document.createElement("div");
      elementMSG.classList.add("massage");
      elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
      ContentChat.appendChild(elementMSG);

      status_func_SendMsgBot = 1;
      send1.classList.add("none");
      send2.classList.remove("none");
      elementMSG.scrollIntoView();
    }
    processD(3);
    // ////alert("tag 2");
  } else if (tag == 4) {
    {
      let elementCPT = document.createElement("div");
      elementCPT.classList.add("captionBot", "msgCaption");
      elementCPT.innerHTML =
        '<img src="assets/img/favicon.png" alt="vidal">';
      ContentChat.appendChild(elementCPT);
      elementCPT.scrollIntoView();

      setTimeout(() => {
        elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process"  text-first="true">
<p class="text-sucess" >Verified Successfully!</p>

    </div>
  
  `;
        elementMSG.scrollIntoView();
        send1.classList.remove("none");
        send2.classList.add("none");
        status_func_SendMsgBot = 0;
      }, 2000)


      let elementMSG = document.createElement("div");
      elementMSG.classList.add("massage");
      elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
      ContentChat.appendChild(elementMSG);

      status_func_SendMsgBot = 1;
      send1.classList.add("none");
      send2.classList.remove("none");
      elementMSG.scrollIntoView();
    }
    processE(4);
    // ////alert("tag 2");
  } else if (tag == 5) {
    {
      let elementCPT = document.createElement("div");
      elementCPT.classList.add("captionBot", "msgCaption");
      elementCPT.innerHTML =
        '<img src="assets/img/favicon.png" alt="vidal">';
      ContentChat.appendChild(elementCPT);
      elementCPT.scrollIntoView();

      setTimeout(() => {
        elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process"  text-first="true">
<p class="text-sucess" >Verified Successfully!</p>

    </div>
  
  `;
        elementMSG.scrollIntoView();
        send1.classList.remove("none");
        send2.classList.add("none");
        status_func_SendMsgBot = 0;
      }, 2000)


      let elementMSG = document.createElement("div");
      elementMSG.classList.add("massage");
      elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
      ContentChat.appendChild(elementMSG);

      status_func_SendMsgBot = 1;
      send1.classList.add("none");
      send2.classList.remove("none");
      elementMSG.scrollIntoView();
    }
    processG(5);
    // ////alert("tag 2");
  }

}


function verifyotpnone() {
  //document.getElementById("retail-btn").classList.add("btn-active");
  {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process " text-first="true">
<p class="text-danger" >We are sorry your details could not be verified!</p>
    </div>

  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  }

}


// end

//verify by policy details
function selectpolicyevr(tag) {
  //document.getElementById("retail-btn").classList.add("btn-active"); 
  if (tag == 1) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process"  text-first="true">
            <form name="policyform" onsubmit="return validateForm(1)">
            <label style="margin-bottom:10px;margin-left:0px"> Enter Policy No</label>
<input type="text"  name="policyno" value="abc123" style="margin:5px 0;"/>
<label style="margin-bottom:10px;margin-left:0px"> Enter DOB</label>
<input type="date" name="dob" style="margin:5px 0;"/>
<label style="margin-bottom:10px;margin-left:0px"> Enter Name</label>
<input type="text"  name="name" value="vidal" style="margin:5px 0;"/>

<div style="text-align:right">

<button type="submit" class="send-btn"> <i class="fa fa-send"></i></button>
</div>

</form>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  } else if (tag == 2) {
    ////alert(tag);
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process"  text-first="true">
            <form name="policyform" onsubmit="return validateForm(2)">
            <label style="margin-bottom:10px;margin-left:0px"> Enter Policy No</label>
<input type="text"  name="policyno" value="abc123" style="margin:5px 0;"/>
<label style="margin-bottom:10px;margin-left:0px"> Enter DOB</label>
<input type="date" name="dob" style="margin:5px 0;"/>
<label style="margin-bottom:10px;margin-left:0px"> Enter Name</label>
<input type="text"  name="name" value="vidal" style="margin:5px 0;"/>

<div style="text-align:right">

<button type="submit" class="send-btn"> <i class="fa fa-send"></i></button>
</div>

</form>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  } else if (tag == 3) {
    ////alert(tag);
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process"  text-first="true">
            <form name="policyform" onsubmit="return validateForm(3)">
            <label style="margin-bottom:10px;margin-left:0px"> Enter Policy No</label>
<input type="text"  name="policyno" value="abc123" style="margin:5px 0;"/>
<label style="margin-bottom:10px;margin-left:0px"> Enter DOB</label>
<input type="date" name="dob" style="margin:5px 0;"/>
<label style="margin-bottom:10px;margin-left:0px"> Enter Name</label>
<input type="text"  name="name" value="vidal" style="margin:5px 0;"/>

<div style="text-align:right">

<button type="submit" class="send-btn"> <i class="fa fa-send"></i></button>
</div>

</form>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  } else if (tag == 4) {
    ////alert(tag);
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process"  text-first="true">
            <form name="policyform" onsubmit="return validateForm(4)">
            <label style="margin-bottom:10px;margin-left:0px"> Enter Policy No</label>
<input type="text"  name="policyno" value="abc123" style="margin:5px 0;"/>
<label style="margin-bottom:10px;margin-left:0px"> Enter DOB</label>
<input type="date" name="dob" style="margin:5px 0;"/>
<label style="margin-bottom:10px;margin-left:0px"> Enter Name</label>
<input type="text"  name="name" value="vidal" style="margin:5px 0;"/>

<div style="text-align:right">

<button type="submit" class="send-btn"> <i class="fa fa-send"></i></button>
</div>

</form>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  } else if (tag == 5) {
    ////alert(tag);
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process"  text-first="true">
            <form name="policyform" onsubmit="return validateForm(5)">
            <label style="margin-bottom:10px;margin-left:0px"> Enter Policy No</label>
<input type="text"  name="policyno" value="abc123" style="margin:5px 0;"/>
<label style="margin-bottom:10px;margin-left:0px"> Enter DOB</label>
<input type="date" name="dob" style="margin:5px 0;"/>
<label style="margin-bottom:10px;margin-left:0px"> Enter Name</label>
<input type="text"  name="name" value="vidal" style="margin:5px 0;"/>

<div style="text-align:right">

<button type="submit" class="send-btn"> <i class="fa fa-send"></i></button>
</div>

</form>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  }
}

function validateForm(tag) {
  ////alert(tag + "validateform")
  let x = document.forms["policyform"]["policyno"].value;
  let y = document.forms["policyform"]["dob"].value;
  let z = document.forms["policyform"]["name"].value;

  if ((x == "abc123") && (z == "vidal")) {

    // if( (x == "abc123" ) &&  (y == "") && (z == "")) {   // Used for validation //
    if (tag == 1) {
      verifyotp(1);
      return false;

    } else if (tag == 2) {
      verifyotp(2);
      return false;

    } else if (tag == 3) {
      verifyotp(3);
      return false;

    } else if (tag == 4) {
      verifyotp(4);
      return false;

    } else if (tag == 5) {
      verifyotp(5);
      return false;

    }

  }
  verifyotpnone()
  return false;

}
//end

// group Process Start
function selectgroup(tag) {

  document.getElementById("group-btn").classList.add("btn-active");
  if (tag == 1) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process"  text-first="true">
<p class="mb-2"><input type="radio" id="verify-mobile" value="verify-mobile" class="radio-input" name="verify-p" onclick="selectmobilevr(1)"> <label for="verify-mobile">Registered Mobile No</label>
</p>

<p><input type="radio" id="verify-employee" value="verify-employee" class="radio-input" name="verify-p"  onclick="selectemployee(1)"> <label for="verify-employee">Verify by Employee Details</label>
</p>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  } else if (tag == 2) {

    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process"  text-first="true">
<p class="mb-2"><input type="radio" id="verify-mobile2" value="verify-mobile" class="radio-input" name="verify-p" onclick="selectmobilevr(2)"> <label for="verify-mobile2">Registered Mobile No</label>
</p>

<p><input type="radio" id="verify-employee2" value="verify-employee" class="radio-input" name="verify-p"  onclick="selectemployee(2)"> <label for="verify-employee2">Verify by Employee Details</label>
</p>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  } else if (tag == 3) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process"  text-first="true">
<p class="mb-2"><input type="radio" id="verify-mobile3" value="verify-mobile" class="radio-input" name="verify-p" onclick="selectmobilevr(3)"> <label for="verify-mobile3">Registered Mobile No</label>
</p>

<p><input type="radio" id="verify-employee3" value="verify-employee" class="radio-input" name="verify-p"  onclick="selectemployee(3)"> <label for="verify-employee3">Verify by Employee Details</label>
</p>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  } else if (tag == 4) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process"  text-first="true">
<p class="mb-2"><input type="radio" id="verify-mobile4" value="verify-mobile" class="radio-input" name="verify-p" onclick="selectmobilevr(4)"> <label for="verify-mobile4">Registered Mobile No</label>
</p>

<p><input type="radio" id="verify-employee4" value="verify-employee" class="radio-input" name="verify-p"  onclick="selectemployee(4)"> <label for="verify-employee4">Verify by Employee Details</label>
</p>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  } else if (tag == 5) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process"  text-first="true">
<p class="mb-2"><input type="radio" id="verify-mobile5" value="verify-mobile" class="radio-input" name="verify-p" onclick="selectmobilevr(5)"> <label for="verify-mobile5">Registered Mobile No</label>
</p>

<p><input type="radio" id="verify-employee5" value="verify-employee" class="radio-input" name="verify-p"  onclick="selectemployee(5)"> <label for="verify-employee5">Verify by Employee Details</label>
</p>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  }
}
// end

// Employee details 
function selectemployee(tag) {
  // document.getElementById("group-btn").classList.add("btn-active"); 
  if (tag == 1) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process" text-first="true" style="margin:5px 0;">
     <p><input type="radio"  class="radio-input" id="empform1" name="empform1" value="empform1"  onclick="empform1(1)"/> <label for="empform1">Enter Employee No, Date of Birth</label>
     </p>
     <p><input type="radio" class="radio-input" id="empform2"  name="empform1" value="empform2"  onclick="empform2(1)"/> <label for="empform2">Enter Employee No, Joining Date and Age</label>
     </p>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  } else if (tag == 2) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process" text-first="true" style="margin:5px 0;">
     <p><input type="radio"  class="radio-input" id="empform3" name="empform1" value="empform1"  onclick="empform1(2)"/> <label for="empform3">Enter Employee No, Date of Birth</label>
     </p>
     <p><input type="radio" class="radio-input" id="empform4"  name="empform1" value="empform2"  onclick="empform2(2)"/> <label for="empform4">Enter Employee No, Joining Date and Age</label>
     </p>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  } else if (tag == 3) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process" text-first="true" style="margin:5px 0;">
     <p><input type="radio"  class="radio-input" id="empform5" name="empform1" value="empform1"  onclick="empform1(3)"/> <label for="empform5">Enter Employee No, Date of Birth</label>
     </p>
     <p><input type="radio" class="radio-input" id="empform6"  name="empform1" value="empform2"  onclick="empform2(3)"/> <label for="empform6">Enter Employee No, Joining Date and Age</label>
     </p>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  } else if (tag == 4) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process" text-first="true" style="margin:5px 0;">
     <p><input type="radio"  class="radio-input" id="empform7" name="empform1" value="empform1"  onclick="empform1(4)"/> <label for="empform7">Enter Employee No, Date of Birth</label>
     </p>
     <p><input type="radio" class="radio-input" id="empform8"  name="empform1" value="empform2"  onclick="empform2(4)"/> <label for="empform8">Enter Employee No, Joining Date and Age</label>
     </p>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  } else if (tag == 5) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process" text-first="true" style="margin:5px 0;">
     <p><input type="radio"  class="radio-input" id="empform9" name="empform1" value="empform1"  onclick="empform1(5)"/> <label for="empform9">Enter Employee No, Date of Birth</label>
     </p>
     <p><input type="radio" class="radio-input" id="empform10"  name="empform1" value="empform2"  onclick="empform2(5)"/> <label for="empform10">Enter Employee No, Joining Date and Age</label>
     </p>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  }

}

function empvalidateForm(tag) {
  let x = document.forms["employeeform"]["empno"].value;
  let y = document.forms["employeeform"]["dob"].value;
  if ((x == "abc123")) {

    // if( (x == "abc123" ) && (y == "")) {    // Used for validation //
    if (tag == 1) {
      verifyotp(1);
      return false;
    } else if (tag == 2) {
      verifyotp(2);
      return false;
    } else if (tag == 3) {
      verifyotp(3);
      return false;
    } else if (tag == 4) {
      verifyotp(4);
      return false;
    } else if (tag == 5) {
      verifyotp(5);
      return false;
    }
  }
  verifyotpnone()
  return false;

}

function empvalidateForm2(tag) {
  let x = document.forms["employeeform2"]["empno"].value;
  let y = document.forms["employeeform2"]["jd"].value;
  let z = document.forms["employeeform2"]["age"].value;

  if ((x == "abc123")) {

    // if( (x == "abc123" ) && (y == "") && (z == "")) {   // Used for validation //
    if (tag == 1) {
      verifyotp(1);
      return false;
    } else if (tag == 2) {
      verifyotp(2);
      return false;
    } else if (tag == 3) {
      verifyotp(3);
      return false;
    } else if (tag == 4) {
      verifyotp(4);
      return false;
    } else if (tag == 5) {
      verifyotp(5);
      return false;
    }
  }
  verifyotpnone()
  return false;

}
//end

function empform1(tag) {
  if (tag == 1) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process" text-first="true" style="margin:5px 0;">
     <form name="employeeform"  onsubmit="return empvalidateForm(1)">
            <label style="margin-bottom:10px;margin-left:0px"> Enter Employee No</label>
<input type="text"  name="empno" value="abc123" style="margin:5px 0;"/>
<label style="margin-bottom:10px;margin-left:0px"> Date of Birth</label>
<input   type="date" onfocus="(this.type='date')" onblur="(this.type='text')" name="dob" style="margin:5px 0;"/>
<div style="text-align:right">

<button type="submit" class="send-btn"> <i class="fa fa-send"></i></button>
</div>
</form>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  } else if (tag == 2) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process" text-first="true" style="margin:5px 0;">
     <form name="employeeform"  onsubmit="return empvalidateForm(2)">
            <label style="margin-bottom:10px;margin-left:0px"> Enter Employee No</label>
<input type="text"  name="empno" value="abc123" style="margin:5px 0;"/>
<label style="margin-bottom:10px;margin-left:0px"> Date of Birth</label>
<input   type="date" onfocus="(this.type='date')" onblur="(this.type='text')" name="dob" style="margin:5px 0;"/>
<div style="text-align:right">

<button type="submit" class="send-btn"> <i class="fa fa-send"></i></button>
</div>
</form>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  } else if (tag == 3) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process" text-first="true" style="margin:5px 0;">
     <form name="employeeform"  onsubmit="return empvalidateForm(3)">
            <label style="margin-bottom:10px;margin-left:0px"> Enter Employee No</label>
<input type="text"  name="empno" value="abc123" style="margin:5px 0;"/>
<label style="margin-bottom:10px;margin-left:0px"> Date of Birth</label>
<input   type="date" onfocus="(this.type='date')" onblur="(this.type='text')" name="dob" style="margin:5px 0;"/>
<div style="text-align:right">

<button type="submit" class="send-btn"> <i class="fa fa-send"></i></button>
</div>
</form>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  } else if (tag == 4) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process" text-first="true" style="margin:5px 0;">
     <form name="employeeform"  onsubmit="return empvalidateForm(4)">
            <label style="margin-bottom:10px;margin-left:0px"> Enter Employee No</label>
<input type="text"  name="empno" value="abc123" style="margin:5px 0;"/>
<label style="margin-bottom:10px;margin-left:0px"> Date of Birth</label>
<input   type="date" onfocus="(this.type='date')" onblur="(this.type='text')" name="dob" style="margin:5px 0;"/>
<div style="text-align:right">

<button type="submit" class="send-btn"> <i class="fa fa-send"></i></button>
</div>
</form>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  } else if (tag == 5) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process" text-first="true" style="margin:5px 0;">
     <form name="employeeform"  onsubmit="return empvalidateForm(5)">
            <label style="margin-bottom:10px;margin-left:0px"> Enter Employee No</label>
<input type="text"  name="empno" value="abc123" style="margin:5px 0;"/>
<label style="margin-bottom:10px;margin-left:0px"> Date of Birth</label>
<input   type="date" onfocus="(this.type='date')" onblur="(this.type='text')" name="dob" style="margin:5px 0;"/>
<div style="text-align:right">

<button type="submit" class="send-btn"> <i class="fa fa-send"></i></button>
</div>
</form>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  }
}


function empform2(tag) {
  if (tag == 1) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process" text-first="true" style="margin:5px 0;">
     <form name="employeeform2" onsubmit="return empvalidateForm2(1)">
     <label style="margin-bottom:10px;margin-left:0px"> Enter Employee No</label>
<input type="text" value="abc123" name="empno" style="margin:5px 0;"/>
<label style="margin-bottom:10px;margin-left:0px"> Date of Joining</label>
<input   type="date" onfocus="(this.type='date')" onblur="(this.type='text')" name="jd" style="margin:5px 0;"/>
<label style="margin-bottom:10px;margin-left:0px"> Enter Your Age</label>
<input type="text"  name="age" style="margin:5px 0;"/>
<div style="text-align:right">

<button type="submit" class="send-btn"> <i class="fa fa-send"></i></button>
</div>

</form>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  } else if (tag == 2) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process" text-first="true" style="margin:5px 0;">
     <form name="employeeform2" onsubmit="return empvalidateForm2(2)">
     <label style="margin-bottom:10px;margin-left:0px"> Enter Employee No</label>
<input type="text" value="abc123" name="empno" style="margin:5px 0;"/>
<label style="margin-bottom:10px;margin-left:0px"> Date of Joining</label>
<input   type="text" onfocus="(this.type='date')" onblur="(this.type='text')" name="jd" style="margin:5px 0;"/>
<label style="margin-bottom:10px;margin-left:0px"> Enter Your Age</label>
<input type="text"  name="age" style="margin:5px 0;"/>
<div style="text-align:right">

<button type="submit" class="send-btn"> <i class="fa fa-send"></i></button>
</div>

</form>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  } else if (tag == 3) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process" text-first="true" style="margin:5px 0;">
     <form name="employeeform2" onsubmit="return empvalidateForm2(3)">
     <label style="margin-bottom:10px;margin-left:0px"> Enter Employee No</label>
<input type="text" value="abc123" name="empno" style="margin:5px 0;"/>
<label style="margin-bottom:10px;margin-left:0px"> Date of Joining</label>
<input   type="date" onfocus="(this.type='date')" onblur="(this.type='text')" name="jd" style="margin:5px 0;"/>
<label style="margin-bottom:10px;margin-left:0px"> Enter Your Age</label>
<input type="text"  name="age" style="margin:5px 0;"/>
<div style="text-align:right">

<button type="submit" class="send-btn"> <i class="fa fa-send"></i></button>
</div>

</form>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  } else if (tag == 4) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process" text-first="true" style="margin:5px 0;">
     <form name="employeeform2" onsubmit="return empvalidateForm2(4)">
     <label style="margin-bottom:10px;margin-left:0px"> Enter Employee No</label>
<input type="text" value="abc123" name="empno" style="margin:5px 0;"/>
<label style="margin-bottom:10px;margin-left:0px"> Date of Joining</label>
<input   type="date" onfocus="(this.type='date')" onblur="(this.type='text')" name="jd" style="margin:5px 0;"/>
<label style="margin-bottom:10px;margin-left:0px"> Enter Your Age</label>
<input type="text"  name="age" style="margin:5px 0;"/>
<div style="text-align:right">

<button type="submit" class="send-btn"> <i class="fa fa-send"></i></button>
</div>

</form>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  } else if (tag == 5) {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process" text-first="true" style="margin:5px 0;">
     <form name="employeeform2" onsubmit="return empvalidateForm2(5)">
     <label style="margin-bottom:10px;margin-left:0px"> Enter Employee No</label>
<input type="text" value="abc123" name="empno" style="margin:5px 0;"/>
<label style="margin-bottom:10px;margin-left:0px"> Date of Joining</label>
<input   type="date" onfocus="(this.type='date')" onblur="(this.type='text')" name="jd" style="margin:5px 0;"/>
<label style="margin-bottom:10px;margin-left:0px"> Enter Your Age</label>
<input type="text"  name="age" style="margin:5px 0;"/>
<div style="text-align:right">

<button type="submit" class="send-btn"> <i class="fa fa-send"></i></button>
</div>

</form>
    </div>
  
  `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  }
}

//end
//Claim status
function claimstatus() {
  document.getElementById("e-card").classList.remove("active");
  document.getElementById("network-list").classList.remove("active");
  document.getElementById("claimstatus").classList.add("active");
  document.getElementById("cashless").classList.remove("active");
  document.getElementById("claimintimation").classList.remove("active");
  document.getElementById("branches").classList.remove("active");
  document.getElementById("claimprocess").classList.remove("active");
  document.getElementById("download").classList.remove("active");

  sendMessage("You have selected a Claim Status");

}
//end

// Cashless status

function cashless() {
  document.getElementById("e-card").classList.remove("active");
  document.getElementById("network-list").classList.remove("active");
  document.getElementById("claimstatus").classList.remove("active");
  document.getElementById("cashless").classList.add("active");
  document.getElementById("claimintimation").classList.remove("active");
  document.getElementById("branches").classList.remove("active");
  document.getElementById("claimprocess").classList.remove("active");
  document.getElementById("download").classList.remove("active");
  sendMessage("You have selected a Cashless Status");
  
}
//end

// Claim intimation

function claimintimation() {
  // processClaimIntimationE();
  document.getElementById("e-card").classList.remove("active");
  document.getElementById("network-list").classList.remove("active");
  document.getElementById("claimstatus").classList.remove("active");
  document.getElementById("cashless").classList.remove("active");
  document.getElementById("claimintimation").classList.add("active");
  document.getElementById("branches").classList.remove("active");
  document.getElementById("claimprocess").classList.remove("active");
  document.getElementById("download").classList.remove("active");
  // sendMessage("You have selected a Claim Intimation");
  const url = 'https://tips.vidalhealthtpa.com/employeeportal/searchclaims'; // Replace with the actual URL of the page
  window.open(url, '_blank');

}
//end
// Claim process

function claimprocess() {
  document.getElementById("e-card").classList.remove("active");
  document.getElementById("network-list").classList.remove("active");
  document.getElementById("claimstatus").classList.remove("active");
  document.getElementById("cashless").classList.remove("active");
  document.getElementById("claimintimation").classList.remove("active");
  document.getElementById("branches").classList.remove("active");
  document.getElementById("claimprocess").classList.add("active");
  document.getElementById("download").classList.remove("active");
  // sendMessage("You have selected a Claim Process");
  const url = 'https://vidalhealthtpa.com/vidalhealthtpa/claims-form-filling-guidelines.html'; // Replace with the actual URL of the page
  window.open(url, '_blank');

}
//end

function download() {
  document.getElementById("e-card").classList.remove("active");
  document.getElementById("network-list").classList.remove("active");
  document.getElementById("claimstatus").classList.remove("active");
  document.getElementById("cashless").classList.remove("active");
  document.getElementById("claimintimation").classList.remove("active");
  document.getElementById("branches").classList.remove("active");
  document.getElementById("claimprocess").classList.remove("active");
  document.getElementById("download").classList.add("active");
  // sendMessage("You have selected a Downloads");
  const url = ' https://www.vidalhealthtpa.com/vidalhealthtpa/downloads.html'; // Replace with the actual URL of the page
  window.open(url, '_blank');

}

// Process B

function processB() {

  {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `
<div class="bot-response text full-widthbox ver-process"  text-first="true" style="margin:5px 0;">
   <a href="assets/PDF/VIDAL%20HEALTH.pdf" target="_blank" >Get PDF</a>
</div> 
`;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  }
}

//process C

function processC() {

  {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `
<div class="bot-response text full-widthbox ver-process"  text-first="true" style="margin:5px 0;">
<label style="margin-bottom:10px"> Select Transaction</label>
      <select class="select" onchange="tnxlist()">
         <option selected disabled>Select</option>
          <option>
          Transaction 1
            </option>
            <option>
            Transaction 2
            </option>
            <option>
            Transaction 3
            </option>
            <option>
            Transaction 4
            </option>
            <option>
            Transaction 5
            </option>
          </select>
</div> 
`;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  }
}


function tnxlist() {
  {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal"> ';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text" text-first="true">
     <p>Patient Name : acb12345678</p>
     <p>Date of Admission : dd/mm/yyyy </p>
  <p>Transaction No : acb12345678</p>
  <p>Transaction Amount : 10,000</p>
          </div>
        
        `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  }

}


// process E

function processE() {


  {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal"> ';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `
<div class="bot-response text full-widthbox ver-process"  text-first="true" style="margin:5px 0;">
<label style="margin-bottom:10px"> Select Member Name</label>
      <select class="select" onchange="memberlist()">
         <option>Select Member</option>
          <option>
          Member 1
            </option>
            <option>
            Member 2
            </option>
            <option>
            Member 3
            </option>
            <option>
            Member 5
            </option>
            <option>
            Member 6
            </option>
          </select>
</div> 
`;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  }


}


function memberlist() {
  {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal"> ';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process" text-first="true">

<form class="">

<label style="margin-bottom:10px">DOA</label>
<input type="date"  />

<label style="margin-bottom:10px;margin-top:10px">DOD</label>
<input type="date"  />

<label style="margin-bottom:10px;margin-top:10px">Cost</label>
<input type="text"  />
<label style="margin-bottom:10px;margin-top:10px">Claim Type</label>
<select>
<option> 
Select Claim Type
</option>

<option>
Claim Type 1

</option>
<option>
Claim Type 2

</option>
<option>
Claim Type 3

</option>
</select>


<label style="margin-bottom:10px;margin-top:10px">Hospital Name</label>
<input type="text"  />

<div style="text-align:right;margin-top:10px">
<button type="button" onclick="submitmemeber()" class="send-btn "> <i class="fa fa-send"></i></button>
</div>

</form>

          </div>
        
        `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  }

}

function submitmemeber() {
  {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal"> ';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text full-widthbox ver-process" text-first="true">

     <p class="text-success">Your claim has been submitted successfully!</p>


          </div>
        
        `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  }


}

// process D

function processD() {

  {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal">';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `
<div class="bot-response text full-widthbox ver-process"  text-first="true" style="margin:5px 0;">
<label style="margin-bottom:10px"> Select Transaction</label>
      <select class="select" onchange="ptextD()">
         <option selected disabled>Select</option>
          <option>
          Transaction 1
            </option>
            <option>
            Transaction 2
            </option>
            <option>
            Transaction 3
            </option>
            <option>
            Transaction 4
            </option>
            <option>
            Transaction 5
            </option>
          </select>
</div> 
`;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  }
}

function ptextD() {
  {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal"> ';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text" text-first="true">
     <p>Patient Name : Lorem Ipsum</p>
     <p>Date of Admission : dd/mm/yyyy </p>
  <p>Transaction No : acb12345678</p>
  <p>Transaction Amount : 10,000</p>
  <a href="assets/PDF/VIDAL%20HEALTH.pdf" target="_blank" >Get PDF</a>

          </div>
        
        `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  }

}

function processG() {
  {
    let elementCPT = document.createElement("div");
    elementCPT.classList.add("captionBot", "msgCaption");
    elementCPT.innerHTML =
      '<img src="assets/img/favicon.png" alt="vidal"> ';
    ContentChat.appendChild(elementCPT);
    elementCPT.scrollIntoView();

    setTimeout(() => {
      elementMSG.innerHTML = `<div class="bot-response text" text-first="true">
  <a href="#" target="_blank" >URL Example</a>

          </div>
        
        `;
      elementMSG.scrollIntoView();
      send1.classList.remove("none");
      send2.classList.add("none");
      status_func_SendMsgBot = 0;
    }, 2000)


    let elementMSG = document.createElement("div");
    elementMSG.classList.add("massage");
    elementMSG.innerHTML = `<div class="bot-response text" text-first="true"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="10" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> <rect x="20" y="0" width="4" height="10" fill="rgb(155, 166, 178)"> <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"> </animateTransform> </rect> </svg></div>`;
    ContentChat.appendChild(elementMSG);

    status_func_SendMsgBot = 1;
    send1.classList.add("none");
    send2.classList.remove("none");
    elementMSG.scrollIntoView();
  }
}