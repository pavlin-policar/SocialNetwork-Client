import './CreateComment.scss';

import React from 'react';
import InlineForm from '../common/InlineForm.react';

class CreateComment extends React.Component {

  displayName = "CreateComment";

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="post-social">
        <InlineForm action="">
          <img alt="" src="http://placehold.it/40x40"/>
          <textarea placeholder="Leave a comment" rows="1"></textarea>
          <button type="submit">Post</button>
        </InlineForm>
      </section>
    );
  }

}

export default CreateComment;