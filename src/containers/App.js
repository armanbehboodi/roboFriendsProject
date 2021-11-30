import React from "react";
import CardList from "../components/Cardlist";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import './App.css';

class App extends React.Component{
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField:'',
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json()
            })
            .then(users => this.setState({robots : users}))
    }

    onSearchChane = (e) => {
        this.setState({searchField : e.target.value})
    }

    render(){
        const filterRobots = this.state.robots.filter((robots) => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className={"tc"}>
                <h2>RoboFriends</h2>
                <SearchBox SearchChange={this.onSearchChane}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filterRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}
export default App;