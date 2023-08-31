import '@scss/Post.scss'
import ReactMarkdown from 'react-markdown'
import moment from 'moment'
import { useParams } from 'react-router-dom';
import HookPost from '@root/hooks/hookPost';


export const Posting=():JSX.Element => {
    const { id } = useParams(); 
    console.log(id);

    const { attributes, body } = HookPost(id);
    const title = attributes['title']
    let dateObject = attributes['date'];
    const date = moment(dateObject).format("YY-MM-DD")
    return (
        <div className='Post'>
    <div className='Title'>
        <h1>{title}</h1> 
        <p>{date}</p>
    </div>
    <hr></hr>
            <ReactMarkdown children={body} />
        </div>
    )
}

export default Posting;