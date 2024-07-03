const Contact = () =>{
    const imgurl = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzc0NnV6NWM5cTd4aTVibXlxeDUwczZkOXQ2Mm15YXlhMHAzM2JlNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XVbQsIjdXDNyswwxOO/giphy.gif";
    return (
        <div className="contact">
            <img src={imgurl} alt="Evil Smirk.." className="evil"/>
            <h2> you need to order before you can contact me...</h2>
        </div>
    )
}

export default Contact;