import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Item extends Component {
    render() {
        return (
            <div className="gridItems">
            <div className="d-flex justify-content-between" >           
           
                <p>{this.props.item.LoanNumber}</p>
              
              
                <p>{this.props.item.BorrowerName}</p>
                <p> {this.props.item.LoanAmount}</p>
                
           
            </div>
            </div>
        )
    }
}

export default Item;