import './Comment.scss';

import React from 'react';
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
          <img alt="" src={comment.thumbnail}/>

          <StackComponent>
            <div>
              <a className="author" href="">{comment.author}</a>&nbsp;
              <span>{comment.comment}</span>
            </div>

            <span className="info">{timestampString(comment.timestamp)}</span>
          </StackComponent>
        </InlineComponent>
    );
  }

}

export default Comment;