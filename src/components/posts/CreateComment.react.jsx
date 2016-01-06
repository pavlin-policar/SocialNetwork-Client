import './CreateComment.scss';

import React from 'react';
import InlineForm from '../common/InlineForm.react';
import AutoTextarea from '../forms/AutoTextarea.react';
import * as PostActionCreators from '../../actions/PostActionCreators';

class CreateComment extends React.Component {

  displayName = 'CreateComment';

  static propTypes = {
    postId: React.PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);

    this._onSubmit = this._onSubmit.bind(this);
    this._validateComment = this._validateComment.bind(this);
  }

  render() {
    return (
        <section className="post-social">
          <InlineForm action="">
            <img alt="" src="http://placehold.it/40x40"/>
            <AutoTextarea placeholder="Leave a comment"
                          handleSubmit={this._onSubmit}
                          validation={this._validateComment}/>
            <button type="submit">Post</button>
          </InlineForm>
        </section>
    );
  }

  _onSubmit(comment) {
    PostActionCreators.createComment({
      postId: this.props.postId,
      timeCreated: Date.now(),
      comment: comment
    });
  }

  _validateComment(comment) {
    return comment.match(/\w+/) !== null;
  }
}

export default CreateComment;