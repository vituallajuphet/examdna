import React from 'react';

class Contents extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            datas: [
                {name:"test", age:21},
                {name:"test2", age:23},
                {name:"test3", age:24},
                {name:"test4", age:25},
            ]
        }
       
    }

    render() {
        const listItems = this.state.datas.map((dta) =>
            <li>{dta.name}</li>
        );
        
        return (
            <div>
                This is Contents
                <ul className="main_list">
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default Contents;