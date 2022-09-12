import userIcon from '../images/user.svg' 
import clockIcon from '../images/clock.svg'
import folderIcon from '../images/empty-folder.svg'

import '../styles/Feed.css'

const Feed = (props) => {
    if (props.posts.length === 0) {
        return(
            <div className="feed-status">
                <img src={folderIcon} alt= "Empty Folder"/>
                <h1>Não encontramos nada</h1>
                <h2>
                Parece que você e seus amigos não postaram nada.
                Comece a escrever uma nova história!
                </h2>
            </div>
        )
    }

    return(
        <>
            <header>
                <h1>Seu Feed</h1>
                <h2>Acompanhe o que seus amigos estão pensando em tempo real!</h2>
            </header>
            <section className='feed'>
                {props.posts.map((post) => (
                    <article key={post.id}>
                        <p>{post.content}</p>
                        <footer>
                            <div className="user-details">
                                <img src={userIcon} alt="User"/>
                                <strong>{post.userName}</strong>
                            </div>
                            <div className="time">
                                <img src={clockIcon} alt="Clock"/>
                                <span>Publicado em {post.publisedAt.toLocaleDateString('pt-br')}</span>
                            </div>
                        </footer>
                    </article>
                ))}
            </section>
        </>
    )
}

export default Feed