

const Panel = ({ cssClass, icon, illustration, title, description, form, ratingMessage  }) => {
    return (
        <div className={`cmp-rating-card ${cssClass}`}>
            { icon && 
                <div className="cmp-rating-card__icon">
                    <img src={ icon } alt="star icon" />
                </div>
            }
            <div className="cmp-rating-card__content">
                { illustration && 
                    <div className="cmp-rating-card__thankyou-illustration">
                        <img src={ illustration } alt="thank you card icon" />
                    </div>
                }
                { cssClass && 
                    <div className="cmp-rating-card__pill">
                        { ratingMessage }
                    </div>
                }
                <div className="cmp-rating-card__title">
                    { title }
                </div>
                <div className="cmp-rating-card__description">
                    { description }
                </div>
                {form && 
                    <div className="cmp-rating-card__rating-section">
                        { form }
                    </div>
                }
            </div>
        </div>
    );
}

export default Panel;