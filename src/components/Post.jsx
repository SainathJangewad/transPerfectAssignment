import './Post.css';
export const Post = ({post})=>{
    let title = post.data.title;
    let thumbnail = post.data.thumbnail;
    let subreddit = post.data.subreddit;
    let url = post.data.url;
    let ups = post.data.ups;
    return(
        <div className="post-container">
            {
               <div className="single-post">
                   <a href={url}>{title}</a>
                   <div className='img-container'> 
                       <img src = {thumbnail} />
                   </div>
                   <h4 className='subreddit-name'>Subreddit Name : {subreddit}</h4>
                   <h4>Ups : {ups}</h4>
               </div>
            }
       </div>
    )
}

 