import React, { Component } from "react"
import styles from "../styles/home.module.scss"
import illustration from "../images/onboarding.svg"
import { getData } from "../services/home"
import { setInterval, clearInterval, setTimeout } from "timers"

export default function Home() {
  const { textContents, anchor } = getData()
  return <RenderHome textContents={textContents} anchor={anchor} />
}

class RenderHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headerText1: "",
      headerText2: "",
      introText: "",
      interval: {
        headerText1: null,
        headerText2: null,
        introText: null,
      },
      showCursor: {
        headerText1: false,
        headerText2: false,
        introText: false,
      },
      animateIllustration: false,
    }
    this.typeWriterObject = [
      {
        name: "headerText1",
        interval: 200,
      },
      {
        name: "headerText2",
        interval: 100,
        delay: 200,
      },
      {
        name: "introText",
        interval: 50,
        delay: 500,
      },
    ]
    this.currentWriter = 0
  }

  componentDidMount() {
    this.startTimer()
  }

  startTimer = () => {
    if (this.currentWriter >= this.typeWriterObject.length) {
      this.setState({
        animateIllustration: true,
        showCursor: {
          introText: true,
        },
      })
      return
    }

    const dataObj = this.typeWriterObject[this.currentWriter]
    const delay = dataObj.delay || 0
    const obj = this
    setTimeout(() => {
      obj.setState({
        showCursor: {
          [dataObj.name]: true,
        },
      })
      const interval = setInterval(
        () => obj.addWords(dataObj.name),
        dataObj.interval
      )
      obj.setState({
        interval: {
          [dataObj.name]: interval,
        },
      })
      obj.currentWriter++
    }, delay)
  }

  addWords(text) {
    if (this.state[text].length >= this.props.textContents[text].length) {
      clearInterval(this.state.interval[text])
      this.setState({
        interval: {
          [text]: null,
        },
        showCursor: {
          [text]: false,
        },
      })
      this.startTimer()
    } else {
      const txt = this.props.textContents[text].slice(
        0,
        this.state[text].length + 1
      )
      this.setState({
        [text]: txt,
      })
    }
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
                {this.state.headerText1}
                {this.state.showCursor.headerText1 && this.getCursor()}
              </h2>
              <h1 className={styles.name}>
                {this.state.headerText2}
                {this.state.showCursor.headerText2 && this.getCursor()}
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
