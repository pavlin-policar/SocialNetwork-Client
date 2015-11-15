import React from 'react';
import Comment from './Comment.react';

class CommentsContainer extends React.Component {

  displayName = "CommentsContainer";

  constructor(props) {
    super(props);
  }

  render() {
    let comments = this.props.comments.map((comment) => {
      return <Comment key={comment.commentId} comment={comment} />
    });
    return (
      <section className="post-comments">
        {comments}
      </section>
    );
  }

}

export default CommentsContainer;