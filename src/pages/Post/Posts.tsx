import '@scss/Posts.scss';
import { FindAllPosts } from '@root/utils/post';
import { useEffect, useState } from 'react';
import WritingItem from '@root/components/WritingItem';
import { Post } from '@root/react-app-env';
import { InitPostMap } from '@utils/post';

const Posts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    useEffect(() => {
        resetPosts();
    },[])

    const resetPosts = () => {
        setPosts([]);
        FindAllPosts().forEach(post => {
            console.log(post);
            setPosts(prev => [...prev,post]);
        });
      };
    return (
        <div className="posts">
            {posts.map((post, index) => (
                <WritingItem
                    key={index}
                    id={post.id}
                    attributes={post.attributes}
                    body={post.body}
                    bodyBegin={post.bodyBegin}
                    frontmatter={post.frontmatter}                />
            ))}
        </div>
    )
}



export default Posts;