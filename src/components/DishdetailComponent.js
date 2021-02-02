import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle  } from 'reactstrap';

class Dishdetail extends Component{
    constructor(props){
        super(props);
        
  
    }
    renderComments(){
        if(this.props.selectedDish){
            const comments = this.props.selectedDish.comments.map((cmts)=>{
                return(
                    <div>
                        {}
                        <br></br> 
                        <div className="col-12">
                            {cmts.comment}
                        </div>
                        <br></br>
                        <div className="col-12">
                            --&nbsp;
                            {cmts.author}&nbsp;{cmts.date}
                        </div>
                    </div>
                  
                );
            });

            return comments;
        }
        else{
            return(
                <div></div>
            );
        }

    }
    render(){
        if(this.props.selectedDish){
            
            return(
                <div key={this.props.selectedDish.id}className="row">
                    <div className="col-md-5 m-1 col-12">
                        <Card>
                            <CardImg object src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                            <CardBody>
                                <CardTitle>{this.props.selectedDish.name}</CardTitle>
                                <CardText>{this.props.selectedDish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-5 m-1 col-12">
                        <div>
                            <ul className="text-left list-unstyled">
                                <div><h4>Comments</h4></div>
                                <li>{this.renderComments()}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }
        

                 
}
export default Dishdetail;