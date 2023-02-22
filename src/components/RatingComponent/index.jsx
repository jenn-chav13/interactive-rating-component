import { useState } from "react";
import Panel from "./panel";
import RatingComponentForm from "./ratingComponentForm";
import StarIcon from '../../assets/icon-star.svg';
import ThankYouIllustration from '../../assets/illustration-thank-you.svg';
import "./styles/styles.css";



const RatingComponent = ({ title, description, ratingOptions }) => {

    const [formData, setFormData] = useState({
        rating: ""
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData?.rating) {
            setIsSubmitted(true);
        }
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            [name]: value
        });
    }

    return (
        <>
            { !isSubmitted 
            ? <Panel title={ title } 
                description={ description } 
                icon={ StarIcon } 
                form={
                    <RatingComponentForm
                        ratingOptions={ratingOptions}  
                        onChange={ handleOnChange } 
                        onSubmit={ handleSubmit }/>
                    }
            />
            : <Panel cssClass="thank-you-panel" title="Thank You!" description="
                We appreciate you taking the time to give a rating. If you ever need more support, 
                don’t hesitate to get in touch!" illustration={ ThankYouIllustration } 
                ratingMessage={`You selected ${formData?.rating} out of ${ratingOptions?.length}`}/>
            }
        </>
    );
}

export default RatingComponent;