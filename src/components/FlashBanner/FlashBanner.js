/**
 * Created by saad bin saeed on 3/2/17.
 */
import React, { PropTypes } from 'react';
import './FlashBanner.css';
import { hideFlashBanner } from '../../redux/actions/flashBanner';
const propTypes = {
  show: PropTypes.bool,
  showClose: PropTypes.bool,
  bannerText: PropTypes.string,
  buttonText: PropTypes.string,
  bannerBgColor: PropTypes.string,
  buttonBgColor: PropTypes.string,
};

const defaultProps = {
  show: false,
  showClose: false,
  bannerText: 'hello i am your flash banner',
  buttonText: 'Explore',
  bannerBgColor: '#10c413',
  buttonBgColor: null,

};

class FlashBanner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: props.show,
    };
    this.handleCloseButton = this.handleCloseButton.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      show: nextProps.show
    });
  }

  handleCloseButton() {
    this.setState({ show: false });
    this.props.store.dispatch(hideFlashBanner());
  }

  render() {
    const { show } = this.state;
    if (!show) {
      return <div />;
    }
    const { bannerText, buttonText, showClose, bannerBgColor, buttonBgColor } = this.props;
    const bannerStyle = {
      backgroundColor: bannerBgColor,
    };
    const buttonStyle = {};
    if (buttonBgColor) {
      buttonStyle.backgroundColor = buttonBgColor;
    }

    return (
      <div className="flash-banner" style={bannerStyle}>
        { bannerText } &nbsp;&nbsp;
        <button style={buttonStyle}>{ buttonText }</button>
        {
          showClose ? <span className="close-icon" onClick={this.handleCloseButton} >&#10006;</span>: null
        }
      </div>
    );
  }

}
FlashBanner.propTypes = propTypes;
FlashBanner.defaultProps = defaultProps;
export default FlashBanner;
