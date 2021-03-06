import React from "react";
class SearchBar extends React.Component{
state={term:''}
onInputChange = (event)=>{
    this.setState({
        term:event.target.value
         
    })
}
onFormSubmit = (e) =>{
    e.preventDefault();
    this.props.onFormSubmit(this.state.term)
}
    render(){

return(
    <div className="search-bar ui segment">
       <form className="ui form" action="" method="get" onSubmit={this.onFormSubmit}>
            <div className="field">
                <label htmlFor="">
                    Video Search
                </label>
                <input type="text" value={this.state.term} onChange={e=>this.setState({term: e.target.value})}/>
            </div>
       </form>
    </div>
);
}
}
export default SearchBar;