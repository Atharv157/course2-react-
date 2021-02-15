import { React, Component} from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, BreadcrumbItem,
      Breadcrumb, Button, Label, Row, Col, Modal, ModalBody, ModalHeader  } from 'reactstrap';
import { Control, Errors, LocalForm} from 'react-redux-form';
import {Link } from "react-router-dom";

const minLength = (len) => (val) => val && (val.length >= len);
const maxLength = (len) => (val) => !(val) || (val.length <= len);

class CommnetForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleSubmit(values){
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }
    render(){
        return(
            <>
            <div >
                <Button onClick={this.toggleModal}className="bg-white border border-secondary text-secondary">
                    <span className="fa fa-pencil"></span> Submit Comment
                </Button>
            </div>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values)=>{this.handleSubmit(values)}}>
                        <Row className="form-group">
                            <Label htmlFor="rating"md={12}>Rating</Label>
                            <Col md={ {size:12} }>
                                <Control.select model=".rating" name="rating" 
                                 className="form-control">
                                     <option>1</option>
                                     <option>2</option>
                                     <option>3</option>
                                     <option>4</option>
                                     <option>5</option>
                                 </Control.select>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="name"md={12}>Your Name</Label>
                            <Col md={12}>
                                <Control.text model=".name" name="name"
                                 placeholder="Your Name"
                                 className="form-control" 
                                 validators={{ minLength:minLength(3), maxLength:maxLength(15)}}/>
                                <Errors className="text-danger"
                                show="touched"
                                model=".name"
                                messages={{
                                    
                                    minLength:"Must be greater than 2 characters",
                                    maxLength:"Must be 15 characters or less"

                                }}/>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="comment"md={12}>Comment</Label>
                            <Col md={12}>
                                <Control.textarea model=".comment" name="comment"
                                 className="form-control" rows = "6" />
                            </Col>
                        </Row>

                        <Row className = "form-group">
                                <Col md={{size:10 }}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
            </>
            
        );
       
     }
}


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
                    <CommnetForm />
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