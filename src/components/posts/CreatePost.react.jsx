import './CreatePost.scss';

import React from 'react';
import InlineForm from '../common/InlineForm.react';
import InlineComponent from '../common/InlineComponent.react';
import StackComponent from '../common/StackComponent.react';

class CreatePost extends React.Component {

  displayName = "CreatePost";

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <section className="create-post">
          <InlineForm action="">
            <img alt="" src="http://placehold.it/56x56"/>
            <StackComponent>
              <InlineComponent className="create-post-form">
                <textarea placeholder="Share with the world"></textarea>
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