import React, {useEffect, useState} from "react";
import './Feed.css'
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "../../firebase";

function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
        ))

    },[]);
    return (
        <div className='feed'>
            <StoryReel/>
            <MessageSender/>

            {posts.map(post => (
                <Post
                    key={post.data.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}/>
            ))}
            {/*<Post*/}
            {/*    profilePic='https://mpak-suse1.akamaized.net/res/user_v_icon/371/icon_6540200603635717135-aYRWDagwOy.jpg'*/}
            {/*    message='This works'*/}
            {/*    timestamp='Timestamp'*/}
            {/*    username='sanztah'*/}
            {/*    image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBMs-Dzj7gT8GAzk_6TDZwGTWYCSbwyTU8Dw&usqp=CAU'/>*/}
            {/*<Post*/}
            {/*    profilePic='data:image/jpeg;base64,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'*/}
            {/*    message='This works 2'*/}
            {/*    timestamp='Timestamp'*/}
            {/*    username='sanztah'/>*/}
        </div>
    )
}

export default Feed
