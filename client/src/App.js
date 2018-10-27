import React from 'react';
import './App.css';
import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';
import img5 from './images/5.png';
import img6 from './images/6.png';
import img7 from './images/7.png';
import img8 from './images/8.png';
import img9 from './images/9.png';
import img10 from './images/10.png';
import img11 from './images/11.png';
import img12 from './images/12.png';


let images = [
  {
    id: 1,
    photo: img1 ,
    clicked: false,

  },
  {
    id: 2,
    photo: img2,
    clicked: false,
    
  },
  {
    id: 3,
    photo: img3,
    clicked: false,
    
  },
  {
    id: 4,
    photo: img4,
    clicked: false,
    
  },
  {
    id: 5,
    photo: img5,
    clicked: false,
    
  },
  {
    id: 6,
    photo: img6,
    clicked: false,
    
  },
  {
    id: 7,
    photo: img7,
    clicked: false,
    
  },
  {
    id: 8,
    photo: img8,
    clicked: false,
    
  },
  {
    id: 9,
    photo: img9,
    clicked: false,
    
  },
  {
    id: 10,
    photo: img10,
    clicked: false,
    
  },
  {
    id: 11,
    photo: img11,
    clicked: false,
    
  },
  {
    id: 12,
    photo: img12,
    clicked: false,
    
  }
]

class App extends React.Component {
  state = {
    images: images
  }

shuffleArray = (array) =>{
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

componentWillMount() {
  this.shuffleArray(images);
}


  

  handleImgClick = (id) => {
    const image = this.state.images;
		const imageClicked = image.filter(image => image.id === id);
  
    if (imageClicked[0].clicked === true){
      alert("You have already clicked this")
      this.shuffleArray(images);
      this.forceUpdate();
}
      
      
    else {
      imageClicked[0].clicked = true;
      this.shuffleArray(images);
      this.forceUpdate();
      
    }
    console.log(images[index].clicked)

        
    //use id to select out of the array the one i clicked
    //update clicked property to true
    //functionality to determine if true or false. if true then you have clicked it twice. if false then update to true and imcrement your score.
  }
  render() {
    
    const displayImages = this.state.images.map((eachItem, index) =>
        <img alt="click me!" onClick={() => this.handleImgClick(eachItem.id)} key={index} src={eachItem.photo}></img>

    )
    
    return (
      <div className="App">
      <div className="images">
          {displayImages}
      </div>
        
      </div>
    );
  }
}

export default App;
