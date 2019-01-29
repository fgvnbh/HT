import React, {PureComponent,Fragment} from 'react';
import ReactDOM from 'react-dom';

class TestComp extends PureComponent {
    constructor(props)
    {
        super(props);

        this.div=document.createElement("div");
        this.div.setAttribute("id","mod");

        let inner=document.createElement("div");
        inner.setAttribute("id","inner");

        this.div.appendChild(inner);
        document.body.appendChild(this.div);

    }
    componentWillUnmount(){
        document.body.removeChild(this.div);
    }

    render() {
        return ReactDOM.createPortal(
            <Fragment>
                {this.props.children}
                <button onClick={this.props.hide}> Close</button>,

            </Fragment>,
            document.getElementById("inner")
        )
    };
}

export default TestComp;
