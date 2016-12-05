const IMAGES_FETCH_LIST = 'IMAGES_FETCH_LIST';
const IMAGES_SKIP_IMAGE = 'IMAGES_SKIP_IMAGE';
const IMAGES_SUBMIT_CHOISE1 = 'IMAGES_SUBMIT_CHOISE1';
const IMAGES_SUBMIT_CHOISE2 = 'IMAGES_SUBMIT_CHOISE2';
const IMAGES_FORMS_CLEAR = 'IMAGES_FORMS_CLEAR';

const initialState = {
  images: ['https://goo.gl/RWzKlm', 'https://goo.gl/WgcOhs', 'https://goo.gl/hHJM4X', 'https://goo.gl/KMClSJ'],
  currentImageIndex: 0,
  form1Schema: {
    type: 'object',
    properties: {
      radio: {
        type: 'boolean',
        title: 'Соответствует?',
        enumNames: [
          'Да',
          'Нет',
        ],
      },
      secret: {
        type: 'string',
      },
    },
  },
  form2Schema: {
    type: 'object',
    properties: {
      lastName: {
        type: 'string',
        title: 'Фамилия'
      },
      firstName: {
        type: 'string',
        title: 'Имя'
      },
      middleName: {
        type: 'string',
        title: 'Отчество'
      },
      secret: {
        type: 'string',
      },
    },
  },
  form1UiSchema: {
    radio: {
      'ui:widget': 'radio'
    },
    secret: {
      'ui:widget': 'hidden'
    },
  },
  form2UiSchema: {
    secret: {
      'ui:widget': 'hidden'
    },
  },
  result1: {},
  result2: {}, 
};

export default (state = initialState, action) => {
  switch (action.type) {
    case IMAGES_FETCH_LIST: {
      return state;
    }

    case IMAGES_SKIP_IMAGE: {
      return {
        ...state,
        currentImageIndex: ++state.currentImageIndex,
      };
    }

    case IMAGES_SUBMIT_CHOISE1: {
      return {
        ...state,
        result1: {
          ...state.result1,
          [action.payload.secret]: action.payload,
        },
        currentImageIndex: ++state.currentImageIndex,
      };
    }

    case IMAGES_SUBMIT_CHOISE2: {
      return {
        ...state,
        result2: {
          ...state.result2,
          [action.payload.secret]: action.payload,
        },
        currentImageIndex: ++state.currentImageIndex,
      };
    }

    case IMAGES_FORMS_CLEAR: {
      return {
        ...state,
        result1: {},
        result2: {},
        currentImageIndex: 0,
      }
    }

    default: {
      return state
    }
  }
}

export function skipImage(result) {
  return (dispatch) => {
    dispatch({
      type: IMAGES_SKIP_IMAGE,
    });
  };
}

export function form1Submit(result) {
  return (dispatch) => {
    dispatch({
      type: IMAGES_SUBMIT_CHOISE1,
      payload: result,
    });
  };
}

export function form2Submit(result) {
  return (dispatch) => {
    dispatch({
      type: IMAGES_SUBMIT_CHOISE2,
      payload: result,
    });
  };
}

export function formsClear(result) {
  return (dispatch) => {
    dispatch({
      type: IMAGES_FORMS_CLEAR,
    });
  };
}
