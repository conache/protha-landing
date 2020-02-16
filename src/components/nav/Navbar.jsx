import React from 'react';
import classnames from 'classnames';
import Menu from '../shared/Menu';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: window.top.pageYOffset >= props.minYOffset,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.handleScroll());
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.handleScroll());
  }

  handleScroll() {
    const { minYOffset } = this.props;
    const visible = window.top.pageYOffset >= minYOffset;

    this.setState({ visible });
  }

  render() {
    const navClasses = classnames({
      'custom-navbar': true,
      'custom-navbar--hidden': !this.state.visible,
      'custom-navbar--visible': this.state.visible,
    });

    return (
      <nav className={navClasses}>
        <div className="navbar-content">
          <div>Festival small logo</div>
          <div className="menu-section">
            <div className="d-none d-sm-block align-self-end">
              <Menu />
            </div>
            <div className="d-block d-sm-none"></div>
          </div>
        </div>
      </nav>
    );
  }
}
