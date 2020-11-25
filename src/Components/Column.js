import React, { Component } from 'react';
import Ticket from './Ticket';
import firebase from 'firebase/app';

class Column extends Component {
  state = {
    isAdding: false
  };

  addTicket = async() => {
    const {title} = this.props;
    this.setState({ isAdding: true });

    await firebase.firestore().collection('boards').doc('Sales').collection('tasks').add({
      status: title, 
      description: 'new task',
    });

    this.setState({ isAdding: false });
  };

  drop(e) {
    e.preventDefault();
    const ticketId = e.dataTransfer.getData('ticket_id');
    firebase.firestore().collection('boards').doc('Sales').collection('tasks').doc(ticketId).update({
      status: this.props.title,
    });
  };

  dragOver(e) {
    e.preventDefault();
  };

  render() {
    const {tickets} = this.props;

    return (
      <div>
        <div className="column-top">
          <h3>{this.props.title}</h3>
          <div className="column-buttons">
            <span onClick={() => this.addTicket()}>&#xFF0B;</span>
            <span>&hellip;</span>
          </div>
        </div>
        <div 
          className={`column-main ${!tickets || !tickets.length ? 'empty' : ''}`}
          onDrop={(e) => this.drop(e)}
          onDragOver={(e) => this.dragOver(e)}
        >
          { !this.isAdding && tickets && tickets.map((doc, index) => <Ticket doc={doc} content={doc.data()} key={index} id={doc.id} ticket-id={doc.id}  ></Ticket>)}
          <div className="column-add" onClick={() => this.addTicket()}> &#xFF0B; Add task</div>
        </div>
        
      </div>
    );
  }
}

export default Column;