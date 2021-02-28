import React from 'react';
import landingPageSection from '../../helpers/landingPageSectionHoc';

class About extends React.Component {
  runDisplayAnimation() {
    console.log('About section display animation');
  }

  render() {
    return <div className="landing-section--title">Despre </div>;
  }
}

export default landingPageSection(About);
