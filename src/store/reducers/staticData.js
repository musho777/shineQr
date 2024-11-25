const initialState = {
  uuid: null,
  id: null
};
const StaticData = (state = initialState, action) => {
  let item = { ...state };
  switch (action.type) {
    case 'AddToken':
      item.uuid = action.uuid
      item.id = action.id
      break
    default:
      break;
  }
  return item;
};
export default StaticData;
