import { useNavigate } from 'react-router-dom';
import '@scss/WritingItem.scss';
import moment from 'moment';
import { Post } from '@root/react-app-env';

const WritingItem = ({
  id,
  attributes,
  body,
  bodyBegin,
  frontmatter,
}: Omit<Post, 'content'>) => {
  const navigate = useNavigate();
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