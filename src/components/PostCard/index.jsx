import P from 'prop-types';
import './styles.css';

export const PostCard = ({ title, body, id, cover }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h1> {id} {title}</h1>
      <p>{body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  title: P.string.isRequired,
  body: P.string.isRequired,
  id: P.number.isRequired,
  cover: P.string.isRequired
};
