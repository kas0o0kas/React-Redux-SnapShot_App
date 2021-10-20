import { setPage } from 'features/PageSlice/PageSlice';
import { loadPhotoSearch, loadPhotoSuggess } from 'features/PhotoSlice/PhotoSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Col, Container, Form, Input } from 'reactstrap';
import './Header.scss';


const Header = () => {
    const query = useSelector(state => state.photo);    
    const history = useHistory();
    const dispatch = useDispatch();
    const onButtonClick = (e) => {
        e.preventDefault();
        const action1 = loadPhotoSuggess(e.target.value);
        const action2 = setPage(1);
        dispatch(action1);
        dispatch(action2);
        history.push(`/main/${e.target.value}`);
    }

    const onInputSubmit = (e) => {
        e.preventDefault();
        const action1 = loadPhotoSearch(e.target[0].value);
        const action2 = setPage(1);
        dispatch(action1);
        dispatch(action2);
        history.push(`/main/${e.target[0].value}`);
        
    }
    return (
        <div className="header">
            <Container>
                <Col xs="auto" className="header__logo">
                    <a href="/" >
                        SnapShot
                    </a>
                </Col>
                <Col xs="auto" className="header__search">
                    <Form onSubmit={onInputSubmit}>
                        <Input placeholder="Search..." ></Input>
                    </Form>
                </Col>
                <Col xs="auto" className="justify-content-between header__suggess" >
                        <Button className={query==='mountains'?'active':''} color="success" value="mountains" onClick={onButtonClick}>Mountains</Button>
                        <Button className={query==='beaches'?'active':''} color="success" value="beaches" onClick={onButtonClick}>Beaches</Button>
                        <Button className={query==='birds'?'active':''} color="success" value="birds" onClick={onButtonClick}>Birds</Button>
                        <Button className={query==='food'?'active':''} color="success" value="food" onClick={onButtonClick}>Food</Button>
                </Col>
            </Container>   
        </div>
    )
}

export default Header
