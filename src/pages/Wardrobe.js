import libmoji from 'libmoji';
import '../styles/Wardrobe.css';
import React from "react";
import {Button} from "reactstrap";
import leftArrow from "../images/left-arrow-icon.svg";
import rightArrow from "../images/right-arrow-icon.svg";
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
      brand: libmoji.getBrands(libmoji.genders[0][0]),
      outfit: libmoji.getOutfits(libmoji.getBrands(libmoji.genders[0][0])),
      //outfit: libmoji.randOutfit(libmoji.getOutfits(libmoji.randBrand(libmoji.getBrands(libmoji.genders[0][0])))),
      previewLink: undefined
    };
    this.shuffle = this.shuffle.bind(this);
    this.changeGender = this.changeGender.bind(this);
    this.changeToMale = this.changeToMale.bind(this);
    this.changeToFemale = this.changeToFemale.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
    this.incrementTrait = this.incrementTrait.bind(this);
    this.decrementTrait = this.decrementTrait.bind(this);
    this.incrementOutfit = this.incrementOutfit.bind(this);
    this.decrementOutfit = this.decrementOutfit.bind(this);
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

  changeToMale() {
    this.setState({gender: libmoji.genders[0]});
    this.shuffle();
  }

  changeToFemale() {
    this.setState({gender: libmoji.genders[1]});
    this.shuffle();
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

  incrementOutfit() {
    const newOutfit = this.state.outfit + 1
    this.setState({ outfit: newOutfit})
    const link = libmoji.buildPreviewUrl(this.state.pose, 3, this.state.gender[1], this.state.style[1], 0, this.state.trait, this.state.outfit);
    this.setState({ previewLink: link });
  }

  decrementOutfit() {
    const newOutfit = this.state.outfit - 1
    this.setState({ outfit: newOutfit})
    const link = libmoji.buildPreviewUrl(this.state.pose, 3, this.state.gender[1], this.state.style[1], 0, this.state.trait, this.state.outfit);
    this.setState({ previewLink: link });

  }

  render() {
    return (
      <div className="Wardrobe">
        <div className="preview-window">
          <img className="preview-bitmoji" src={this.state.previewLink} alt="bitmoji" />
        </div>
        <div className="preview-sidebar">
          <div className="preview-sidebar-item" id="gender">
            <div className="preview-sidebar-item-title">Gender</div>
            <hr className="preview-sidebar-item-divider"/>
            <div className="preview-sidebar-item-buttons">
              <Button variant="primary" onClick={this.changeToMale} className="btn male-btn">Male</Button>
              <Button variant="primary" onClick={this.changeToFemale} className="btn female-btn">Female</Button>
            </div>
          </div>
          <div className="preview-sidebar-item" id="traits">
            <div className="preview-sidebar-item-title">Traits</div>
            <hr className="preview-sidebar-item-divider"/>
            <div className="preview-sidebar-item-buttons">
              <Button variant="primary" onClick={this.incrementTrait} className="btn prev-btn">
                <img src={leftArrow} alt="prev"/>
              </Button>
              <Button variant="primary" onClick={this.decrementTrait} className="btn next-btn">
                <img src={rightArrow} alt="next"/>
              </Button>
            </div>
          </div>
          <div className="preview-sidebar-item" id="outfits">
            <div className="preview-sidebar-item-title">Outfits</div>
            <hr className="preview-sidebar-item-divider"/>
            <div className="preview-sidebar-item-buttons">
              <Button variant="primary" onClick={this.changeStyle} className="btn style-btn">Style</Button>
              <Button variant="primary" onClick={this.incrementOutfit} className="btn prev-btn">
                <img src={leftArrow} alt="prev"/>
              </Button>
              <Button variant="primary" onClick={this.decrementOutfit} className="btn next-btn">
                <img src={rightArrow} alt="next"/>
              </Button>
            </div>
          </div>
          <div className="preview-sidebar-item" id="share">
            <div className="preview-sidebar-item-title">Share</div>
            <hr className="preview-sidebar-item-divider"/>
            <div className="preview-sidebar-item-buttons">
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
        </div>
      </div>
    );
  }
}

export default Wardrobe;