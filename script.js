document.querySelector(".send-button").addEventListener("click", async () => {
    const promptText = document.querySelector(".email-body").value;
    const responseText = await processPrompt(promptText);
    document.querySelector(".response-content").textContent = responseText;
});

async function processPrompt(promptText) {
    const apiKey = "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"; // Replace with your actual API key

    const response = await fetch("https://api.openai.com/v1/engines/davinci-codex/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            prompt: promptText,
            max_tokens: 100,
            n: 1,
            stop: null,
            temperature: 0.8
        })
    });

    const data = await response.json();
    return data.choices[0].text.trim();
}
