import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, BreadcrumbItem, Breadcrumb  } from 'reactstrap';
import {Link } from "react-router-dom";


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
    
    function RenderComments({comments}){
        if(comments){
            const com = comments.map((cmts)=>{
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
                        {com}
                    </ul> 
                </div>);
        }
        else{
            return(
                <div></div>
            );
        }

    }
    const DishDetail=(props)=>{
        if(props.dish)
        {
            return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>
                        {props.dish.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div key={props.dish.id}className="row">
                    <RenderDish dish={props.dish}/>
                    <RenderComments comments={props.comments}/>
                </div>
            </div>    
            );
        }
        else{
            return(<div></div>);
        }   
        }
        
    
        

                 

export default DishDetail;