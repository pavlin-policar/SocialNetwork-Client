import './CreatePost.scss';

import React from 'react';
import InlineForm from '../common/InlineForm.react';
import InlineComponent from '../common/InlineComponent.react';
import StackComponent from '../common/StackComponent.react';
import AutoTextarea from '../forms/AutoTextarea.react';

class CreatePost extends React.Component {

  displayName = "CreatePost";

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <section className="padded create-post">
          <InlineForm action="">
            <img alt="" src="http://placehold.it/56x56"/>
            <StackComponent>
              <InlineComponent className="create-post-form">
                <AutoTextarea minRows={2}
                              placeholder="Leave a comment"
                              handleSubmit={this._onSubmit}
                              validation={this._validateComment}/>
              </InlineComponent>
              <InlineComponent className="create-post-options">
                <a href="">Share a photo</a>
                <select id="privacy" name="privacy">
                  <option value="">Public</option>
                  <option value="">Friends only</option>
                  <option value="">Family only</option>
                  <option value="">Only me</option>
                </select>
                <button type="submit">Share</button>
              </InlineComponent>
            </StackComponent>
          </InlineForm>
        </section>
    );
  }

}

export default CreatePost;