import '@scss/Posts.scss';
import { FindAllPosts } from '@root/utils/post';
import { useEffect, useState } from 'react';
import WritingItem from '@root/components/WritingItem';

type postsPros = {
    fileName : string
}

const Posts = () => {
    const [postNames, setPosts] = useState<postsPros[]>([]);
    useEffect(() => {
        resetPosts();
    },[])

    const resetPosts = () => {
        setPosts([]);
        FindAllPosts().forEach(postName => {
            let post:postsPros = {
                fileName: postName
            }
            setPosts(prevPosts => [...prevPosts, post]);
          });
      };
    return (
        <div className="posts">
            {postNames.map((pros, index) => (
                <WritingItem
                    key={index}
                    id={pros.fileName}
                />
            ))}
        </div>
    )
}



export default Posts;