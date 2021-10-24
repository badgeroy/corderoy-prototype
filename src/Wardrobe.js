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
      traits: libmoji.randTraits(libmoji.getTraits(libmoji.genders[0][0], libmoji.styles[0][0])),
      // traits: libmoji.getTraits(this.state.gender[0], this.state.style[0]),
      previewLink: undefined
    };
    this.shuffle = this.shuffle.bind(this);
    this.changeGender = this.changeGender.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
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
    this.setState({ previewLink: link });

    console.log(traits.length)
    for (var i = 0; i < traits.length; i++) {
      console.log(traits[i][0])
    }
  }

  changeGender() {
    if (this.state.gender === libmoji.genders[0]) {
      this.setState({ gender: libmoji.genders[1] });
    }
    else {
      this.setState({ gender: libmoji.genders[0] });
    }
    console.log(this.state.gender)
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