import React from 'react';
import { connect } from 'react-redux';
import {handleRepoName, handleDescription, handleOwner, handleLanguage, handlePrivacy, handleGithubURL, handleHomepageURL, handleImageURL, addRepo, showForm, showImageInfo} from '../redux/actions/repoform';

class RepoForm extends React.Component {
    render() {
        return(
            <div className="container button-small-radius margin-10percent text-center shadow width-80percent col-lg-4 col-md-6 col-sm-12">
                <form className="text-center col-lg-12 col-md-12 col-sm-12 container">
                    <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    <div className="padding-15px col-lg-10 col-md-10 col-sm-10">
                        <h4>Fill form below to add your repository:</h4>
                        <h6>(*) - required to fill</h6>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    <div className="margin-top-auto margin-bottom-auto padding-10percent col-lg-6 col-md-6 col-sm-6">
                        <input type="text" class={"bold input-big-80 input-no-radius input-style1-" + this.props.repoForm.validationFormColor[0] + " input-placeholder-secondary" + " input-font-secondary"} placeholder="REPO NAME*" onChange={(e) => this.props.handleRepoName(e)} onFocus={(e) => this.props.handleRepoName(e)}></input>
                        <div className="the-smallest input-font-error">{this.props.repoForm.validationMessage[0]}</div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1">
                        <i class={"margin-top-60px input-font-" + this.props.repoForm.validationFormColor[0] + " medium-small fa " + this.props.repoForm.validationIcon[0]}></i>
                    </div>
                    <div className="margin-top-auto margin-bottom-auto padding-10percent col-lg-5 col-md-5 col-sm-5">
                        <img className={"button button-hover-opacity button-hover-shadow-teritary button-oval width-50percent " + this.props.repoForm.imageEffect} src="https://i.ibb.co/bLfJvqH/Circle-icons-camera-svg.png" onClick={() => this.props.showImageInfo()}></img>
                        <i class={"button button-hover-opacity fa fa-sort-up " + this.props.repoForm.imageButtonTransition}></i>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2" style={{display: this.props.repoForm.displayImageInfo}}></div>
                    <div className="col-lg-8 col-md-8 col-sm-8" style={{display: this.props.repoForm.displayImageInfo}}>
                        <h5>When you put correct repository name and owner, picture will be added automatically from your Github account. Anyway you can add your own image, putting its URL here:</h5>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2" style={{display: this.props.repoForm.displayImageInfo}}></div>
                    <div className="col-lg-2 col-md-2 col-sm-2" style={{display: this.props.repoForm.displayImageInfo}}></div>
                    <div className="col-lg-8 col-md-8 col-sm-8" style={{display: this.props.repoForm.displayImageInfo}}>
                        <input type="text" class={"input-medium-80 input-no-radius input-style1-" + this.props.repoForm.validationFormColor[7] + " input-placeholder-secondary" + " input-font-secondary"} placeholder="Image URL" onChange={(e) => this.props.handleImageURL(e)} onFocus={(e) => this.props.handleImageURL(e)}></input>
                        <div className="the-smallest input-font-error">{this.props.repoForm.validationMessage[7]}</div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1" style={{display: this.props.repoForm.displayImageInfo}}>
                        <i class={"margin-left-20percent margin-top-30percent input-font-" + this.props.repoForm.validationFormColor[7] + " medium-small fa " + this.props.repoForm.validationIcon[7]}></i>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1" style={{display: this.props.repoForm.displayImageInfo}}></div>
                    <div className="line width-80percent margin-left-10percent margin-right-10percent text-center col-lg-12 col-md-12 col-sm-12 padding-top-10px"></div>
                    <div className="col-lg-2 col-md-2 col-sm-2"></div>
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <input type="text" class={"input-medium-80 input-no-radius input-style1-" + this.props.repoForm.validationFormColor[1] + " input-placeholder-secondary" + " input-font-secondary"} placeholder="Description*" onChange={(e) => this.props.handleDescription(e)} onFocus={(e) => this.props.handleDescription(e)}></input>
                        <div className="the-smallest input-font-error">{this.props.repoForm.validationMessage[1]}</div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1">
                        <i class={"margin-left-20percent margin-top-30percent input-font-" + this.props.repoForm.validationFormColor[1] + " medium-small fa " + this.props.repoForm.validationIcon[1]}></i>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    <div className="col-lg-5 col-md-5 col-sm-5"><h5 className="margin-bottom-5px margin-top-10px bold">Owner:</h5></div>
                    <div className="col-lg-5 col-md-5 col-sm-5 container">
                        <input type="text" class={"col-lg-10 col-md-10 col-sm-10 input-medium-80 input-no-radius input-style1-" + this.props.repoForm.validationFormColor[2] + " input-placeholder-secondary" + " input-font-secondary"} placeholder="Owner*" onChange={(e) => this.props.handleOwner(e)} onFocus={(e) => this.props.handleOwner(e)}></input>
                        <i class={"col-lg-2 col-md-2 col-sm-2 margin-top-30percent input-font-" + this.props.repoForm.validationFormColor[2] + " medium-small fa " + this.props.repoForm.validationIcon[2]}></i>
                        <div className="col-lg-10 col-md-10 col-sm-10 the-smallest input-font-error">{this.props.repoForm.validationMessage[2]}</div>
                        <div className="col-lg-2 col-md-2 col-sm-2"></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    <div className="col-lg-5 col-md-5 col-sm-5"><h5 className="bold margin-bottom-5px margin-top-10px">Language:</h5></div>
                    <div className="col-lg-5 col-md-5 col-sm-5 container">
                        <input type="text" class={"col-lg-10 col-md-10 col-sm-10 input-medium-80 input-no-radius input-style1-" + this.props.repoForm.validationFormColor[3] + " input-placeholder-secondary" + " input-font-secondary"} placeholder="Language" onChange={(e) => this.props.handleLanguage(e)} onFocus={(e) => this.props.handleLanguage(e)}></input>
                        <i class={"col-lg-2 col-md-2 col-sm-2 margin-top-30percent input-font-" + this.props.repoForm.validationFormColor[3] + " medium-small fa " + this.props.repoForm.validationIcon[3]}></i>
                        <div className="col-lg-10 col-md-10 col-sm-10 the-smallest input-font-error">{this.props.repoForm.validationMessage[3]}</div>
                        <div className="col-lg-2 col-md-2 col-sm-2"></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    <div className="col-lg-5 col-md-5 col-sm-5"><h5 className="bold margin-bottom-5px margin-top-10px">Public:</h5></div>
                    <div className="col-lg-5 col-md-5 col-sm-5 container">
                        <input type="text" class={"col-lg-10 col-md-10 col-sm-10 input-medium-80 input-no-radius input-style1-" + this.props.repoForm.validationFormColor[4] + " input-placeholder-secondary" + " input-font-secondary"} placeholder="Public (yes/no)*" onChange={(e) => this.props.handlePrivacy(e)} onFocus={(e) => this.props.handlePrivacy(e)}></input>
                        <i class={"col-lg-2 col-md-2 col-sm-2 margin-top-30percent input-font-" + this.props.repoForm.validationFormColor[4] + " medium-small fa " + this.props.repoForm.validationIcon[4]}></i>
                        <div className="col-lg-10 col-md-10 col-sm-10 the-smallest input-font-error">{this.props.repoForm.validationMessage[4]}</div>
                        <div className="col-lg-2 col-md-2 col-sm-2"></div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    <div className="col-lg-2 col-md-2 col-sm-2"></div>
                    <div className="col-lg-8 col-md-8 col-sm-8">
                        <input type="text" class={"input-medium-80 input-no-radius input-style1-" + this.props.repoForm.validationFormColor[5] + " input-placeholder-link" + " input-font-link"} placeholder="Github repository URL*" onChange={(e) => this.props.handleGithubURL(e)} onFocus={(e) => this.props.handleGithubURL(e)}></input>
                        <div className="the-smallest input-font-error">{this.props.repoForm.validationMessage[5]}</div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1">
                        <i class={"margin-left-20percent margin-top-30percent input-font-" + this.props.repoForm.validationFormColor[5] + " medium-small fa " + this.props.repoForm.validationIcon[5]}></i>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    <div className="col-lg-2 col-md-2 col-sm-2"></div>
                    <div className="padding-bottom-10px col-lg-8 col-md-8 col-sm-8">
                        <input type="text" class={"input-medium-80 input-no-radius input-style1-" + this.props.repoForm.validationFormColor[6] + " input-placeholder-link" + " input-font-link"} placeholder="Homepage URL" onChange={(e) => this.props.handleHomepageURL(e)} onFocus={(e) => this.props.handleHomepageURL(e)}></input>
                        <div className="the-smallest input-font-error">{this.props.repoForm.validationMessage[6]}</div>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1">
                        <i class={"margin-left-20percent margin-top-30percent input-font-" + this.props.repoForm.validationFormColor[6] + " medium-small fa " + this.props.repoForm.validationIcon[6]}></i>
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    <div className="col-lg-4 col-md-4 col-sm-4"></div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <input type="button" class={"button button-medium button-medium-radius button-link button-hover-right " + this.props.repoForm.sendButtonVisibility} value="Send >" onClick={() => this.props.addRepo(this.props.repoForm.formValues)}></input>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4"></div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    repoForm: state.repoForm
});

const mapDispatchToProps = dispatch => ({
    handleRepoName: (e) => dispatch(handleRepoName(e)),
    handleDescription: (e) => dispatch(handleDescription(e)),
    handleOwner: (e) => dispatch(handleOwner(e)),
    handleLanguage: (e) => dispatch(handleLanguage(e)),
    handlePrivacy: (e) => dispatch(handlePrivacy(e)),
    handleGithubURL: (e) => dispatch(handleGithubURL(e)),
    handleHomepageURL: (e) => dispatch(handleHomepageURL(e)),
    handleImageURL: (e) => dispatch(handleImageURL(e)),
    addRepo: (repo) => dispatch(addRepo(repo)),
    showForm: () => dispatch(showForm()),
    showImageInfo: () => dispatch(showImageInfo())
});

export default connect(mapStateToProps, mapDispatchToProps)(RepoForm);