import React from 'react'
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const Hero = ({resources}) => {
  return (
    <div className='resource-carousel-container'>
        <Carousel>
            {
                resources.map((resource) => {
                    return (
                        <Paper>
                            <div className='resource-card-container'>
                                <div className='resource-card'>
                                    <div className='resource-detail'>
                                        <div className='resource-image'>
                                            <img src={resource.image} alt="" />
                                        </div>
                                        <div className='resource-title'>
                                            <h4>{resource.title}</h4>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    )
                })
            }
        </Carousel>
    </div>
  )
}

export default Hero