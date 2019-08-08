import React, { Component } from 'react'
import {CSSTransition} from 'react-transition-group'
import './style.css'

class Boss extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: true
    }
    this.handleGoKu = this.handleGoKu.bind(this)
  }
  render() { 
    return (
      <div>
        {/* 
          in: 由某个属性来控制
          timeout: 动画时间
          classNames: 区分 className, 这是动画 class 的前缀，在 style 需要使用到
        */}
        <CSSTransition
          in={this.state.isShow}
          timeout={2000}
          classNames="boss-text"
        >
          <div>Son Goku</div>
        </CSSTransition>
        <div><button onClick={this.handleGoKu}>Show Boss</button></div>
      </div>
    )
  }

  handleGoKu () {
    this.setState ({
      isShow: !this.state.isShow
    })
  }
}
 
export default Boss