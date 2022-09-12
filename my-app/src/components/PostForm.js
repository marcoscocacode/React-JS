import { useState } from 'react'

import '../styles/PostForm.css'

import userIcon from '../images/user.svg' 
import planeIcon from '../images/paper-plane.svg' 


const PostForm = (props) => {
    const [history, setHistory] = useState('')
    const [userName, setUserName] = useState('')

    function handleSubmit(event) {
        event.preventDefault()

        props.onSubmit({history, userName})
        
        setHistory('')
    }

    return(
        <form className="post-form" onSubmit={handleSubmit}>
                <input 
                    value={history}
                    placeholder="Escreva uma nova história..."
                    onChange={(event) => setHistory(event.target.value)}
                />

                <div>
                    <img src={userIcon} alt='User'/>
                    <input
                        placeholder="Digite seu nome ..."
                        onChange={(event) => setUserName(event.target.value)}
                    />
                    <button type='submit'>
                        <img src= {planeIcon} alt='Paper Plane'/>
                        Publicar
                    </button>
                </div>
            </form>
    )
}

export default PostForm