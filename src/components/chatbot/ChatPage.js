import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as chatAction from '../../actions/ChatAction';
import { browserHistory } from 'react-router';
import ChatList from './ChatList';
import TextInput from '../common/Header';
import toastr from 'toastr';

class ChatPage extends React.Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            errors: {},
            saving: false,
            showPrevResponses: false
        };
        
        this.addMessage = this.addMessage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
        this.redirectToCoursesCategoryPage = this.redirectToCoursesCategoryPage.bind(this);
        this.hasProp = this.hasProp.bind(this);
    }
    
    handleChange(event) {
        const field = event.target.name;
        let chat = Object.assign({}, this.state.chat);
        chat[field] = event.target.value;
        return this.setState({chat: chat});        
    }

    addMessage(event){
        event.preventDefault();
        this.setState({saving: true});
        this.props.actions.saveChat(this.state.chat)
        .then(() =>{ 
            toastr.success('new message added');
            this.setState({saving: false});
        }).catch(error =>{
            this.setState({saving: false});
            toastr.error(error);
        });
    }

    updateChatState(event){
        const field = event.target.name;
        let chat = Object.assign({}, this.state.chat);
        chat[field] = event.target.value;
        return this.setState({chat: chat});
    }

    onButtonClick(event){
        const field = parseInt(event.target.name);
        event.preventDefault();
        const listId = this.props.chat.length - 1;
        const answerIndex = this.props.chat[listId].buttons.findIndex(a => a.id == field);
        if(this.hasProp(this.props.chat[listId].buttons[answerIndex], 'page')){
            toastr.success(this.props.chat[listId].buttons[answerIndex].answer);
            this.redirectToCoursesCategoryPage(this.props.chat[listId].buttons[answerIndex].page);
        }
        else{
            this.props.actions.loadNextChat(this.state.chat, listId + 1)
            .then(() =>{
                toastr.success(this.props.chat[listId].buttons[answerIndex].answer);
                //this.setState({showPrevResponses: true});
            }).catch(error =>{
                //this.setState({showPrevResponses: false});
                //throw(error)
                toastr.error(error);
            });
        }
    }

    hasProp (obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }

    redirectToCoursesCategoryPage(page){
        browserHistory.push(page);
    }

    render(){
        return(
            <div id="container">
                <section id="main">
                    <section id="messages-list">
                        <ChatList chats={this.props.chat} chatHistory={this.props.chatHistory} showPrevResponses={this.state.showPrevResponses} onButtonClick={this.onButtonClick} />
                    </section>
                </section>
            </div>
        );
    }
}

ChatPage.propTypes = {
    chat: PropTypes.array.isRequired
};

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(chatAction, dispatch)
    };
}

function mapStateToProps(state, OwnProps){
    return{
            chat: state.chat,
            chatHistory: state.chatHistory
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);