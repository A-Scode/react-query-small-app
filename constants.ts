import axios from "axios";

export const  api = axios.create({
    baseURL : "https://api.github.com/",
    headers : {
        Accept : "application/vnd.github+json",
        Authorization : "Bearer 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",
        "X-GitHub-Api-Version" : "2022-11-28"
    }
})