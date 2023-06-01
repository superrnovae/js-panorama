import "./App.css";
import characters from "../assets/images/characters";
import logo from "../assets/images/logo.svg";
import star from "../assets/images/star-thin.svg";
import React from "react";
import { TextAnniversaire } from "./types/anniversaire";
import data from "../assets/textsAnniversaire.json";

type AppState = {
  textsAnniversaire: TextAnniversaire[],
  images: string[], 
  colors: string[],
  currentText: number,
  currentImg: number,
  currentColor: number,
};

class App extends React.Component<{}, AppState> {
  
  interval: number = 0;

  constructor(props: {} | Readonly<{}>) {
    super(props);

    const images = [characters.a, characters.b, characters.c, characters.d];
    const colors = ['pink', 'blue', 'yellow', 'darkgreen'];
    const textsAnniversaire = data;

    this.state = {
      textsAnniversaire,
      images,
      colors,
      currentText: 0,
      currentImg: 0,
      currentColor: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.changeImage();
      this.changeBackgroundColor();
      this.changeTextAnniversaire();
    }, 3000);
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

  changeTextAnniversaire() {
    let newCurrentText = 0;

    const { textsAnniversaire, currentText } = this.state;
    const noOfTexts = textsAnniversaire.length;

    if (currentText !== noOfTexts - 1) {
      newCurrentText = currentText + 1;
    }

    this.setState({currentText: newCurrentText});

  }

  render() {
    const { textsAnniversaire, images, colors, currentText, currentImg, currentColor } = this.state;
    const color = colors[currentColor];
    const anniversaire = textsAnniversaire[currentText];

    return (
      <div className="App">
        <div className="container">
          <span className="heading">Citation et Anniversaires</span>
          <span className="heading">{new Date().toLocaleString("fr-FR", { weekday:"long", year:"numeric", month:"short", day:"numeric"})}</span>
        </div>
        <div className="grid">
          <div className="grid-col relative" style={{ backgroundColor: color }}>
            <img className="absolute star" id="first-star" src={star} />
            <img className="absolute star" id="second-star" src={star}  />
            <img className="absolute star" id="third-star" src={star}  />
            <img className="dynamicImage rotate logo" src={logo}></img>
            <h1 id="name">{anniversaire.nom}</h1>
          </div>
          <div className="grid-col">
            <div className="box">
              <p>
                { anniversaire.text }
              </p>
            </div>
            <div className="box">
              <img className='dynamicImage flex-half' src={images[currentImg]} />
            </div>
            <div className="flex justify-center">
              <div className="progressBar">
                {currentText + 1}
                <progress id="file" max={textsAnniversaire.length * 10} value={(currentText+1) * 10} />
                {textsAnniversaire.length}
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
0
export default App;
