import { data } from "./data/DataArticle"
import { useState } from "react"
import Article from "./components/Article"

function App2() {
    const [datalist] = useState(data)

    const convertElipsisBody = (body) => {
        return body.length > 100 ? body.slice(0,100) + "..." : body
    }

    const convertElipsisTitle = (title) => {
        return title.length > 20 ? title.slice(0,30) + "..." : title
    }

    return (
        <div className="container">
            <h1 className="text-center mt-3">Blog Article</h1>
            <div className="row mt-5">
            {datalist.map((data) => {
                return (
                    <div className="col mt-3" key={data.id}>
                        <Article 
                                title={convertElipsisTitle(data.title)}
                                 body={convertElipsisBody(data.body)}/>
                    </div>
                )
            })}
           
         </div>
         </div> 
    )
}

export default App2