import React from 'react'
import myshop from '../myshop.mp4'
import {Container, Row, Col} from 'react-bootstrap'
import '../style.css'
class Project extends React.Component{
    render(){
        return(
            <div>
            <Container fluid>
            <Row>
                <Col lg={12}>
                
                <video id='video' className='mt-2  mx-auto ' src={myshop}  width="800" height="300" controls="controls" />
                <p id='caption' className='mb-0 font-italic text-muted text-center'> 
                My Shop is a website for booking DStv subscriptions, CCTV and DSTV installations and accessories. 
                The platform grants flexibility for managing given orders orders. </p>

                </Col>
                
            </Row>

            </Container>
        
            </div>
            
        )
    }
}

export default Project