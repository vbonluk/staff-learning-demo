
import * as NetworkTools from "../Utils/NetworkTools";

export async function Scrape(url) {
    console.log("🚀Scraping...")
    console.log(url)
    url = "http://www.baidu.com"
    const resp = await fetch(url);
    const html = await resp.text();
    const $ = load(html);
    console.log($("title").text());
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
