import React from 'react'


export class ButtonComponent extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            name: this.props.name,
            className: this.props.className,
            callBack: this.props.callBack,
            disabled: this.props.disabled ? true : false,
            Visible: this.props.Visible == undefined ? true : this.props.Visible,
        }

    }


    render() {
        var returnHtml = null;
        if (this.state.Visible) {
            returnHtml = <input type="button"
                disabled={this.state.disabled}
                id={this.state.name}
                value={this.state.name}
                className={this.state.className}
                onClick={this.state.callBack} />
        }
        return returnHtml
    }
}