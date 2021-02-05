import React from 'react';
import {Media } from 'reactstrap';
 function SingleLeader({singleLeader}){
     return(
        <div key={singleLeader.id} className="col-12 mt-5">
            <Media tag="li">
            <Media left middle>
                <Media object src={singleLeader.image} alt={singleLeader.name} />
            </Media>
            <Media body className="ml-5">
                <Media heading>{singleLeader.name}</Media>
                <p>{singleLeader.designation}</p>
                <p>{singleLeader.description}</p>
            </Media>
            </Media>
      </div>
     );
 }
 function RenderLeader({leaders}){
    const temp = leaders.map((leader) => {
        return (
            <SingleLeader singleLeader = {leader}></SingleLeader> 
        );
    });
    return temp;
 }
 export default RenderLeader;