document.querySelector(".send-button").addEventListener("click", async () => {
    const promptText = document.querySelector(".email-body").value;
    const responseText = await processPrompt(promptText);
    document.querySelector(".response-content").textContent = responseText;
});

async function processPrompt(promptText) {
    // Replace this function with a function that sends the prompt to the ChatGPT API and retrieves the response
    return "This is a placeholder response. You need to replace the processPrompt function with a function that connects to the ChatGPT API.";
}
