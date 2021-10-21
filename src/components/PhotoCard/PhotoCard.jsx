import React from 'react';
import { Col, List, Row } from 'reactstrap';
import './PhotoCard.scss';

const PhotoCard = ({photoInfo}) => {
    console.log('photoInfo',photoInfo);
    return (
        <div className="photo-card">
            <Row>
                <Col xs="12" md="6" lg="6" className="photo-card__image">
                    {photoInfo?<img src={`https://live.staticflickr.com/${photoInfo.server}/${photoInfo.id}_${photoInfo.secret}.jpg`} alt={`PhotoId: ${photoInfo.id}`}/>:''}
                </Col>

                <Col xs="12" md="6" lg="6" className="photo-card__infor">
                    <div className="photo-card__infor--container">
                        <h2 className="text-dark">This photo belong to: <span className="photo-card__infor--owner text-danger">{photoInfo.owner.realname?photoInfo.owner.realname:photoInfo.owner.username?photoInfo.owner.username:"Unknown"}</span></h2>
                        <List>
                            <li><h3 className="text-dark">Photo Title: <span className="photo-card__infor--title text-info">{photoInfo.title._content?photoInfo.title._content:''}</span></h3></li>
                            <li><h3 className="text-dark">Photo-Id: <span className="photo-card__infor--id text-info">{photoInfo.id?photoInfo.id:''}</span></h3></li>
                            <li><h3 className="text-dark">Views: <span className="photo-card__infor--views text-info">{photoInfo.views?photoInfo.views:''}</span></h3></li>
                            <li><h3 className="text-dark">Taken From: <span className="photo-card__infor--released text-warning">{photoInfo.dates.taken?photoInfo.dates.taken:''}</span></h3></li>
                        </List>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default PhotoCard
