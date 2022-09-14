import { useState } from "react"

import Feed from '../components/Feed'
import PostForm from '../components/PostForm'

const Home = () => {
    const [posts, setPosts] = useState([])

    function handleSubmit({ history, userName }) {
        setPosts([
            ...posts,
            {
                id: Math.random(),
                content: history,
                userName,
                publisedAt: new Date(),
            },
        ])
    }

    return (
        <>
            <PostForm onSubmit={handleSubmit}/>
            <main>
                <Feed 
                    posts={posts}
                    title="Seu Feed"
                    subtitle="Acompanhe o que seus amigos estão pensando em tempo real"
                />
            </main>
        </>
    )
}

export default Home