// Default responses for the demo version
const demoResponses = {
    default: "This is a demo version with limited features. To access all features of Aqua Advisor, purchase the book 'Above Ground Pools & Outdoor Spas' and enter the access code.",
    
    pool: "Above-ground pools are a great solution for those who want to enjoy the benefits of a pool with a contained investment. There are different types, such as those with steel structures, wood, or composite. In the full version of Aqua Advisor, you can receive personalized advice based on your specific needs.",
    
    maintenance: "Basic pool maintenance includes regular checking of pH and chlorine levels, filter cleaning, and removing debris from the surface. For more detailed and personalized advice, unlock the full version of Aqua Advisor.",
    
    filtration: "A good filtration system is essential to keep pool water clean and safe. The main types are sand, cartridge, and diatomaceous earth. In the full version of Aqua Advisor, you can find out which system is best suited to your specific needs.",
    
    spa: "Outdoor spas offer relaxation and therapeutic benefits. When choosing, consider size, number of seats, jet power, and thermal insulation. For a complete consultation on spas, unlock the full version of Aqua Advisor.",
    
    cost: "The costs of an above-ground pool vary considerably based on size, materials, and accessories. A basic pool can start from around €1,500, while premium models can exceed €15,000. For a personalized quote, access the full version of Aqua Advisor."
};

// Valid access code (in a real implementation, this would be handled more securely)
const validAccessCode = "AQUA2025"; // Keep the demo code or suggest user defines one

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    const accessCode = document.getElementById('accessCode');
    const unlockButton = document.getElementById('unlockButton');
    const unlockMessage = document.getElementById('unlockMessage');
    
    // Handle sending chat messages
    function sendMessage() {
        const message = userInput.value.trim();
        if (message === '') return;
        
        // Add user message
        addMessage(message, 'user');
        
        // Generate response
        setTimeout(() => {
            const response = generateResponse(message);
            addMessage(response, 'bot');
        }, 500);
        
        // Clear input
        userInput.value = '';
    }
    
    // Add message to chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        
        messageDiv.appendChild(paragraph);
        chatMessages.appendChild(messageDiv);
        
        // Auto-scroll to the end of the chat
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Generate response based on input
    function generateResponse(input) {
        input = input.toLowerCase();
        
        // Search for keywords in the input
        if (input.includes('pool')) {
            return demoResponses.pool;
        } else if (input.includes('maintenance') || input.includes('clean')) {
            return demoResponses.maintenance;
        } else if (input.includes('filter') || input.includes('filtration')) {
            return demoResponses.filtration;
        } else if (input.includes('spa') || input.includes('hot tub') || input.includes('jacuzzi')) {
            return demoResponses.spa;
        } else if (input.includes('cost') || input.includes('price') || input.includes('how much')) {
            return demoResponses.cost;
        } else {
            return demoResponses.default;
        }
    }
    
    // Verify access code
    function checkAccessCode() {
        const code = accessCode.value.trim();
        
        if (code === validAccessCode) {
            unlockMessage.textContent = "Valid code! Full access unlocked.";
            unlockMessage.style.color = "#4ECDC4";
            
            // Simulate redirection to the full version
            setTimeout(() => {
                alert("In a real implementation, you would be redirected to the full version of Aqua Advisor. This is just a demo.");
            }, 1000);
        } else {
            unlockMessage.textContent = "Invalid code. Please check and try again.";
            unlockMessage.style.color = "#e25555";
        }
    }
    
    // Event listeners
    sendButton.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    unlockButton.addEventListener('click', checkAccessCode);
    accessCode.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkAccessCode();
        }
    });
});
