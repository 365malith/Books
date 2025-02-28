document.addEventListener("DOMContentLoaded", function () {
    const chatIcon = document.getElementById("chatIcon");
    const chatWidget = document.getElementById("chatWidget");
    const closeChat = document.getElementById("closeChat");
    const chatInput = document.getElementById("chatInput");
    const sendChat = document.getElementById("sendChat");
    const chatMessages = document.getElementById("chatMessages");
  
    // Toggle chat widget visibility when chat icon is clicked
    chatIcon.addEventListener("click", function () {
      chatWidget.classList.toggle("d-none");
    });
  
    // Hide chat widget when close button is clicked
    closeChat.addEventListener("click", function () {
      chatWidget.classList.add("d-none");
    });
  
    // Send chat message
    sendChat.addEventListener("click", function () {
      const message = chatInput.value.trim();
      if (message !== "") {
        appendMessage("You", message);
        chatInput.value = "";
        // Simulate bot response after 1 second
        setTimeout(() => {
          appendMessage("Malith", "This is a simulated answer.");
        }, 1000);
      }
    });
  
    // Allow Enter key to send message
    chatInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        sendChat.click();
      }
    });
  
    // Append message to chat
    function appendMessage(sender, message) {
      const messageElem = document.createElement("div");
      messageElem.classList.add("mb-2");
      messageElem.innerHTML = `<strong>${sender}:</strong> ${message}`;
      chatMessages.appendChild(messageElem);
      // Auto scroll to latest message
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  });

  function showSuggestions() {
    const input = document.getElementById("searchInput");
    const suggestions = document.getElementById("suggestions");
    const hotels = ["Cinnamon Life", "Cinnamon Grand", "Cinnamon Red", "Cinnamon Lakeside"];

    let filter = input.value.toLowerCase();
    suggestions.innerHTML = ""; // Clear previous suggestions

    if (filter) {
        hotels.forEach(hotel => {
            if (hotel.toLowerCase().includes(filter)) {
                let suggestionItem = document.createElement("a");
                suggestionItem.className = "list-group-item list-group-item-action";
                suggestionItem.innerText = hotel;
                suggestionItem.href = "#"; // Prevent default redirection
                suggestionItem.onclick = function() {
                    input.value = hotel;
                    suggestions.innerHTML = "";
                };
                suggestions.appendChild(suggestionItem);
            }
        });
    }
}

function redirectToDetails() {
    const input = document.getElementById("searchInput").value;
    if (input.toLowerCase() === "cinnamon life") {
        window.location.href = "hoteldetail.html";
    } else {
        alert("Please select a valid hotel from the suggestions.");
    }
}
