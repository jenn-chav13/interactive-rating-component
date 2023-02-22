
const RatingComponentForm = ({ onSubmit, onChange, ratingOptions }) => {
    return (
        <form onSubmit={onSubmit}>
            <fieldset>
                {ratingOptions.map((option) => {
                    return (
                        <div key={`key_${option}`} className="field-wrapper">
                            <input type="radio" name="rating" id={`rating_${option}`} value={option} onChange={onChange} />
                            <label htmlFor={`rating_${option}`}>{option}</label>
                        </div>
                    );
                })   
                }
            </fieldset>
            <button className="cmp-rating-card__submit-button" type="submit">Submit</button>
        </form>
    )
}

export default RatingComponentForm;