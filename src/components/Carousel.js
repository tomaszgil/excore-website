import React, { Component } from "react";
import Siema from "siema";

class Carousel extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentSlide: 0
    };
  }

  componentDidMount() {
    this.slider = new Siema({
      selector: ".carousel-slider",
      duration: 400,
      easing: "ease-out",
      perPage: 1,
      startIndex: this.state.currentSlide,
      draggable: true,
      multipleDrag: true,
      threshold: 20,
      loop: true,
      onChange: () => {
        this.setState({
          currentSlide: this.slider.currentSlide
        })
      }
    });
  }

  render() {
    return (
      <div className="carousel">
        <div className="carousel-content">
          <button className="carousel-prev" onClick={() => this.slider.prev()} />
          <div className="carousel-slider">{this.props.children}</div>
          <button className="carousel-next" onClick={() => this.slider.next()} />
        </div>
        <ul className="carousel-indicators">
          {
            this.props.children.map((slide, index) => (
              <li key={index}>
                <button 
                  className={this.state.currentSlide === index ? "carousel-indicators-button is-active" : "carousel-indicators-button"} 
                  onClick={() => this.slider.goTo(index)} />
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Carousel;
