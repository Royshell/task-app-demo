import React, { Component, Fragment } from 'react';
import Column from '../Components/Column';
import firebase from 'firebase/app';

class Board extends Component {

  state = {
    candidateTickets: [],
    inProgressTickets: [],
    qaTickets: [],
    completedTickets: [],
    isLoading: false
  };

  componentDidMount() {
    const db = firebase.firestore().collection('boards').doc('Sales').collection('tasks');
    db.onSnapshot(docs => {
      this.setState({isLoading: true});
      console.log(this.state.isLoading);
      const candidateTickets = []; 
      const inProgressTickets = [];
      const qaTickets = [];
      const completedTickets = [];

      docs.forEach(doc => {
        switch(doc.data().status) {
          case 'QA/Code review':
            qaTickets.push(doc);
            break;
          case 'Completed':
            completedTickets.push(doc);
            break;
          case 'In Progress':
            inProgressTickets.push(doc);
            break;
          case 'Candidates':
            candidateTickets.push(doc);  
            break;    
        } 
      });

      this.setState({
        candidateTickets,
        inProgressTickets,
        qaTickets,
        completedTickets,
        isLoading: false
      });
    }); 
  };

  render() {
    const {candidateTickets, inProgressTickets, qaTickets, completedTickets, isLoading} = this.state;

    return (
      <Fragment>
        {!this.isLoading && <div className="board">
            <Column title="Candidates" tickets={candidateTickets} />
            <Column title="In Progress" tickets={inProgressTickets} />
            <Column title="QA/Code review" tickets={qaTickets} />
            <Column title="Completed" tickets={completedTickets} />
        </div>}
      </Fragment>
    );
  }
}

export default Board;