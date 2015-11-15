import React from 'react';
import { timestampString } from '../../utils/TimestampUtils';

class Comment extends React.Component {

  displayName = "Comment";

  constructor(props) {
    super(props);
  }

  render() {
    const comment = this.props.comment;
    return (
      <div className="post-comment">
        <img alt="" src={comment.thumbnail}/>

        <div>
          <div className="group">
            <a className="author" href="">{comment.author}</a>&nbsp;
            <span>{comment.comment}</span>
          </div>
          <div className="group">
            <span className="info">{timestampString(comment.timestamp)}</span>
          </div>
        </div>
      </div>
    );
  }

}

export default Comment;