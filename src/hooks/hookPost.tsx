import { useState, useEffect, Attributes } from 'react'
import '@scss/Post.scss'
import { FindPost, Parse } from '@root/utils/post';
import { Post } from '@root/react-app-env';

export const HookPost=(id:any):Post=> {
    const [attributes, setAttribute] = useState<Attributes>({});
    const [body, setBody] = useState<Body>();
    const [bodyBegin, setBodyBegin] = useState<Number>(0);
    const [frontmatter, setFrontmatter] = useState<String>("");

    useEffect(() => {
      window.scroll(0, 0);

      const file = FindPost(id);
      file.then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(text => Parse(text))
          .then(post => {
            setAttribute(post.attributes);
            setBody(post.body);
            setBodyBegin(post.bodyBegin);
            setFrontmatter(post.frontmatter);
          });
        });
    }, [id])
  
    return {attributes, body, bodyBegin, frontmatter}
}

export default HookPost;