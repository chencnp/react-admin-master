import React from 'react'
import {Card, Button,BackTop} from 'antd'
import Shuffle from 'shufflejs'
import 'animate.css'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/index'
import TypingCard from '../../../components/TypingCard'

const animations = [
  {
    groups:['Attention Seekers'],
    list:['bounce','flash','pulse','rubberBand','shake','swing','tada','wobble','jello']
  },
  {
    groups:['Bouncing Entrances','Entrances'],
    list:['bounceIn','bounceInDown','bounceInLeft','bounceInRight','bounceInUp']
  },
  {
    groups:['Bouncing Exits','Exits'],
    list:['bounceOut','bounceOutDown','bounceOutLeft','bounceOutRight','bounceOutUp']
  },
  {
    groups:['Fading Entrances','Entrances'],
    list:['fadeIn','fadeInDown','fadeInDownBig','fadeInLeft','fadeInLeftBig','fadeInRight','fadeInRightBig','fadeInUp','fadeInUpBig']
  },
  {
    groups:['Fading Exits','Exits'],
    list:['fadeOut','fadeOutDown','fadeOutDownBig','fadeOutLeft','fadeOutLeftBig','fadeOutRight','fadeOutRightBig','fadeOutUp','fadeOutUpBig']
  },
  {
    groups:['Flippers'],
    list:['flip','flipInX','flipInY','flipOutX','flipOutY']
  },
  {
    groups:['Lightspeed'],
    list:['lightSpeedIn','lightSpeedOut']
  },
  {
    groups:['Rotating Entrances','Entrances'],
    list:['rotateIn','rotateInDownLeft','rotateInDownRight','rotateInUpLeft','rotateInUpRight']
  },
  {
    groups:['Rotating Exits','Exits'],
    list:['rotateOut','rotateOutDownLeft','rotateOutDownRight','rotateOutUpLeft','rotateOutUpRight']
  },
  {
    groups:['Sliding Entrances','Entrances'],
    list:['slideInUp','slideInDown','slideInLeft','slideInRight']
  },
  {
    groups:['Sliding Exits','Exits'],
    list:['slideOutUp','slideOutDown','slideOutLeft','slideOutRight']
  },
  {
    groups:['Zoom Entrances','Entrances'],
    list:['zoomIn','zoomInDown','zoomInLeft','zoomInRight','zoomInUp']
  },
  {
    groups:['Zoom Exits','Exits'],
    list:['zoomOut','zoomOutDown','zoomOutLeft','zoomOutRight','zoomOutUp']
  },
  {
    groups:['Specials'],
    list:['hinge','rollIn','rollOut','jackInTheBox']
  }

]

function getGroups(arr){
  return arr.map(item=>{
    return item.replace(/\s/g,'')
  })
}

class AnimationDemo extends React.Component{
  componentDidMount(){
    this.shuffle = new Shuffle(this.shuffleDemo, {
      itemSelector: '.shuffle-item',
      sizer: this.sizer,
    });
  }
  componentDidUpdate() {
    this.shuffle.resetItems();
  }
  componentWillUnmount() {
    this.shuffle.destroy();
    this.shuffle = null;
  }
  render(){
    return (
      <div>
        <CustomBreadcrumb arr={['??????','??????']}/>
        <TypingCard source='????????????????????????????????????????????????????????????????????????animation.css??????shufflejs???'/>
        <Card bordered={false}>
          <p>
            <Button type='primary' style={{margin:'5px 10px'}} onClick={()=>this.shuffle.filter()}>All</Button>
            <Button type='primary' style={{margin:'5px 10px'}} onClick={()=>this.shuffle.filter('Entrances')}>Entrances</Button>
            <Button type='primary' style={{margin:'5px 10px'}} onClick={()=>this.shuffle.filter('Exits')}>Exits</Button><br/>
            {
              animations.map(item=>(
                <Button
                  key={item.groups}
                  onClick={()=>this.shuffle.filter(item.groups[0].replace(/\s/g,''))}
                  style={{margin:'5px 10px'}}>{item.groups}
                </Button>
                ))
            }
          </p>
        </Card>
        <div style={styles.box}>
          <div ref={(div)=>this.shuffleDemo=div}>
            {
              //??????????????????????????????????????????????????????????????????????????????????????????????????????????????????h3?????????????????????????????????h3???????????????????????????h3???????????????onMouseLeave??????
              animations.map(item=>{
                return item.list.map(i=>{
                  return <div
                    className='shuffle-item'
                    style={styles.item}
                    onMouseEnter={(e)=>this[i].classList.add(i,'infinite')}
                    onMouseLeave={(e)=>this[i].classList.remove(i,'infinite')}
                    data-groups={JSON.stringify(getGroups(item.groups))}
                    key={i}>
                    <h3 style={styles.title}
                        className='animated'
                        ref={(el)=>this[i]=el}
                    >{i}</h3>
                  </div>
                })
              })
            }
            {/*?????????div?????????????????????*/}
            <div style={{width:'8.33333%'}}  ref={(div)=>this.sizer = div}/>
          </div>
        </div>
        <BackTop visibilityHeight={200} style={{right: 50}}/>
      </div>
    )
  }
}

const styles = {
  item:{
    width:'22%',
    marginTop:16,
    fontWeight:500,
    border:'1px solid #d9d9d9'
  },
  box:{
    minHeight:500,
    padding: '10px 32px',
  },
  title:{
    backgroundColor:'#fff',
    padding:40,
    textAlign:'center',
    fontSize:14,
    margin:0
  }
}

export default AnimationDemo