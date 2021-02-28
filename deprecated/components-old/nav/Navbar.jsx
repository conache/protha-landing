import React from 'react';
import classnames from 'classnames';
import Menu from '../shared/Menu';
import MobileMenu from '../shared/MobileMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: window.top.pageYOffset >= props.minYOffset,
      displayMobileMenu: false,
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
    const { displayMobileMenu } = this.state;
    const navClasses = classnames({
      'custom-navbar': true,
      'custom-navbar--hidden': !this.state.visible,
      'custom-navbar--visible': this.state.visible,
      'custom-navbar--no-shadow': displayMobileMenu,
    });

    return [
      <MobileMenu
        onExit={() => this.setState({ displayMobileMenu: false })}
        visible={displayMobileMenu}
      />,
      <nav className={navClasses}>
        <div className="navbar-content">
          <div>Festival small logo</div>
          <div className="menu-section">
            <div className="d-none d-sm-block align-self-end">
              <Menu />
            </div>
            <div className="d-block d-sm-none">
              <button onClick={() => this.setState({ displayMobileMenu: !displayMobileMenu })}>
                <FontAwesomeIcon icon={displayMobileMenu ? faTimes : faBars} size="lg" />
              </button>
            </div>
          </div>
        </div>
      </nav>,
    ];
  }
}
