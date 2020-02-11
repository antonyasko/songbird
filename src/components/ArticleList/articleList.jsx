/* eslint-disable react/prop-types */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/jsx-no-bind */
import React, { PureComponent } from 'react';
import Article from '../Article';
// import './articleList.css';

export default class ArticleList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      openArticleId: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = openArticleId =>
    this.setState({
      openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId,
    });

  render() {
    const articleElements = this.props.articles.map(article => (
      <li key={article.id} className="article-list__li">
        <Article
          article={article}
          isOpen={this.state.openArticleId === article.id}
          onButtonClick={this.handleClick}
        />
      </li>
    ));
    return <ul>{articleElements}</ul>;
  }
}
