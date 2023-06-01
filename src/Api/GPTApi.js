import * as NetworkTools from "../Utils/NetworkTools"

const AzureGPTEndPointEmbeddingModel = process.env.REACT_APP_OPENAI_END_POINT + "/openai/deployments/" + process.env.REACT_APP_OPENAI_DEPLOYMENT
const AzureGPTEndPointChatGPTModel = process.env.REACT_APP_OPENAI_END_POINT + "/openai/deployments/" + process.env.REACT_APP_OPENAI_GPT35_DEPLOYMENT
const AzureAPIKey = process.env.REACT_APP_OPENAI_API_KEY

// https://learn.microsoft.com/zh-cn/azure/cognitive-services/openai/reference#embeddings
export async function gptEmbeddings(input, callback) {
    input = input.replace(/\n/g, " ");

    const url = AzureGPTEndPointEmbeddingModel + "/embeddings?api-version=2023-05-15"
    const headers = {
        "Content-Type": "application/json",
        "api-key": AzureAPIKey
    }
    const body = JSON.stringify({
        "input": input
    })
    return NetworkTools.ApiPost(url, headers, body, callback)
}

// https://learn.microsoft.com/zh-cn/azure/cognitive-services/openai/reference#chat-completions
export async function completions(prompt, callback) {
    prompt = prompt.replace(/\n/g, " ");

    const url = AzureGPTEndPointChatGPTModel + "/chat/completions?api-version=2023-05-15"
    const headers = {
        "Content-Type": "application/json",
        "api-key": AzureAPIKey
    }
    const body = JSON.stringify({
        messages: [
            {
                role: "system",
                content: "You are a helpful assistant that accurately answers queries using Paul Graham's essays. Use the text provided to form your answer, but avoid copying word-for-word from the essays. Try to use your own words when possible. Keep your answer under 5 sentences. Be accurate, helpful, concise, and clear."
            },
            {
                role: "user",
                content: prompt
            }
        ],
        max_tokens: 150,
        temperature: 0.0,
        stream: false
    })
    return NetworkTools.ApiPost(url, headers, body, callback)
}

