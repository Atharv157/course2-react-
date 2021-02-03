import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle  } from 'reactstrap';



    function RenderDish({dish}){
        if(dish){
            return(
                <div className=" col-md-5 m-1 col-12">
                        <Card>
                            <CardImg object width="100%"src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                </div>
                );
        }
       else{
           return(
               <div></div>
           );
       } 
    }
    
    function RenderComments({dish}){
        if(dish){
            const comments = dish.comments.map((cmts)=>{
                return(
                    <li>
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
                    </li>
                  
                );
            });

            return(
                <div className="co-12 col-md-5 m-1">
                    <div><h4>Comments</h4></div>
                    <ul className="text-left list-unstyled">
                        {comments}
                    </ul> 
                </div>);
        }
        else{
            return(
                <div></div>
            );
        }

    }
    const Dishdetail=(props)=>{
        if(props.dish)
        {
            return(
            <div key={props.dish.id}className="row">
                <RenderDish dish={props.dish}/>
                <RenderComments dish={props.dish}/>
            </div>
            );
        }
        else{
            return(<div></div>);
        }   
        }
        
    
        

                 

export default Dishdetail;