
export async function llamaModel(prompt) {

  var response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": "Bearer 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",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "model": "meta-llama/llama-3.3-8b-instruct:free",
    "messages": [
      {
        "role": "user",
        "content": prompt
      }
    ]
  })
});
var chatCompletion = await response.json();
return chatCompletion;
}
