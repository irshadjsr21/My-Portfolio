import React, { Component } from "react"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import styles from "../styles/carousel.module.scss"
import { PropTypes } from "prop-types"

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
      itemStyle: {
        transform: `translateX(${0}%)`,
      },
    }
  }

  nextItem = () => {
    const index = this.state.activeIndex + 1
    if (index >= this.props.items.length) {
      this.changeIndex(0)
    } else {
      this.changeIndex(index)
    }
  }

  previousItem = () => {
    const index = this.state.activeIndex - 1
    if (index < 0) {
      this.changeIndex(this.props.items.length - 1)
    } else {
      this.changeIndex(index)
    }
  }

  changeIndex = index => {
    this.setState({
      activeIndex: index,
      itemStyle: {
        transform: `translateX(${index * -100}%)`,
      },
    })
  }

  render() {
    return (
      <div
        className={styles.container}
        style={{ backgroundColor: this.props.backgroundColor }}
      >
        <div style={this.state.itemStyle} className={styles.itemList}>
          {this.props.items.map((item, i) => {
            const clas =
              i === this.state.activeIndex
                ? `${styles.item} ${this.props.animateIn}`
                : `${styles.item} ${this.props.animateOut}`
            return (
              <div key={i} className={clas}>
                {this.props.render(item)}
              </div>
            )
          })}
        </div>
        {this.props.showBubbles && (
          <div className={styles.bubbleContainer}>
            <div className={styles.bubbleList}>
              {this.props.items.map((item, i) => {
                const clas =
                  this.state.activeIndex === i
                    ? `${styles.bubble} ${styles.active}  clickable`
                    : styles.bubble + " clickable"
                return (
                  <div
                    key={i}
                    onClick={() => this.changeIndex(i)}
                    className={clas}
                  />
                )
              })}
            </div>
          </div>
        )}
        {this.props.showArrows && (
          <React.Fragment>
            <div
              className={`${styles.arrow} ${styles.leftArrow} clickable`}
              onClick={this.previousItem}
            >
              <FaArrowLeft />
            </div>
            <div
              className={`${styles.arrow} ${styles.rightArrow} clickable`}
              onClick={this.nextItem}
            >
              <FaArrowRight />
            </div>
          </React.Fragment>
        )}
      </div>
    )
  }
}

Carousel.propTypes = {
  items: PropTypes.array.isRequired,
  render: PropTypes.func.isRequired,
  showBubbles: PropTypes.bool,
  showArrows: PropTypes.bool,
  backgroundColor: PropTypes.string,
  animateIn: PropTypes.string,
  animateOut: PropTypes.string,
}

Carousel.defaultProps = {
  showBubbles: true,
  showArrows: true,
  backgroundColor: "#fff",
  animateIn: styles.fadeInBlock,
  animateOut: styles.fadeOutBlock,
}

export default Carousel
