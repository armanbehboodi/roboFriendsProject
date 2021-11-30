import React from "react";

class ErrorBoundry extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasErros : true})
    }

    render(){
        if (this.state.hasError){
            return <h2>Ooops! thats not good</h2>
        }
        return this.props.children;
    }
}
export default ErrorBoundry