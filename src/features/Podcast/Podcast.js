import React from "react";

class Podcast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      podcast: {
        title: null,
        description: null,
        numberOfEpisodes: null
      }
    };
    this.goBack = this.goBack.bind(this); // i think you are missing this
  }

  componentDidMount() {
    const { title, description, numberOfEpisodes } = this.props.location.state;

    this.setState(() => ({
      podcast: {
        title,
        description,
        numberOfEpisodes
      }
    }));
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    const { podcast } = this.state;
    return (
      <div className="card">
        <div className="card-content">
          <h1>{podcast.title}</h1>
          <h2>Description</h2>
          <article>{podcast.description}</article>
          <span>
            <strong> Number of episodes: </strong>
            {podcast.numberOfEpisodes}
          </span>
        </div>
        <div className="card-footer">
          <button className="button" onClick={this.goBack}>
            Go Back
          </button>
        </div>
      </div>
    );
  }
}
export default Podcast;
