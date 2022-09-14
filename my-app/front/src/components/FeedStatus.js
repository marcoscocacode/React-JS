export default function FeedStatus(props) {
    return (
        <div className="feed-status">
            <img src={props.image} alt="Error" />

            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}