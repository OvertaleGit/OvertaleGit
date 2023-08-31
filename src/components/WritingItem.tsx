import { useNavigate } from 'react-router-dom';
import '@scss/WritingItem.scss';
import HookPost from '@root/hooks/hookPost';
import moment from 'moment';

type postsPros = {
    id : string
}

const WritingItem = ({
  id
}: Omit<postsPros, 'content'>) => {
  const navigate = useNavigate();
  const {attributes } = HookPost(id)
  const title = attributes['title']
  const description = attributes['description']
  let dateObject = attributes['date'];
  const date = moment(dateObject).format("YY-MM-DD")

  return (
    <section
      className={"container"}
      onClick={() => navigate(`/posts/${id}`)}
    >
      <h2 className={"title"}>{title}</h2>
      <p>{description}</p>
      <p className={"date"}>{date}</p>
    </section>
  );
};

export default WritingItem;