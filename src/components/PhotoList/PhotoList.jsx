import axios from 'axios';
import Photo from 'components/Photo/Photo';
import { setPage } from 'features/PageSlice/PageSlice';
import Flickr from 'Flickr/Flickr';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Row } from 'reactstrap';
import './PhotoList.scss';

const PhotoList = () => {
    //get state page and query from store
    const query = useSelector(state => state.photo);
    const page = useSelector(state => state.page);

    const dispatch = useDispatch();

    const [photolist, setPhotoList] = useState([]);

    //get tags from page-url
    const {tags} = useParams();
    console.log('tags',tags);
    
    //load data and replace photolist with it when query or tags changing
    useEffect(() => {
        loadPhotoListTagChanging();
        console.log('page',page);
    },[query,tags]);

    //load data and push it into photolist when page changing(scrolling)
    useEffect(() => {
        loadPhotoListPageChanging();
        console.log('page',page);
    },[page]);

    const loadPhotoListPageChanging = () => {
        //When tags von url not match to query then use tags to fetch data
        if(tags!==query){
            axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${Flickr.API_Key}&tags=${tags}&format=json&nojsoncallback=1&page=${page}&per_page=${Flickr.Per_Page}`)
                .then(response => {
                    console.log('data',response.data);
                    setPhotoList(photolist.concat(response.data.photos.photo));
                })
                .catch(err => {
                    console.log('Failed fetch data', err);
                })
        }
        //Else just use query as normal
        else {
            if(query!=="")
            axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${Flickr.API_Key}&tags=${query}&format=json&nojsoncallback=1&page=${page}&per_page=${Flickr.Per_Page}`)
            .then(response => {
                console.log('data',response.data);
                setPhotoList(photolist.concat(response.data.photos.photo));
            })
            .catch(err => {
                console.log('Failed fetch data', err);
            })
        }
    }

    const loadPhotoListTagChanging = () => {
        //When tags von url not match to query then use tags to fetch data
        if(tags!==query){
            axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${Flickr.API_Key}&tags=${tags}&format=json&nojsoncallback=1&page=${page}&per_page=${Flickr.Per_Page}`)
                .then(response => {
                    console.log('data',response.data);
                    setPhotoList(response.data.photos.photo);
                })
                .catch(err => {
                    console.log('Failed fetch data', err);
                })
        }
        //Else just use query as normal
        else {
            if(query!=="")
            axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${Flickr.API_Key}&tags=${query}&format=json&nojsoncallback=1&page=${page}&per_page=${Flickr.Per_Page}`)
            .then(response => {
                console.log('data',response.data);
                setPhotoList(response.data.photos.photo);
            })
            .catch(err => {
                console.log('Failed fetch data', err);
            })
        }      
    }

    console.log('photolist', photolist);

    // const pageChange = () => {
    //     setPage(page + 1);
    // }
    
    return (
        <div className="photolist">
            <InfiniteScroll
                    dataLength={photolist.length} //This is important field to render the next data
                    next={() => dispatch(setPage(page + 1))}
                    hasMore={true}
                    // loader={<h4>Loading...</h4>}
                >
                    <Row >
                        {photolist.map((item, key) => 
                            <Photo
                                item = {item}
                                key = {key}
                            />
                    
                        )}
                    </Row>
            </InfiniteScroll>
            
            
            {/* <button onClick= {pageChange}>Next Page</button> */}
        </div>
    )
}

export default PhotoList
