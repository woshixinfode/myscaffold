import React from 'react';
import ReactSwipe from 'react-swipe'
export default class HomeSlider extends React.Component {
    constructor(){
        super()
        this.state = {index:0}
    }
  render(){
      let opts = {continuous: false,auto:3000,callback:(index)=>{
                this.setState({index})
          }}
    return <div className='home-swiper'>
        <ReactSwipe className="carousel" swipeOptions={opts}>
            {this.props.lists.map((item,index)=>(
                <div key={index}><a href={item.url}><img src={item.photoUrl} alt="photo"/></a></div>
            ))}
        </ReactSwipe>
        <div className="dots">
            {this.props.lists.map((item,index)=>(
                <span className={this.state.index === index?'active':''} key={index}></span>
            ))}
        </div>
    </div>
  }
}