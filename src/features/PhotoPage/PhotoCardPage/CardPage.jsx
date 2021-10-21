import axios from 'axios';
import PhotoCard from 'components/PhotoCard/PhotoCard';
import Flickr from 'Flickr/Flickr';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Spinner } from 'reactstrap';

const CardPage = () => {

    const [photoInfo, setPhotoInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const {photoId} = useParams();
    console.log('photoId',photoId);

    useEffect(() => {
        if(photoId) {
            loadPhotoInfo();
            console.log('photoInfo',photoInfo);
        }
    },[photoId])

    const loadPhotoInfo = () => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${Flickr.API_Key}&photo_id=${photoId}&format=json&nojsoncallback=1`)
        .then(response => {
            console.log('photocard',response.data.photo);
            setPhotoInfo(response.data.photo);  
            setIsLoading(false);
        })
        .catch((error) => {
            if(error.response) {
                console.log('Failed Fetch Data',error.response.status);
            }else if(error.request) {
                console.log('Failed Fetch Data',error.request);
            }else {
                console.log('Error',error.message);
            }
            console.log('Config',error.config);

            // failed to fetch API => redirect to main page
            window.location.href = "/main";
        })
    }
    if(isLoading){
        return <Spinner children=""></Spinner>;
    }
    else {
        return (
            <div className="photocard">
                    <PhotoCard
                        photoInfo = {photoInfo}
                    />
            </div>
        )
    }
}

export default CardPage
