import { useState, useEffect, Attributes } from 'react'
import '@scss/Post.scss'
import { GetPost, Parse } from '@root/utils/post';
import { Post } from '@root/react-app-env';

export const HookPost=(id:any):Post=> {
    const [attributes, setAttribute] = useState({});
    const [body, setBody] = useState<Body>();
    const [bodyBegin, setBodyBegin] = useState<Number>(0);
    const [frontmatter, setFrontmatter] = useState<String>("");

    useEffect(() => {
      window.scroll(0, 0);

      const post = GetPost(id);
      setAttribute(post.attributes);
      setBody(post.body);
      setBodyBegin(post.bodyBegin);
      setFrontmatter(post.frontmatter);
    }, [id])
  
    return {id, attributes, body, bodyBegin, frontmatter}
}

export default HookPost;