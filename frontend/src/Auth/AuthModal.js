import React from 'react';
import ReactModal from 'react-modal';
import AuthTabs from './AuthTabs';

import '../Styles/AuthModal.scss';

const customStyles = {
  content: {
    marginTop: '4%',
    marginBotton: '4%'
  }
};

class ExampleApp extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <h5 onClick={this.handleOpenModal}>Auth</h5>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel='Minimal Modal Example'
          style={customStyles}
        >
          <AuthTabs />

          <i
            class='fa fa-times fa-3x'
            aria-hidden='false'
            onClick={this.handleCloseModal}
          />
        </ReactModal>
      </div>
    );
  }
}

export default ExampleApp;
