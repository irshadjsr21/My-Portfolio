import React, { Component } from "react"
import styles from "../styles/home.module.scss"
import illustration from "../images/onboarding.svg"
import { getData } from "../services/home"
import { setTimeout } from "timers"

export default function Home() {
  const { textContents, anchor } = getData()
  return <RenderHome textContents={textContents} anchor={anchor} />
}

class RenderHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      introText: "",
      showCursor: {
        headerText1: false,
        headerText2: false,
        introText: false,
      },
      animateIllustration: false,
    }
    this.typeWriterObject = [
      {
        name: "introText",
        interval: 25,
        spaceInterval: 150,
        delay: 500,
      },
    ]
    this.currentWriter = 0
  }

  componentDidMount() {
    this.startTypeWriter()
  }

  startTypeWriter = () => {
    const dataObj = this.typeWriterObject[this.currentWriter]
    const done = () => {
      if (this.currentWriter >= this.typeWriterObject.length) {
        this.setState({
          animateIllustration: true,
          showCursor: {
            introText: true,
          },
        })
        return
      }
      this.startTypeWriter()
    }
    this.startTypingSection(dataObj, done)
    this.currentWriter++
  }

  startTypingSection = (dataObj, done) => {
    const delay = dataObj.delay || 0
    const obj = this
    setTimeout(() => {
      obj.setState({
        showCursor: {
          [dataObj.name]: true,
        },
      })
      const doneAddLetter = () => {
        if (
          this.state[dataObj.name].length >=
          this.props.textContents[dataObj.name].length
        ) {
          done()
          return
        }
        this.addLetter(dataObj, doneAddLetter)
      }
      obj.addLetter(dataObj, doneAddLetter)
    }, delay)
  }

  addLetter(dataObj, done) {
    const obj = this
    const delay =
      obj.state[dataObj.name].endsWith(" ") && dataObj.spaceInterval
        ? dataObj.spaceInterval
        : dataObj.interval
    setTimeout(() => {
      const txt = obj.props.textContents[dataObj.name].slice(
        0,
        obj.state[dataObj.name].length + 1
      )
      obj.setState({
        [dataObj.name]: txt,
      })
      done()
    }, delay)
  }

  getCursor = () => {
    return <span className={styles.cursor}>|</span>
  }

  render() {
    return (
      <section className={styles.mainContainer} id={this.props.anchor}>
        <div className={styles.mainContent}>
          <div className={styles.textContainer}>
            <div className={styles.greeting + " font-serif"}>
              <h2 className={styles.hi}>
                {this.props.textContents.headerText1}
              </h2>
              <h1 className={styles.name}>
                {this.props.textContents.headerText2}
              </h1>
            </div>
            <div className={styles.introText}>
              {this.state.introText}
              {this.state.showCursor.introText && this.getCursor()}
            </div>
          </div>
          <div
            className={
              this.state.animateIllustration
                ? `${styles.illustration} ${styles.animateIllustration}`
                : styles.illustration
            }
          >
            <img src={illustration} alt="Onboarding illustration" />
          </div>
        </div>
      </section>
    )
  }
}
