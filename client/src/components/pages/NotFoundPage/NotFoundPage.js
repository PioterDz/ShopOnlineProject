import React from 'react';
import errorImage from '../../../data/images/error404.png';
import "./NotFoundPage.scss";

class NotFoundPage extends React.Component {

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="ErrorPage">
        <img src={errorImage} alt="404"/>
        <h1>Ups, coś poszło nie tak.</h1>
        <button className="btn-success" onClick={this.goBack}>Cofnij</button>
      </div>
    );
  }
}

  
export default NotFoundPage;