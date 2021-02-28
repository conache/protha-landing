import React from 'react';
import landingPageSection from '../../helpers/landingPageSectionHoc';

class Program extends React.Component {
  runDisplayAnimation() {
    console.log('Program section display animation');
  }

  render() {
    return <div>Program section</div>;
  }
}

export default landingPageSection(Program);
