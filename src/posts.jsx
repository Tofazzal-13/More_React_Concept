import { use } from "react"
import Post from "./post"

export default function Posts({ postsPromise }) {
    const posts = use(postsPromise)
    return (
        <div className="card2">
            <h3>All posts are here</h3>
            <div className="gridTemplate">
                {
                    posts.map(post => <Post post={post}></Post>)
                }
            </div>
        </div>
    )

}