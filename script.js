function submitPrompt() {
    const prompt = document.getElementById('niccolo-prompt');
    const response = document.getElementById('aim-response');

    // Process the prompt and generate a response using AIM or another chatbot API
    const aimResponse = processPrompt(prompt.value);

    // Display the response
    response.innerHTML = aimResponse;

    // Clear the prompt
    prompt.value = '';
}

function processPrompt(promptText) {
    // Add logic here to process the prompt and generate a response using AIM or another chatbot API
    const responseText = "AIM's response to the given prompt.";
    return responseText;
}