## Redux 소개

: 애플리케이션의 복잡성을 낮추고, 코드가 가져올 결과들을 예측가능하게 만들어주는 도구

### 핵심 기능

- `store`
  - `state` : 직접 접속할 수 없는 데이터
  - `reducer` :
    - state 가공함수의 집합
    - dispatch로부터 전달받은 action에 대응하여 특정 행위 수행
    - state를 입력값으로 하고 action을 참조하여 **새로운 state** 값을 만들어 리턴
  - `dispatch` :
    - `reducer` 호출 후 state 값 변경
    - `reducer`에게 현재 state와 action 객체 전달
  - `subscribe` : state 값이 바뀔 떄마다 자동 렌더링 제공
  - `getState` : 직접적인 데이터 공급 수행
- `action` 객체 : 웹 app 에서의 요청사항
- `render` : UI를 만들어주는 부분. 직접 짜야 함.

### Redux의 중요성

- **time traveling** 기능
  - 각각의 변화가 생겼을 때, 어플리케이션 내부에 어떤 변화가 일어났는지 기록
  - 과거의 변화도 확인할 수 있으며 상태 복원도 가능
- **중앙 집중적인 데이터 store**을 통해서 쉬운 어플리케이션 개발 가능
