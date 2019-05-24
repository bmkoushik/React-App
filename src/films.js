import React from 'react';
import './App.css';
import {Row,Container} from 'react-grid-system';

const Films = (props) => {

const {films} = props;

return (
  <div>
    <Container>
      <Row xs={12}>
      
       {films.map((film,index) => (
            <div className='App-Images'key={index}>
              <div>{film.title}</div> 
              <a href={film.permaLink} target="_blank">
                <img className='Images' src={film.images.image[0].src} alt=""></img>
              </a>
               </div>
               ))}
            </Row>
           
          </Container>
    </div>
  );
  }; 
  
  export default Films              
              
