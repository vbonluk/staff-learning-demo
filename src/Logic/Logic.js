import * as GPTApi from "../Api/GPTApi"
import * as VectorDatabase from "../Api/VectorDatabaseApi"

export async function searchLogic(text, callback) {
    console.log("🚀embedding...")
    const embeddingsJson = await GPTApi.gptEmbeddings(text, (status, result) => {
        // callback(status, result)
    })
    const embedding = embeddingsJson.data[0].embedding;
    console.log("👾embedding success")
    console.log(embedding)

    console.log("🚀vector db searching...")
    const searchResult = await VectorDatabase.vectorSearch(embedding)
    console.log("👾vector db searching success")
    console.log(searchResult)

    return relatedDocuments(text, searchResult, callback)
}

async function relatedDocuments(text, searchResult, callback) {
    console.log("🚀listing related documents...")
    const relatedDocShownList = searchResult.data;
    console.log("👾finish related documents")

    return gptAnswerGenerator(text, searchResult, relatedDocShownList, callback)
}

async function gptAnswerGenerator(text, searchResult, relatedDocShownList, callback) {
    console.log("🚀prompts init...")
    let prompt = "Use the following passages to provide an answer to the query: " + text + "\n"
    const allContents = searchResult.data.map((item) => {
        return item.content
    });
    prompt = prompt + allContents.join(",")
    console.log("👾prompts init finish")
    console.log(prompt)

    console.log("🚀asking gpt...")
    const completions = await GPTApi.completions(prompt)
    // console.log(completions)
    const gptAnswer = completions.choices[0].message.content;
    console.log("👾asking gpt success")
    console.log(gptAnswer)

    callback(true, gptAnswer, relatedDocShownList)
}
