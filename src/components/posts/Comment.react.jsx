import './Comment.scss';

import React from 'react';
import { Link } from 'react-router';
import { timestampString } from '../../utils/TimestampUtils';
import InlineComponent from '../common/InlineComponent.react';
import StackComponent from '../common/StackComponent.react';

class Comment extends React.Component {

  displayName = "Comment";

  constructor(props) {
    super(props);
  }

  render() {
    const comment = this.props.comment;
    return (
        <InlineComponent className="post-comment">
          <Link to={`/${comment.authorSlug}`}>
            <img alt="" src={comment.thumbnail}/>
          </Link>

          <StackComponent>
            <div>
              <Link className="author"
                    to={`/${comment.authorSlug}`}>{comment.author}</Link>&nbsp;
              <span>{comment.comment}</span>
            </div>

            <span className="info">{timestampString(comment.timestamp)}</span>
          </StackComponent>
        </InlineComponent>
    );
  }

}

export default Comment;