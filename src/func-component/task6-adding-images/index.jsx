import React, { useEffect, useState } from "react";
import './style.scss';
import image1 from '../../assets/images/task7/4.jpg';
import image2 from '../../assets/images/task7/6.jpg';
import image3 from '../../assets/images/task7/7.jpg';
import image4 from '../../assets/images/task7/8.jpg';
import image5 from '../../assets/images/task7/9.jpg';
import SpanImageComp from './imageCompo';


const ImagesAfterTime = () => {
    const [imageList, setImageList] = useState([])
    const [pageLoading, setPageLoading] = useState(false)
    // const [loadingNum, setLoadingNum]=useState([])

    useEffect(() => {
        setPageLoading(true)
        setTimeout(() => {
            setImageList([
                { image: image1 },
                { image: image2 },
                { image: image3 },
                { image: image4 },
                { image: image5 },
            ])
        }, 5000)
    }, [])
    useEffect(() => {
        if (imageList.length) {
            setPageLoading(false)
        }
    }, [imageList])
    // const loadingNumbers =()=>{
    //     if(pageLoading){
    //         for(let i=0; i<=5; i++){

    //         }
    //     }
    // }
    return <div className="image-section">
        {!pageLoading ? <div className="images-box">
            {imageList.length ? imageList.map((item, index) => {
                return <SpanImageComp key={index} data={item} />
            }) : null}
        </div> : <p>Comming Soon...</p>}
    </div>
}
export default ImagesAfterTime