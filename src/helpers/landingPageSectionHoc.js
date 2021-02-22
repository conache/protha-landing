import React from 'react';

export default function landingPageSection(HocComponent) {
  return class LandingPageSection extends HocComponent {
    constructor(props) {
      super(props);
      this.state = {
        isVisible: false,
      };
      this.compRef = React.createRef();
      this.initScrollObserver();
    }

    initScrollObserver() {
      this.scrollObserver = new IntersectionObserver(
        (entries, scrollObserver) => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) {
              return;
            } else {
              this.setState({ isVisible: true });
              scrollObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.75 },
      );
    }

    componentDidUpdate(prevProps, prevState) {
      if (this.state.isVisible && !prevState.isVisible && this.runDisplayAnimation) {
        this.runDisplayAnimation();
      }
    }

    componentDidMount() {
      if (this.compRef.current) {
        this.scrollObserver.observe(this.compRef.current);
      }
    }

    render() {
      return (
        <div ref={this.compRef} className={`landing-section ${this.props.className}`}>
          {super.render()}
        </div>
      );
    }
  };
}
