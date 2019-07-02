import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text , Input, Image ,Button} from '@tarojs/components'
import './search.scss'
import pic from '../../images/search_photo.png';

export default class Index extends Component {
    constructor() {
      super()
      this.state= {
        tel: '',
        code: '',
        vin: ''
      }
    }
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config = {
    navigationBarTitleText: '立即支付'
  }
  change =(e) => {
      let d = e.target.id;
      if(d ==='tel') {
          this.setState({
            tel: e.target.value
          })
      }else if (d=== 'code'){
        this.setState({
          code: e.target.value
        })
      }else{
        this.setState({
          vin: e.target.value
        })
      }

      // console.log(this.state.tel)
  }
  //点击确认支付按钮
  canPay = () => {
    if(this.state.tel == ''){
      Taro.showLoading({
        title: '手机号不能为空'
      })
      Taro.hideLoading()
    }
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    // const {tel} = 
    return (
      <View className='search'>
        <View className="pay-attention">为确保查询结果，请您仔细核对VIN码的正确</View>
        <View style="width: 90%;margin: 0 auto;background: #eee;border-radius: 8px;">
          <View className="form">
            <Text className="labe">手机号码</Text>
            <Input type="number" id="tel" placeholder="请输入手机号" onInput={this.change} maxLength="11" value={this.state.tel}></Input>
          </View>
          <View className="form">
            <Text className="labe">验证码</Text>
            <Input type="number" id="code" placeholder="请输入验证码" onInput={this.change} maxLength="4" value={this.state.code}></Input>
            <View className="getCode">获取验证码</View>
          </View>
          <View className="form">
            <Text className="labe">车辆VIN码<Text className="help-icon">?</Text></Text>
            <Input type="number" id="vin" placeholder="请输入VIN码" onInput={this.change} maxLength="17" value={this.state.vin}></Input>
            <View className="getVin"><Image src={pic} mode="widthFix" style="width:20px;margin-right:4px;"></Image><View>拍照识别</View></View>
          </View>
          <View className="form">
            <Text className="labe">查询价格</Text>
            <View style="margin-left: 20px">¥ 39</View>
          </View>
          <View className="form">
            <Text className="labe">优惠</Text>
            <View style="margin-left: 20px;color:#FF1F3B">¥ 39</View>
          </View>
          <View className="form">
            <Text className="labe">合计</Text>
            <View style="margin-left: 20px;font-weight:bold">¥ 39</View>
          </View>
        </View>
        <Button type="default" className="button" onClick={this.canPay}>确认支付</Button>
      </View>
    )
  }
}
