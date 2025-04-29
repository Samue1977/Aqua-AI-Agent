// Risposte predefinite per la versione demo
const demoResponses = {
    default: "Questa è una versione dimostrativa con funzionalità limitate. Per accedere a tutte le funzionalità di Aqua Advisor, acquista il libro 'Above Ground Pools & Outdoor Spas' e inserisci il codice di accesso.",
    
    piscina: "Le piscine fuori terra sono un'ottima soluzione per chi desidera godere dei benefici di una piscina con un investimento contenuto. Esistono diversi tipi, come quelle con struttura in acciaio, in legno o in composito. Nella versione completa di Aqua Advisor potrai ricevere consigli personalizzati in base alle tue esigenze specifiche.",
    
    manutenzione: "La manutenzione base di una piscina include il controllo regolare del pH e del cloro, la pulizia del filtro e la rimozione di detriti dalla superficie. Per consigli più dettagliati e personalizzati, sblocca la versione completa di Aqua Advisor.",
    
    filtrazione: "Un buon sistema di filtrazione è essenziale per mantenere l'acqua della piscina pulita e sicura. I tipi principali sono a sabbia, a cartuccia e a diatomee. Nella versione completa di Aqua Advisor potrai scoprire quale sistema è più adatto alle tue esigenze specifiche.",
    
    spa: "Le spa da esterno offrono relax e benefici terapeutici. Nella scelta, considera dimensioni, numero di posti, potenza dei getti e isolamento termico. Per una consulenza completa sulle spa, sblocca la versione integrale di Aqua Advisor.",
    
    costo: "I costi di una piscina fuori terra variano considerevolmente in base a dimensioni, materiali e accessori. Una piscina base può partire da circa €1.500, mentre modelli premium possono superare i €15.000. Per un preventivo personalizzato, accedi alla versione completa di Aqua Advisor."
};

// Codice di accesso valido (in un'implementazione reale, questo sarebbe gestito in modo più sicuro)
const validAccessCode = "AQUA2025";

// Elementi DOM
document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chatMessages');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');
    const accessCode = document.getElementById('accessCode');
    const unlockButton = document.getElementById('unlockButton');
    const unlockMessage = document.getElementById('unlockMessage');
    
    // Gestione invio messaggi chat
    function sendMessage() {
        const message = userInput.value.trim();
        if (message === '') return;
        
        // Aggiungi messaggio utente
        addMessage(message, 'user');
        
        // Genera risposta
        setTimeout(() => {
            const response = generateResponse(message);
            addMessage(response, 'bot');
        }, 500);
        
        // Pulisci input
        userInput.value = '';
    }
    
    // Aggiungi messaggio alla chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        
        messageDiv.appendChild(paragraph);
        chatMessages.appendChild(messageDiv);
        
        // Auto-scroll alla fine della chat
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Genera risposta in base all'input
    function generateResponse(input) {
        input = input.toLowerCase();
        
        // Cerca parole chiave nell'input
        if (input.includes('piscina') || input.includes('pool')) {
            return demoResponses.piscina;
        } else if (input.includes('manutenzione') || input.includes('pulire') || input.includes('pulizia')) {
            return demoResponses.manutenzione;
        } else if (input.includes('filtro') || input.includes('filtrazione')) {
            return demoResponses.filtrazione;
        } else if (input.includes('spa') || input.includes('idromassaggio') || input.includes('jacuzzi')) {
            return demoResponses.spa;
        } else if (input.includes('costo') || input.includes('prezzo') || input.includes('quanto costa')) {
            return demoResponses.costo;
        } else {
            return demoResponses.default;
        }
    }
    
    // Verifica codice di accesso
    function checkAccessCode() {
        const code = accessCode.value.trim();
        
        if (code === validAccessCode) {
            unlockMessage.textContent = "Codice valido! Accesso completo sbloccato.";
            unlockMessage.style.color = "#4ECDC4";
            
            // Simulazione di reindirizzamento alla versione completa
            setTimeout(() => {
                alert("In un'implementazione reale, saresti reindirizzato alla versione completa di Aqua Advisor. Questa è solo una demo.");
            }, 1000);
        } else {
            unlockMessage.textContent = "Codice non valido. Verifica e riprova.";
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
