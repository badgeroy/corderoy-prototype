import libmoji from 'libmoji';
import './Wardrobe.css';
import React from "react";
import genderIcon from './gender-icon.svg';
import shuffleIcon from './shuffle-icon.svg';
import rightButton from './right-button.png';
import { FacebookShareButton, FacebookIcon } from "react-share";
import { TwitterShareButton, TwitterIcon } from "react-share";
import { RedditShareButton, RedditIcon } from "react-share";
import { WhatsappShareButton, WhatsappIcon } from "react-share";



class Wardrobe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: libmoji.genders[0],
      pose: libmoji.poses[2],
      style: libmoji.styles[0],
      trait: libmoji.randTraits(libmoji.getTraits(libmoji.genders[0][0], libmoji.styles[0][0])),
      outfit: libmoji.randOutfit(libmoji.getOutfits(libmoji.randBrand(libmoji.getBrands(libmoji.genders[0][0])))),
      previewLink: undefined
    };
    this.shuffle = this.shuffle.bind(this);
    this.changeGender = this.changeGender.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
    this.incrementTrait = this.incrementTrait.bind(this);
    this.decrementTrait = this.decrementTrait.bind(this);
  }

  componentDidMount() {
    this.shuffle();
  }

  shuffle() {
    const gender = this.state.gender
    const pose = this.state.pose
    const style = this.state.style
    const traits = libmoji.randTraits(libmoji.getTraits(gender[0], style[0]));
    const outfit = libmoji.randOutfit(libmoji.getOutfits(libmoji.randBrand(libmoji.getBrands(gender[0]))));
    const link = libmoji.buildPreviewUrl(pose, 3, gender[1], style[1], 0, traits, outfit);
    this.setState({ trait: traits});
    this.setState({ outfit: outfit})
    this.setState({ previewLink: link });
  }

  changeGender() {
    if (this.state.gender === libmoji.genders[0]) {
      this.setState({ gender: libmoji.genders[1] });
    }
    else {
      this.setState({ gender: libmoji.genders[0] });
    }
    this.shuffle()
  }

  changeStyle() {
    if (this.state.style === libmoji.styles[0]) {
      this.setState({ style: libmoji.styles[1] })
    }
    else if (this.state.style === libmoji.styles[1]) {
      this.setState({ style: libmoji.styles[2] })
    }
    else {
      this.setState({ style: libmoji.styles[0] })
    }
    console.log(this.state.style)
    this.shuffle()
  }

  incrementTrait() {
    const gender = this.state.gender[0]
    const style = this.state.style[0]
    const traitIndex = 0
    let currTraits = this.state.trait
    const traitValues = libmoji.getValues(libmoji.getTraits(gender, style)[traitIndex])

    let currTraitValueIndex = 0
    for (var i=0; i < traitValues.length; i++) {
      if (traitValues[i]['value'] === currTraits[traitIndex][1]) {
        currTraitValueIndex = i
        break
      }
    }

    if (currTraitValueIndex + 1 >= traitValues.length) {
      return;
    }

    const newTraitValue = traitValues[currTraitValueIndex + 1]['value']
    currTraits[traitIndex][1] = newTraitValue
    this.setState({ trait: currTraits});

    const link = libmoji.buildPreviewUrl(this.state.pose, 3, this.state.gender[1], this.state.style[1], 0, this.state.trait, this.state.outfit);
    this.setState({ previewLink: link });
  }

  decrementTrait() {
    const gender = this.state.gender[0]
    const style = this.state.style[0]
    const traitIndex = 0
    let currTraits = this.state.trait
    const traitValues = libmoji.getValues(libmoji.getTraits(gender, style)[traitIndex])

    let currTraitValueIndex = 0
    for (var i=0; i < traitValues.length; i++) {
      if (traitValues[i]['value'] === currTraits[traitIndex][1]) {
        currTraitValueIndex = i
        break
      }
    }

    if (currTraitValueIndex - 1 < 0) {
      return;
    }

    const newTraitValue = traitValues[currTraitValueIndex - 1]['value']
    currTraits[traitIndex][1] = newTraitValue
    this.setState({ trait: currTraits});

    const link = libmoji.buildPreviewUrl(this.state.pose, 3, this.state.gender[1], this.state.style[1], 0, this.state.trait, this.state.outfit);
    this.setState({ previewLink: link });
  }

  render() {
    return (
      <div className="Wardrobe">
        <div className="preview">
          <img className="renderer" src={this.state.previewLink} alt="bitmoji" />
          <button className="gender" onClick={this.gender}>
            <img className="btnIcons" src={genderIcon} alt="Gender" />
          </button>
          <button className="shuffler" onClick={this.shuffle}>
            <img className="btnIcons" src={shuffleIcon} alt="Shuffle" />
          </button>
          <button className="changeGender" onClick={this.changeGender}>
            <img className="btnIcons" src={rightButton} alt="changeGender" />
          </button>
          <button className="changeStyle" onClick={this.changeStyle}>
            <img className="btnIcons" src={rightButton} alt="changeStyle" />
          </button>
          <button className="incrementTrait" onClick={this.incrementTrait}>
            <img className="btnIcons" src={rightButton} alt="incrementTrait" />
          </button>
          <button className="decrementTrait" onClick={this.decrementTrait}>
            <img className="btnIcons" src={rightButton} alt="decrementTrait" />
          </button>

        </div>

        <div className="shareButtons">
          <FacebookShareButton
            url={"http://www.camperstribe.com"}
            quote={"CampersTribe - World is yours to explore"}
            hashtag="#camperstribe"
          >
            <FacebookIcon size={36} />
          </FacebookShareButton>

          <TwitterShareButton
            url={"http://www.camperstribe.com"}
            quote={"CampersTribe - World is yours to explore"}
            hashtag="#camperstribe"
          >
            <TwitterIcon size={36} />
          </TwitterShareButton>

          <RedditShareButton
            url={"http://www.camperstribe.com"}
            quote={"CampersTribe - World is yours to explore"}
            hashtag="#camperstribe"
          >
            <RedditIcon size={36} />
          </RedditShareButton>

          <WhatsappShareButton
            url={"http://www.camperstribe.com"}
            quote={"CampersTribe - World is yours to explore"}
            hashtag="#camperstribe"
          >
            <WhatsappIcon size={36} />
          </WhatsappShareButton>


        </div>
      </div>


    );
  }
}

export default Wardrobe;