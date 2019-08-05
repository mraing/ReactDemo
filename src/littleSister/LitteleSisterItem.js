import React, { Component } from 'react'

class LittleSisterItem extends Component {
	render() { 
		return (
			// dangerouslySetInnerHTML={{__html:item}}
			<li
				className="item-list"
				onClick={this.delInputValue}
			>
				{this.props.content}
			</li>
		)
	}

	// 绑定方法
	delInputValue () {
		console.log('1')
	}

}
 
export default LittleSisterItem