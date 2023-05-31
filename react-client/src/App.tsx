import "./App.css";
import characters from "../assets/images/characters";
import logo from "../assets/images/logo.svg";
import React from "react";

type AppState = { 
  images: string[], 
  colors: string[], 
  currentImg: number,
  currentColor: number,
};

class App extends React.Component<{}, AppState> {
  
  interval: number = 0;

  constructor(props: {} | Readonly<{}>) {
    super(props);

    const images = [characters.a, characters.b, characters.c, characters.d];
    const colors = ['pink', 'blue', 'yellow', 'darkgreen'];

    this.state = {
      images,
      colors,
      currentImg: 0,
      currentColor: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.changeImage();
      this.changeBackgroundColor();
    }, 2000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  changeBackgroundColor() {
    let newCurrentColor = 0;

    const { colors, currentColor } = this.state;
    const noOfColors = colors.length;

    if(currentColor !== noOfColors - 1) {
      newCurrentColor = currentColor + 1;
    }

    this.setState({ currentColor: newCurrentColor})
  }

  changeImage() {
    let newCurrentImg = 0;
    const { images, currentImg } = this.state;
    const noOfImages = images.length;

    if (currentImg !== noOfImages - 1) {
      newCurrentImg = currentImg + 1;
    }

    this.setState({currentImg: newCurrentImg});
  }

  render() {
    const { images, colors, currentImg, currentColor } = this.state;

    return (
      <div className="App">
        <div className="container">
          <span className="heading">Citation et Anniversaires</span>
          <span className="heading">{new Date().toLocaleString("fr-FR", { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</span>
        </div>
        <div className="grid">
          <div className="grid-col" style={{ backgroundColor: colors[currentColor] }}>
            <img className="dynamicImage rotate" src={logo}></img>
            <h1 id="name">Max Richet</h1>
          </div>
          <div className="grid-col">
            <div className="boxx">
              <p className="box">
                I've missed more than 9,000 shots in my career. I've lost almost 300 games. Twenty-six times I've been trusted to take the game-winning shot and missed.
              </p>
            </div>
            <img className='dynamicImage flex-half' src={images[currentImg]} />
          </div>
        </div>

      </div>
    );
  }

  
}

export default App;
