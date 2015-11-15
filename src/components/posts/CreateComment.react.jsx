import React from 'react';

class CreateComment extends React.Component {

  displayName = "CreateComment";

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="post-social">
        <form action="" className="inline-form">
          <img alt="" src="http://placehold.it/40x40"/>
          <textarea placeholder="Leave a comment" rows="1"></textarea>
          <button type="submit">Post</button>
        </form>
      </section>
    );
  }

}

export default CreateComment;