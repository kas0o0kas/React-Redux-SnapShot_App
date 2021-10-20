import React from 'react';
import { Col } from 'reactstrap';
import './Photo.scss';

const Photo = ({item}) => {
    return (
            <Col xs="12" md="6" lg="4" className="photo">
                <a href={`/${item.id}`} className="photo__item">
                    <img className="photo__image" src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`} alt={`Photo-Id ${item.id}`} />
                </a> 
            </Col>
    )
}

export default Photo
