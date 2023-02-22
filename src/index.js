import React from 'react';
import ReactDOM from 'react-dom/client';
import RatingComponent from './components/RatingComponent';
import AttributionComponent from './components/AttributionComponent';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RatingComponent title="How did we do?" description="
      Please let us know how we did with your support request. All feedback is appreciated 
      to help us improve our offering!" ratingOptions={[1, 2, 3, 4, 5 ]}/>
    <AttributionComponent author="Jenn Chavarría" profileLink="https://github.com/jenn-chav13"/> 
  </React.StrictMode>
);


