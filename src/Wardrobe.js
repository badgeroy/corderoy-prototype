import libmoji from 'libmoji';
import './Wardrobe.css';
import React from "react";
import genderIcon from './gender-icon.svg';
import shuffleIcon from './shuffle-icon.svg';

class Wardrobe extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      gender: libmoji.genders[1],
      previewLink: undefined
    };
    this.gender = this.gender.bind(this);
    this.shuffle = this.shuffle.bind(this);
  }

  componentDidMount() {
    this.shuffle();
  }

  gender() {
    // console.log("gender before: " + this.state.gender);
    // this.setState({gender: libmoji.genders[(this.state.gender[1] === 1) | 0]}, () => {
    //   console.log("gender after: " + this.state.gender);
    // });
    this.state.gender = libmoji.genders[(this.state.gender[1] === 1) | 0];
    this.shuffle();
  }

  shuffle() {
    const style = libmoji.styles[libmoji.randInt(3)];
    const traits = libmoji.randTraits(libmoji.getTraits(this.state.gender[0], style[0]));
    const outfit = libmoji.randOutfit(libmoji.getOutfits(libmoji.randBrand(libmoji.getBrands(this.state.gender[0]))));
    const link = libmoji.buildPreviewUrl("body", 3, this.state.gender[1], style[1], 0, traits, outfit);
    this.setState({previewLink: link});
  }

  render() {
    return (
        <div className="Wardrobe">
          <div className="preview">
            <img className="renderer" src={this.state.previewLink} alt="bitmoji"/>
            <button className="gender" onClick={this.gender}>
              <img className="btnIcons" src={genderIcon} alt="Gender"/>
            </button>
            <button className="shuffler" onClick={this.shuffle}>
              <img className="btnIcons" src={shuffleIcon} alt="Shuffle"/>
            </button>
          </div>
        </div>
    );
  }
}

export default Wardrobe;