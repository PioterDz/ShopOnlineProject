import React from 'react';

class NotFoundPage extends React.Component {

  goBack = () => {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="ErrorPage">
        <div className="Text404">
          <h1>404! Ups, coś poszło nie tak.</h1>
          <button className="btn btn-outline-dark btn-lg" onClick={this.goBack}>Cofnij</button>
        </div>
      </div>
    );
  }
}

  
export default NotFoundPage;