import React from 'react';
import { connect } from 'react-redux';
import {increment, decrement} from '../redux/actions/counter';

class Home extends React.Component
{   
    render() {
        return(
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="col-lg-12 col-md-12 cols-sm-12 padding-top-50px padding-bottom-50px">
                    <h2>This is home page!</h2>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 padding-top-50px"></div>
                <div className="col-lg-2 col-md-2 col-sm-1"></div>
                <div className="container col-lg-8 col-md-8 col-sm-10">
                    <div className="col-lg-2 col-md-2 col-sm-1"></div>
                    <div className="col-lg-8 col-md-8 col-sm-10">
                        <h3>This is the counter:</h3>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-1"></div>
                    <div className="col-lg-12 col-md-12 col-sm-12"><h1>{this.props.counter}</h1></div>
                    <div className="col-lg-3 col-md-2 col-sm-1"></div>
                    <div className="col-lg-3 col-md-4 col-sm-5">
                        <button onClick={() => this.props.increment()} className="width-50percent button-medium button-medium-radius button-secondary button-hover-shadow-secondary">+</button>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-5">
                        <button onClick={() => this.props.decrement()} className="width-50percent button-medium button-medium-radius button-secondary button-hover-shadow-secondary">-</button>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-1"></div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-1"></div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    counter: state.counter
});

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
