import React from 'react';

class SearchInput extends React.Component{
    constructor(props)
    {
        super(props);
        this.timer = null;
    }

    handleDelay(e) {
        e.persist() 
        clearTimeout(this.timer);
        this.timer = setTimeout(
            () => this.props.handleSearch(e.target.value), 
            1500
        );
    }

    enterSearch(e) {
        if (e.keyCode == 13) {
            this.props.handleSearch(e.target.value);
        }
    }

    render(){
        return(
            <input className="input-style1-secondary input-medium-70" type="text" placeholder="Put repository name here" onKeyDown={(event) => this.enterSearch(event)} onChange={(event) => this.handleDelay(event) }></input>
        )
    }
}

export default SearchInput;