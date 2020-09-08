import React, {Component} from 'react';
import {Container,Row,Col} from 'reactstrap';


class Item extends Component {
    render() {
        return (
<div className="gridItems">
            <Container>
            
            <Row>
            <div className="GridfirstColumn">
             <Col><b>Loan Number :</b>{this.props.item.LoanNumber}</Col>
             </div>
             <div className="GridSecondColumn">
             <Col>
             <Row><b>Borrower FullName:</b> {this.props.item.BorrowerName}</Row>
             <Row><b>Loan Amount:</b>{this.props.item.LoanAmount}</Row>
             
             </Col>
             </div>
              </Row>
              
      </Container>
      </div>
           
        )
    }
}

export default Item;