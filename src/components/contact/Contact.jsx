import React from 'react';
import landingPageSection from '../../helpers/landingPageSectionHoc';

class Contact extends React.Component {
  runDisplayAnimation() {
    console.log('Contact section display animation');
  }

  render() {
    return <div>Contact section</div>;
  }
}

export default landingPageSection(Contact);
