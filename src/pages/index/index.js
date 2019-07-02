import Taro, { Component, Config, BackgroundAudioManager } from '@tarojs/taro'
import { View, Text,Image } from '@tarojs/components'
import './index.scss'

import banner from '../../images/banner.png';
// import banner from './../../images/banner.png'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config = {
    navigationBarTitleText: '维保查询'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  search =() => {
    
    Taro.navigateTo({
      // url: '../search/search'
      url: '../search/search'
    })
  }
  makePhoneCall =() => {
    if(window){
       window.location.href = 'tel://400-000-1199'
      } else {
        Taro.makePhoneCall({
          phoneNumber: '400-000-1199'
        })
    }
  } 

  render () {
    return (
      <View className='index'>
        <View className='banner'>
          <Image src={banner} mode='widthFix' style='width:100%'></Image>
        </View>
        <View className='banner'>
          <Image src='https://app.s4s.cn/razio/maintenance_introduce_bg.png' mode='widthFix' style='width: 100%'/>
        </View>
        <View className='hint'>
          <View className='warn'>温馨提示：保养记录报告来源于第三方，报告会以短信告知，预计30分钟内收到报告。（非工作时段报告预计次日生成）</View>
        </View>
        <View className='call'>本服务由齐车大圣提供，客服电话：<Text className="tel" onClick={this.makePhoneCall}>400-000-1199</Text></View>
        <View className='search' onClick={this.search}>立即查询</View>
      </View>
    )
  }
}
