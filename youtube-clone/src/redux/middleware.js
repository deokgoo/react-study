export default store => next => action => {
  console.log('current state', store.getState());
  console.log('action', action);

  // 액션을 다음 미들웨어, 혹은 리듀서로 넘김
  const result = next(action);
  // 액션 처리 후의 스토어 상태 기록
  console.log('next state', store.getState());
  console.log('=========');

  return result;
};