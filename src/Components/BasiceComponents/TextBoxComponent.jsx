import React from 'react'


export class TextBoxComponent extends React.PureComponent {
    constructor(props) {
        super(props)


    }

    render() {

        return <input name={this.props.name}
            value={this.props.value} className={this.props.className} >
        </input>
    }


}