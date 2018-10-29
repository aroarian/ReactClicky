import React from "react";
import "./App.css";
import images from "./images.json"

class App extends React.Component {
  state = {
    images: images,
    score: 0,
    topScore: 0
  };

  gameEnd = array => {
    for (let i = 0; i < array.length; i++) {
      array[i].clicked = false;
    }
  };

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  componentWillMount() {
    this.shuffleArray(images);
  }

  handleImgClick = id => {
    const image = this.state.images;
    const imageClicked = image.filter(image => image.id === id);

    

    if (imageClicked[0].clicked === true) {
      alert("Game Over!");
      this.gameEnd(images)
      this.shuffleArray(images);
      this.setState({images: this.state.images, score: 0});
     
    } 
    else {
      
      imageClicked[0].clicked = true;
      this.state.score = this.state.score + 1;
      this.shuffleArray(images);
      this.setState({images: this.state.images});
    };

    if (this.state.score >= this.state.topScore) {
      this.setState({topScore: this.state.score});
    };

    if (this.state.topScore === 12){
      alert("You Win!")
      this.setState({score: 0, topScore: 0});
    };

  };
  render() {
    const displayImages = this.state.images.map((eachItem, index) => (
      <img alt="click me!" onClick={() => this.handleImgClick(eachItem.id)} key={index} src={eachItem.photo} />
    ));

    return (
      <div className="App">
        <nav className="nav">
          <div className="scores">
            <h2 id="score">Score: {this.state.score}</h2>
            <h2 id="topscore">TopScore: {this.state.topScore}</h2>
          </div>
        </nav>
        <div className="images">{displayImages}</div>
      </div>
    );
  }
}

export default App;
