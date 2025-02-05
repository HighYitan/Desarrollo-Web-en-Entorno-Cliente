//import Carousel from "react-multi-carousel";
//import "react-multi-carousel/lib/styles.css";
import Card from '../components/Card';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Highlights(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    return(
        <Carousel autoPlay={3000} infiniteLoop={true} showThumbs={false} showStatus={false}>
            {[...Array(8)].map((_, index) => (
                <Card key={index}/>
            ))}
        </Carousel>
        
    )
}