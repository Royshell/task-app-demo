import React, { Component } from 'react';
import firebase from 'firebase/app';

class Ticket extends Component {

  state = {
    content: this.props.content.description,
    isDisabled: !!this.props.doc.data().description,
  };

  onInputChange(e) {
    const content = e.target.value
    this.setState({content});
  };

  async activate(e) { 
    const {isDisabled} = this.state;

    if (isDisabled && e.target && e.target.querySelector('input')) {
      await this.setState({isDisabled: false});
        e.target.querySelector('input').focus();
    }
  };

  disactivate() {
    const {doc} = this.props;
    const {content} = this.state;

    if (!this.state.isDisabled) {
      this.setState({isDisabled: true});
      this.updateDescription(doc, content);
    }
  };

  deleteTicket = () => {
    const id = this.props.doc.id;
    firebase.firestore().collection('boards').doc('Sales').collection('tasks').doc(id).delete()
  }

  updateDescription = (id, description) => {
    firebase.firestore().collection('boards').doc('Sales').collection('tasks').doc(this.props.doc.id).update({
      description,
    });
  }

  dragStart(e) {
    const {id} = this.props;
    e.dataTransfer.setData('ticket_id', id);

    setTimeout(()=> {
      e.target.style.display = "none";
    }, 50);
  }

  dragOver(e) {
    e.stopPropagation();
  };

  render() {
    const {content, isDisabled} = this.state;
    
    return (
      <div 
        className="ticket" 
        draggable="true" 
        onDoubleClick={(e) => this.activate(e)} 
        onDragStart={(e) => this.dragStart(e)}
        onDragOver={(e) => this.dragOver(e)}
        >
        <div className="ticket-content">
          <div className="ticket-ex" onClick={this.deleteTicket}>&#10006;</div>
          <span className="ticket-check">&#10004;</span>
          <input className="ticket-input" 
            type="text" 
            value={content} 
            onDoubleClick={(e) => this.activate(e)}
            onChange={(e) => this.onInputChange(e)}
            onBlur={() => this.disactivate()} 
            disabled={isDisabled} /> 
        </div>
      </div>
    );
  }
}

export default Ticket;