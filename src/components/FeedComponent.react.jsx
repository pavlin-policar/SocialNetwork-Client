import React from 'react';
import CreatePost from './posts/CreatePost.react';
import PostsContainer from './posts/PostsContainer.react';

class FeedComponent extends React.Component {

  displayName = "WrapperFeed";

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper-feed">
        <CreatePost />
        <PostsContainer />
      </div>
    );
  }

}

export default FeedComponent;