export async function llamaModel(prompt) {
  const response = await fetch("https://backend-ai-chatbot.vercel.app/data/ai?chat=" + prompt);
  const chatCompletion = await response.json();
  return chatCompletion;
}
