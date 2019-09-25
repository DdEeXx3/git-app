import React from 'react';
import MyRepo from './myrepo';
import RepoForm from './repoform';
import { connect } from 'react-redux';
import {createFavourites, showMyRepos} from '../redux/actions/repos';
import {showForm} from '../redux/actions/repoform';

class MyRepos extends React.Component {
    constructor(props) {
        super(props);
        this.props.createFavourites();
        this.props.showMyRepos();
    }

    render() {
        return(
             <div className="col-lg-12 col-md-12 col-sm-12 container">
                <div className="col-lg-12 col-md-12 col-sm-12 padding-top-50px">
                    <h2>This are all of your repositories:</h2>
                </div>
                <div className="col-lg-4 col-md-3 col-sm-2"></div>
                <div className="col-lg-4 col-md-6 col-sm-8 container">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <button class={"button-medium button-medium-radius button-" + this.props.repoForm.buttonColor + " button-hover-shadow-" + this.props.repoForm.buttonColor} onClick={() => this.props.showForm()}>{this.props.repoForm.buttonInformation}<i class={"margin-left-15px fa " + this.props.repoForm.buttonIcon}></i></button>
                    </div>
                </div>
                <div className="col-lg-4 col-md-3 col-sm-2"></div>
                <div className="col-lg-3 col-md-2 col-sm-1" style={{display: this.props.repoForm.displayForm}}></div>
                <div className="col-lg-6 col-md-8 col-sm-10" style={{display: this.props.repoForm.displayForm}}>
                    <RepoForm repoForm = {this.props.repoForm}/>
                </div>
                <div className="col-lg-3 col-md-2 col-sm-1" style={{display: this.props.repoForm.displayForm}}></div>
                {this.props.repos.loading && (<div className="col-lg-12 col-md-12 col-sm-12 padding-top-50px padding-bottom-50px">LOADING DATA<div className="loader text-center"></div></div>)}
                <div className="col-lg-12 col-md-12 col-sm-12 padding-top-50px padding-bottom-50px"></div>
                {this.props.repos.myReps.map(myrepo => { return <MyRepo myrepo={myrepo} key={myrepo.id}/>})}
                <div className="col-lg-12 col-md-12 col-sm-12">{this.props.repos.errorMessage}</div>
             </div>
        )
    }
}

const mapStateToProps = state => ({
    repos: state.repos,
    repoForm: state.repoForm
});

const mapDispatchToProps = dispatch => ({
    showMyRepos: () => dispatch(showMyRepos()),
    createFavourites: () => dispatch(createFavourites()),
    showForm: () => dispatch(showForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(MyRepos);
