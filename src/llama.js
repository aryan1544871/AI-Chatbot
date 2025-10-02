
import fetch from 'node-fetch';

export async function llamaModel(prompt) {

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.REACT_APP_KEY}`,
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
  const chatCompletion = await response.json();
  return chatCompletion;
}
