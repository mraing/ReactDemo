import React, {Component, Fragment} from 'react'
import LittleSisterItem from './LitteleSisterItem'
import Boss from './Boss'
import axios from 'axios'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import './style.css'

class LittleSister extends Component {

  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInput = this.handleInput.bind(this)
    this.inputChange = this.inputChange.bind(this)
  }

  // 在挂载完成之后调用 axios
  componentDidMount () {
    axios.get('https://www.easy-mock.com/mock/5d4a4b9ea644025f212848a2/reactd-emo/react-demo-01')
    .then((res) => {
      console.log('数据获取成功')
      console.log(JSON.stringify(res.data))
      // 将请求的数据放入 list 中
      this.setState({
        list: res.data.data
      })
    })
    .catch((err) => {
      console.log('数据获取失败')
    })
  }

  /*
  === 生命周期 ===
  componentWillMount () {
    console.log('componentWillMount----组件将要挂载到页面的时刻')
  }

  componentDidMount () {
    console.log('componentWillMount----组件挂载完成的时刻')
  }

  shouldComponentUpdate () {
    console.log('shouldComponentUpdate----组件更新之前执行')
    return true
  }

  componentWillUpdate () {
    console.log('componentWillUpdate----组件更新之后执行')
  }

  componentDidUpdate () {
    console.log('componentDidUpdate----组件更新全部完成之后再执行')
  }
 */

	render () {
    // console.log('render----组件挂载中')
		return (
      // 根目录必须只能有一个 div标签，或者用Fragment代替 div 
			<Fragment>
				<div>
          {/* 
            绑定数据: this.state.inputValue 
            绑定方法: this.inputChange
          */}
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.inputChange}
            ref={(input) => {this.input=input}}
          />
          <button onClick={this.handleInput}>Server</button>
        </div>
        <ul ref={(ul) => {this.ul=ul}}>
          <TransitionGroup>
            {
              this.state.list.map((item, index) => {
                return (
                  <CSSTransition
                    timeout={1000}
                    classNames="boss-text"
                    unmountOnExit
                    appear={true}
                    key={item+index}
                  >
                  <LittleSisterItem
                    key={index+item}
                    index={index}
                    content={item}
                    delInputValue={this.delInputValue.bind(this)}
                  />
                  </CSSTransition>
                ) 
              })
            }
          </TransitionGroup>
        </ul>
        <Boss/>
      </Fragment>
		)
  }
  
  // 数据更新方法
  inputChange (e) {
    this.setState({
      // inputValue: e.target.value
      inputValue: this.input.value
    })
  }

  // 保存数据
  handleInput (e) {
    this.setState({
      // ES6扩展运算符
      list: [
        ...this.state.list,
        this.state.inputValue
      ],
      inputValue: ''
    },() => {
      // console.log(this.ul.querySelectorAll('li').length)
    })

    // 虚拟 DOM 是异步的操作，所以打印出来的数量并不等于真是的 DOM 数量
    // console.log(this.ul.querySelectorAll('li').length)
  }

  // 删除数据
  delInputValue (index) {
    // 不建议直接操作 state 中的数据，用变量存一下处理好了再传过去，提高性能
    let handleList = this.state.list
    handleList.splice(index, 1)
    this.setState({
      list: handleList
    })
  }
}

export default LittleSister