import React from 'react';
import landingPageSection from '../../helpers/landingPageSectionHoc';

class Sponsors extends React.Component {
  runDisplayAnimation() {
    console.log('Sponsors section display animation');
  }

  render() {
    return <div>Sponsors section</div>;
  }
}

export default landingPageSection(Sponsors);
