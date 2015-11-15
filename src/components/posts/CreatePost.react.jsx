import React from 'react';

class CreatePost extends React.Component {

  displayName = "CreatePost";

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="container create-post">
        <form action="" className="inline-form">
          <img alt="" src="http://placehold.it/56x56" />
            <div className="block-component">
              <div className="group">
                <textarea placeholder="Share with the world" rows="1"></textarea>
                <button type="submit">Share</button>
              </div>
              <div className="group options">
                <a href="">Share a photo</a>
                <select id="privacy" name="privacy">
                  <option value="">Public</option>
                  <option value="">Friends only</option>
                  <option value="">Family only</option>
                  <option value="">Only me</option>
                </select>
              </div>
            </div>
          </form>
        </section>
    );
  }

}

export default CreatePost;