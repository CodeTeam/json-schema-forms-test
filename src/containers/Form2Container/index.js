import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import ImageForm from 'components/ImageForm';
import { form2Submit, formsClear, skipImage } from 'redux/modules/images';

@connect(state => ({
  images: state.images.images,
  currentImageIndex: state.images.currentImageIndex,
  result: state.images.result2,
  schema: state.images.form2Schema,
  uiSchema: state.images.form2UiSchema,
}))
export default class Form2Container extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    images: PropTypes.array,
    currentImageIndex: PropTypes.number,
    result: PropTypes.object,
    schema: PropTypes.object,
    uiSchena: PropTypes.object,
  }

  componentWillMount() {
    this.props.dispatch(formsClear());
  }

  onSkip = ({ formData }) => {
    this.props.dispatch(skipImage());
  };

  onSubmit = ({ formData }) => {
    this.props.dispatch(form2Submit(formData));
  };

  render() {
    const formData = {
      secret: this.props.images[this.props.currentImageIndex],
    };

    return (
      <div>
        {this.props.currentImageIndex < this.props.images.length ? (
          <ImageForm
            formData={formData}
            image={this.props.images[this.props.currentImageIndex]}
            onSkip={this.onSkip}
            onSubmit={this.onSubmit}
            schema={this.props.schema}
            uiSchema={this.props.uiSchema}
          />
          ) : (
            <div>
              <div className="page-header">
                Результат
              </div>

              <code>
                {JSON.stringify(this.props.result)}
              </code>
            </div>
          )}
      </div>
    );
  }
}
