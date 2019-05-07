/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

class Gift extends Component {
  state = {
    person: '',
    present: '',
  }

  static propTypes = {
    gift: PropTypes.objectOf(PropTypes.any),
    removeGift: PropTypes.func,
  };

  static defaultProps = {
    gift: {},
    removeGift: () => { },
  };

  render() {
    const { gift, removeGift } = this.props;

    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Person</Form.Label>
            <Form.Control
              className="input-person"
              onChange={event => this.setState({ person: event.target.value })}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>present</Form.Label>
            <Form.Control
              className="input-present"
              onChange={event => this.setState({ present: event.target.value })}
            />
          </Form.Group>
        </Form>

        <Button
          className="btn-remove"
          onClick={() => removeGift(gift.id)}
        >
          Remove Gift
        </Button>
      </div>
    );
  }
}

export default Gift;
