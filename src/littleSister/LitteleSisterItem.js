import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LittleSisterItem extends Component {

	// 生命周期-构造函数-首先执行
	constructor (props) {
		// 🚫  还不能使用 `this`
		// 这里有关于为什么使用 super 的知识点 https://overreacted.io/zh-hans/why-do-we-write-super-props/
		// super 指的是父类（即超类）的构造函数
		// 在调用父类的构造函数之前，你是不能在 constructor 中使用 this 关键字的。JavaScript 不允许这个行为。
		super(props)
		// ✅  现在可以了
		this.delInputValue = this.delInputValue.bind(this)
	}

	// componentWillReceiveProps () {
	// 	console.log('child-componentWillReceiveProps----更新到 prop 值')
	// }

	// componentWillUnmount () {
	// 	console.log('child-componentWillUnmount----组件将要被删除时')
	// }

	 // 解决性能问题
	 // 就是指明什么时候component（组件）需要进行更新。
	 // 判断即将更新后的值是否与原有的数据相等，相等的话 即不更新，不相等的就更新
	 shouldComponentUpdate (nextProps, nextState) {
			if (nextProps.content !== this.props.content) {
				return true
			} else {
				return false
			}
			// return nextProps.content !== this.props.content
			// console.log('shouldComponentUpdate----组件更新之前执行')
  	} 


	render() { 
		return (
			// dangerouslySetInnerHTML={{__html:item}}
			<li
				className="item-list"
				onClick={this.delInputValue.bind(this)}
			>
				{this.props.waiter} - {this.props.content}
			</li>
		)
	}

	// 绑定方法
	delInputValue () {
		this.props.delInputValue(this.props.index)
	}

}
 /*
	==== prop 校验 ====
	你可以在任何 PropTypes 属性后面加上 `isRequired` ，确保这个 prop 没有被提供时，会打印警告信息。

  ==一个对象可以是几种类型中的任意一个类型==
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Message)
	]),

	== 任意的数据类型  any == 

	== 指定 props 的默认值：==
	Greeting.defaultProps = {
		name: 'Stranger'
	};
	 */
	LittleSisterItem.propTypes = {
		waiter: PropTypes.string.isRequired,
		content: PropTypes.string,
		index: PropTypes.number,
		delInputValue: PropTypes.func
	}

	// 默认值
	LittleSisterItem.defaultProps = {
		waiter: 'LeeGeing'
	}
export default LittleSisterItem