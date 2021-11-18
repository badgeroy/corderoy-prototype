import "../styles/ScrollMenu.css"
import React from "react";

class ScrollMenu extends React.Component {
    constructor(props) {
        super(props);
        this.menuOnScroll = this.menuOnScroll.bind(this);
    }

    componentDidMount() {
        this.leftArrow.style.left = (this.leftArrow.clientWidth + this.rightArrow.clientWidth).toString() + "px";
        this.leftArrow.style.visibility = "hidden";
        this.rightArrow.style.left = this.menuContent.clientWidth.toString() + "px";
        this.rightArrow.style.visibility = this.menuContent.scrollWidth - this.menuContent.clientWidth > 0 ? "visible" : "hidden";
    }

    menuOnScroll(event) {
        const menu = event.target;
        const scroll = menu.scrollLeft;
        const overflowLeft = scroll > 0;
        const overflowRight = scroll < menu.scrollWidth - menu.clientWidth;
        this.leftArrow.style.visibility = overflowLeft ? "visible" : "hidden";
        this.rightArrow.style.visibility = overflowRight ? "visible" : "hidden";
    }

    render() {
        return (
            <div className={"ScrollMenu" + (this.props.className ? " " + this.props.className : "")}>
              <div className="arrow-container left-arrow" ref={e => this.leftArrow = e}>
                <div className="arrow-identifier">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="navigate_before_24px">
                      <path id="icon/image/navigate_before_24px" d="M15.705 7.41L14.295 6L8.29498 12L14.295 18L15.705 16.59L11.125 12L15.705 7.41Z" fill="black" fill-opacity="0.54"/>
                    </g>
                  </svg>
                </div>
                <div className="arrow-gradient"/>
              </div>
              <div className="arrow-container right-arrow" ref={e => this.rightArrow = e}>
                <div className="arrow-gradient"/>
                <div className="arrow-identifier">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="navigate_next_24px">
                      <path id="icon/image/navigate_next_24px" d="M9.70504 6L8.29504 7.41L12.875 12L8.29504 16.59L9.70504 18L15.705 12L9.70504 6Z" fill="black" fill-opacity="0.54"/>
                    </g>
                  </svg>
                </div>
              </div>
              <div className="menu-content"
                   style={{maxWidth: this.props.width}}
                   onScroll={this.menuOnScroll}
                   ref={e => this.menuContent = e}>
                {this.props.children}
              </div>
            </div>
        );
    }
}

export default ScrollMenu;