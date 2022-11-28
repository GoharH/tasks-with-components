import React from "react";
import './style.scss';
import SpanImage from './span-comp';
import image1 from '../../images/task7/1.jpg';
import image2 from '../../images/task7/2.jpg';
import image3 from '../../images/task7/3.jpg';
import image4 from '../../images/task7/4.jpg';
import image5 from '../../images/task7/5.jpg';
import image6 from '../../images/task7/6.jpg';
import image7 from '../../images/task7/7.jpg';
import image8 from '../../images/task7/8.jpg';
import image9 from '../../images/task7/9.jpg';



class ImageRandom extends React.Component {
    state = {
        imageList: [
            { bgImage: image1 },
            { bgImage: image2 },
            { bgImage: image3 },
            { bgImage: image4 },
            { bgImage: image5 },
            { bgImage: image6 },
            { bgImage: image7 },
            { bgImage: image8 },
            { bgImage: image9 },
        ]
    }
    handleClick = () => {
        let { imageList } = this.state
        this.setState(imageList.sort(() => Math.random() - 0.5))
        console.log(imageList)
    }
    render() {
        return <section>
            <div>
                <button onClick={this.handleClick}>Random</button>
            </div>
            <div className="image-box">
                {this.state.imageList.map((item, index) => {
                    return <SpanImage key={index} bgImage={item.bgImage} />
                })}
            </div>
        </section >
    }
}
export default ImageRandom