import * as NetworkTools from "../Utils/NetworkTools"

export async function gptEmbeddings(input, callback) {
    input = input.replace(/\n/g, " ");

    const url = "/api/embeddings"
    const headers = {
        "Content-Type": "application/json"
    }
    const body = JSON.stringify({
        "input": input
    })
    return NetworkTools.ApiPost(url, headers, body, callback)
}

export async function completions(prompt, callback) {
    prompt = prompt.replace(/\n/g, " ");

    const url = "/api/chat/completions"
    const headers = {
        "Content-Type": "application/json"
    }
    const body = JSON.stringify({
        "prompt": prompt
    })
    return NetworkTools.ApiPost(url, headers, body, callback)
}

