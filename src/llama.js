const Groq = require('groq-sdk');
const groq = new Groq({
    apiKey: process.env.REACT_APP_KEY ,dangerouslyAllowBrowser: true
  });

export async function llamaModel(prompt) {
  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {
        "role": "user",
        "content": prompt
      }
    ],
    "model": "llama3-8b-8192",
    "temperature": 1,
    "max_tokens": 1024,
    "top_p": 1,
    "stop": null
  });
  return chatCompletion;

}
