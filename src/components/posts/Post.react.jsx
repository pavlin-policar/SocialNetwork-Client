import './Post.scss';

import React from 'react';
import { Link } from 'react-router';
import CommentsContainer from './CommentsContainer.react';
import CreateComment from './CreateComment.react';
import { timestampString } from '../../utils/TimestampUtils';

import InlineComponent from '../common/InlineComponent.react';
import StackComponent from '../common/StackComponent.react';

class Post extends React.Component {

  displayName = 'Post';

  constructor(props) {
    super(props);
  }

  render() {
    const post = this.props.post;
    return (
        <article className="padded post">
          <InlineComponent className="post-title">
            <Link to={`/${post.authorSlug}`}>
              <img alt="" src={post.thumbnail}/>
            </Link>
            <StackComponent>
              <Link to={`/${post.authorSlug}`}>{post.author}</Link>
              <span className="info">
                {timestampString(post.timestamp)} in <a
                  href="">{post.location}</a>
              </span>
            </StackComponent>
          </InlineComponent>

          <section className="post-body">
            <span>{post.post}</span>
          </section>

          <CommentsContainer comments={post.comments}/>

          <CreateComment postId={post.postId}/>
        </article>
    );
  }

}

export default Post;