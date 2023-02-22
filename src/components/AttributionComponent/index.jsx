

import './styles/styles.css';
const AttributionComponent = ({author, profileLink}) => {
    return (
        <div class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href={profileLink}>{author}</a>.
        </div>
    )
}

export default AttributionComponent;