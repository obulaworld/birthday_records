import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class Radio extends Component {
	constructor(props) {
        super(props)
        this.state = {
          radioClick: "name",
          selectedOption: ''
        };
	}

	onChange(type) {
    this.setState({ selectedOption: type })
    const { sortBy } = this.props;
    sortBy(type);
		// on radio state change handler
	}

	render() {
		return (
  <div className='radioButtons'>
    <div className='left'>
      <input id='sortName' name="sort" type='radio' onChange={() => { this.onChange('name') }} />
      <label>&nbsp;&nbsp;Sort by name</label>
    </div>
    <div className='right'>
      <input id="sortAge" name="sort" type='radio' onChange={() => { this.onChange('age') }} />
      <label>&nbsp;&nbsp;Sort by age</label>
    </div>
  </div>
);

	}
}


Radio.propTypes = {
	sortBy: PropTypes.func
}

export default Radio;
