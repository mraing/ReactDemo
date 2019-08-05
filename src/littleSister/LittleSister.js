import React, {Component, Fragment} from 'react'
import LittleSisterItem from './LitteleSisterItem'
import './style.css'

class LittleSister extends Component {

  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['Shampoo', 'Footbath']
    }
  }

	render () {
		return (
      // 根目录必须只能有一个 div标签，或者用Fragment代替 div 
			<Fragment>
				<div>
          {/* 
            绑定数据: this.state.inputValue 
            绑定方法: this.inputChange
          */}
          <input type="text" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
          <button onClick={this.handleInput.bind(this)}>Server</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <LittleSisterItem
                  key={index+item}
                  content={item}
                />
              ) 
            })
          }
        </ul>
      </Fragment>
		)
  }
  
  // 数据方法
  inputChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  // 保存数据
  handleInput (e) {
    console.log(this.state.inputValue)
    this.setState({
      // ES6扩展运算符
      list: [
        ...this.state.list,
        this.state.inputValue
      ],
      inputValue: ''
    })
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