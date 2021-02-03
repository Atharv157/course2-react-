import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle  } from 'reactstrap';

class Dishdetail extends Component{
    constructor(props){
        super(props);
        
  
    }
    renderComments(){
        if(this.props.dish){
            const comments = this.props.dish.comments.map((cmts)=>{
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
                            {cmts.author}&nbsp;{new Intl.DateTimeFormat('en-US',{year:'numeric',month: 'short',day:'2-digit'}).format(new Date(Date.parse(cmts.date)))}
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
        if(this.props.dish){
            
            return(
                <div key={this.props.dish.id}className="row">
                    
                    <div className=" col-md-5 m-1 col-12">
                        <Card>
                            <CardImg object width="100%"src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
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