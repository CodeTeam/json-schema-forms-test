import React, { Component, PropTypes } from 'react';
import Form from 'react-jsonschema-form';

export default class ImageForm extends Component {
  static propTypes = {
    formData: PropTypes.object,
    image: PropTypes.string,
    onSkip: PropTypes.func,
    onSubmit: PropTypes.func,
    schema: PropTypes.object,
    uiSchema: PropTypes.object,
  }

  render() {
    const {
      formData,
      image,
      onSkip,
      onSubmit,
      schema,
      uiSchema,
    } = this.props;

    return (
      <div>
        <div className="page-header" />
        <div className="row">
          <div className="col-md-8">
            <img src={image} style={{ width: '100%' }} />
          </div>

          <div className="col-md-4">
            <Form formData={formData} onSubmit={onSubmit} schema={schema} uiSchema={uiSchema}>
              <div className="btn-toolbar">
                <button className="btn btn-default" onClick={onSkip} type="button">Пропустить</button>
                <button className="btn btn-success" type="submit">Отправить</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
