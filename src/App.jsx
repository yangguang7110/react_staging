import React, { Component } from "react";

class App extends Component {
    constructor(){
        super();
        this.state = {
            list1:[
                {
                    id: 1,
                    stuName: "aa",
                    age: 18,
                    type: 1
                },
                {
                    id: 2,
                    stuName: "bb",
                    age: 18,
                    type: 2
                }
            ]
        }
    }
    test = () => {
        const list1 = this.state.list1;
        list1.forEach(
            function (element, index, array){
                console.log(element);
                console.log(index);
                const type = element.type;
                if(type === 1){
                    element.type = "身份证";
                }else if(type === 2){
                    element.type = "港澳台";
                }
                element.new = "hhh";
                console.log("后",element);
                console.log("后",index);
                console.log("remote....");
            }
        )
    }
    render() {
        return (
            <div>
                helloworld<br/>
                <button onClick={this.test}>test</button>
            </div>
        )
    }
}

export default App;
