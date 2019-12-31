import React, { Component } from 'react'

export default class Main extends Component {

    state = {
        allTimeLeft:0,
        allTimePer:0,

    }

    msToTime = (s) =>{
        let ms = s % 1000;
        s = (s - ms) / 1000;
        let secs = s % 60;
        s = (s - secs) / 60;
        let mins = s % 60;
        let days = Math.floor((s - mins) / 1440)
        let hrs = ((s - mins)/60) - (days * 24);

        let time = {
            day:days,
            hour:hrs,
            minute:mins,
            second:secs
        }
        
        return time
    }

    printLeftTime = () => {

        // Time now
        const thisTime = new Date()
        const thisSecond = Date.parse(thisTime)

        // Time for soldier
        const soldierStart = new Date(2019, 4, 13, 14)
        const soldierEnd = new Date(2020, 11, 12, 8)
        const soldierStartSecond = Date.parse(soldierStart)
        const soldierEndSecond = Date.parse(soldierEnd)
        let leftTime = soldierEndSecond - thisSecond

        // Time for ilgyeong
        const ilgyeongStart = new Date(2019, 8, 1)
        const ilgyeongStartSecond = Date.parse(ilgyeongStart)
        let ilgyeongLeftSecond = ilgyeongStartSecond - thisSecond

        // Time for sanggyeong
        const sanggyeongStart = new Date(2020, 2, 1)
        const sanggyeongStartSecond = Date.parse(sanggyeongStart)
        let sanggyeongLeftSecond = sanggyeongStartSecond - thisSecond

        // Time for sugyeong
        const sugyeongStart = new Date(2020, 8, 1)
        const sugyeongStartSecond = Date.parse(sugyeongStart)
        let sugyeongLeftSecond = sugyeongStartSecond - thisSecond

        // Percent
        let allPer = ((thisSecond - soldierStartSecond) / (soldierEndSecond - soldierStartSecond)) * 100
        // let ilPer = ((thisSecond - ilgyeongStartSecond) / (sanggyeongStartSecond - soldierStartSecond)) * 100
        // let sangPer = ((thisSecond - sanggyeongStartSecond) / (sugyeongStartSecond - sanggyeongStartSecond)) * 100
        // let suPer = ((thisSecond - sugyeongStartSecond) / (sanggyeongStartSecond - soldierStartSecond)) * 100

        this.setState({
            allTimeLeft:leftTime,
            allTimePer:allPer.toFixed(6),
            ilgyeongLeft: ilgyeongLeftSecond,
            sanggyeongLeft: sanggyeongLeftSecond,
            sugyeongLeft: sugyeongLeftSecond,
            // ilPer:ilPer.toFixed(6),
            // sangPer:sangPer.toFixed(6),
            // suPer:suPer.toFixed(6),
        })

        setTimeout(this.printLeftTime, 1000)
    }

    componentDidMount(){
        this.printLeftTime()
    }

    render() {
        let {
            allTimeLeft,
            allTimePer, 
            ilgyeongLeft, 
            sanggyeongLeft, 
            sugyeongLeft,
            // ilPer,
            // sangPer,
            // suPer
            } = this.state
        let {day, hour, minute, second} = this.msToTime(allTimeLeft)
        let ilgyeong = this.msToTime(ilgyeongLeft)
        let sanggyeong = this.msToTime(sanggyeongLeft)
        let sugyeong = this.msToTime(sugyeongLeft)
        return (
            <div>
                <span className="hangleLeftGuide">현대의 남은 군생활</span><br/>
                <span className="time">{day}</span>
                <span className="hangleTime">일</span><br/>
                <span className="time">{hour}</span>
                <span className="hangleTime">시간 </span>
                <span className="time">{minute}</span>
                <span className="hangleTime">분 </span><br/>
                <span className="time" style={{"color":"#ffad33"}}>{second}</span>
                <span className="hangleTime">초</span><br/>
                <span className="percent" style={{"color":"#808080"}}>{allTimePer}</span>
                <span className="hangleTime">%</span><br/><br/>
                {/* <span>군생활 스타트 : </span>
                <span>2020</span><span>년</span>
                <span>1</span><span>월</span>
                <span>6</span><span>일</span>
                <span>14</span><span>시</span> */}
                <span className="solStart">군생활 시작 : 2019년 5월 13일</span><br/>
                <span className="solStart">군생활 끝 : 2020년 12월 12일</span>
                <br/>
                <div className="classIn">
                    <span className="cUp">일병 진급</span><br/>
                    {ilgyeongLeft > 0 
                    ? <div>
                    <span className="ctime">{ilgyeong.day}</span>
                    <span className="changleTime">일 </span>
                    <span className="ctime">{ilgyeong.hour}</span>
                    <span className="changleTime">시간 </span>
                    <span className="ctime">{ilgyeong.minute}</span>
                    <span className="changleTime">분 </span>
                    <span className="ctime">{ilgyeong.second}</span>
                    <span className="changleTime">초</span><br/>
                    </div>
                    :<div>
                        <span className="cUp">2019 / 09 / 01 자로 진급!</span>
                    </div>}
                    
                    {/* <span className="cpercent">{ilPer}</span>
                    <span className="changleTime">%</span> */}
                </div><br/>
                <div className="classIn">
                    <span className="cUp">상병 진급</span><br/>
                    {sanggyeongLeft > 0 
                    ? <div>
                        <span className="ctime">{sanggyeong.day}</span>
                        <span className="changleTime">일 </span>
                        <span className="ctime">{sanggyeong.hour}</span>
                        <span className="changleTime">시간 </span>
                        <span className="ctime">{sanggyeong.minute}</span>
                        <span className="changleTime">분 </span>
                        <span className="ctime">{sanggyeong.second}</span>
                        <span className="changleTime">초</span><br/>
                    </div>
                     :
                     <div>
                         <span className="cUp">2020 / 03 / 01 자로 진급!</span>
                     </div>
                     }
                    {/* <span className="cpercent">{sangPer}</span>
                    <span className="changleTime">%</span> */}
                </div><br/>
                <div className="classIn">
                    <span className="cUp">병장 진급</span><br/>
                    {sugyeongLeft > 0 
                    ? <div>
                        <span className="ctime">{sugyeong.day}</span>
                        <span className="changleTime">일 </span>
                        <span className="ctime">{sugyeong.hour}</span>
                        <span className="changleTime">시간 </span>
                        <span className="ctime">{sugyeong.minute}</span>
                        <span className="changleTime">분 </span>
                        <span className="ctime">{sugyeong.second}</span>
                        <span className="changleTime">초</span><br/>
                    </div>
                    :
                    <div>
                        <span className="cUp">2020 / 09 / 01 자로 진급!</span>
                    </div>
                    }
                    {/* <span className="cpercent">{suPer}</span>
                    <span className="changleTime">%</span> */}
                </div>
            </div>
        )
    }
}
