/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import React, { PureComponent } from 'react';

class Article extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  incrementCounter = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleClick() {
    const { article, onButtonClick } = this.props;

    onButtonClick(article.id);
  }

  render() {
    const { article, isOpen } = this.props;
    const style = { width: '50%' };
    const body = isOpen && <section className="card-text">{article.text}</section>;
    return (
      <div className="card mx-auto" style={style}>
        <div className="card-header">
          <h2 onClick={this.incrementCounter}>
            {article.title}
            clicked
            {this.state.count}
            <button
              type="button"
              onClick={this.handleClick}
              className="btn btn-primary btn-lg float-right"
            >
              {isOpen ? 'close' : 'open'}
            </button>
          </h2>
        </div>
        <div className="card-body">
          <h6 className="card-subtitle text-muted">
            creation date:
            {new Date(article.date).toDateString()}
          </h6>
          {body}
        </div>
      </div>
    );
  }
}

export default Article;
