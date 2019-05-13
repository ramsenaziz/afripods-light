import React from "react";
import dateFormat from "dateformat";

class Episode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      episode: {
        title: null,
        description: null,
        numberOfEpisodes: null
      }
    };

    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    const {
      title,
      podcastTitle,
      description,
      duration,
      created
    } = this.props.location.state;

    this.setState(() => ({
      episode: {
        title,
        podcastTitle,
        description,
        duration,
        created
      }
    }));
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    const { episode } = this.state;
    return (
      <div className="card">
        <div className="card-content">
          <h1>{episode.title}</h1>
          <h2>{episode.podcastTitle}</h2>
          <article>{episode.description}</article>
          <span>
            <strong>Length: </strong>
            {Math.round(episode.duration / 60)} min
          </span>
          <span>
            <strong>Released: </strong>
            {dateFormat(episode.created, "dddd, mmmm dS, yyyy")}
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
export default Episode;
