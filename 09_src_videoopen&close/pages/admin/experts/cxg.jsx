import React, { Component } from 'react';
import {Outlet}from 'react-router-dom'
import cxg from '../../../assets/cxg.jpg'

export default class Cxg extends Component {
  render() {
    return (
    <div>
       <h1> 
                <img className='chu'  src={cxg} alt=''/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <h2>储晓刚 </h2>
                </h1>
                <h2>【个人简介】</h2>
                <p>
                江南大学、江苏大学、陕西大学、中国农业大学等硕博导师 。
                长期（30余年）从事食品质量安全检测技术、标准方法制修订和突发事件技术支撑研究工作，
                
                中国分析测试协会理事；中国仪器仪表学会分析仪器分会理事，第九届第十届理事会副理事长。
                </p>
                <h2>【详细介绍】</h2>
                <p>
                储晓刚，中国检验检疫科学研究院有害物质分析与代谢机理研究员。享受政府特殊津贴专家，总局优秀中青年科技工作者，国家中长期发展规划专家，科技部863专家， 科技部公共安全发展规划、卫生部食品安全专项、亚太地区公共安全特聘专家。
                </p>
                <p>
                中国仪器仪表学会、中国分析测试协会、中国质谱学会有机分会、中国色谱学会和中国分析毒理学会会员，卫生部食品卫生标准专业委员会委员，
                国家标准委5个标准化专业委员会委员。任中国农业大学、江南大学、四川大学、沈阳农大客座教授和研究生导师。自2004年以来，获得国家质检总局“科技兴检奖”一等奖4项、二等奖1项，省部级“科学技术进步奖”二等奖2项；
                以第一作者或通讯作者发表SCI文章17篇；获得发明专利2项，实用新型专利5项。积累了丰富的实验室样品处理技巧和检测方法开发经验。近十年发表论文（71篇，其中SCI文章23篇）；获得授权发明专利（16项）实用新型专利（12项）；研制样品处理设备样机（11件/种）现场检测及移动检测实验室（3辆）；获得省部级科学技术进步奖，一等奖4次（第1名）；第一届国家食品安全风险评估专家委员会委员；第一届食品安全国家标准审评委员会委员通用检测方法分委会副主任委员；
                第一届北京市食品安全专家委员会委员；第一届、第二届国家质检总局食品安全专家委员会委员；研究方向主要是食品中未知有害物质筛查技术，复杂基质食品中有害物质分离技术，实验材料应用研究，实验室样品处理设备研发，食品安全检测技术方向战略研究、进出口食品安全突发事件处置技术。

                </p>
        
         <Outlet/>
         
    </div>

    )}
}
