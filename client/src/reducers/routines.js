export default (routines = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...routines, action.payload];
    default:
      return routines;
  }
}