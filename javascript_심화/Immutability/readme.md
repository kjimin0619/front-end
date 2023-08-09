# Immutability ; 불변

- 데이터의 원본이 훼손되는 것을 막음

### CRUD

- 정보시스템에서 생성과 읽기 기능은 아주 중요함
- 수정과 삭제는 매운 쉬운 일이자 흔한 일

#### 불변함의 적용 대상?

- 변수의 이름
- 값 자체

지금부터 자바스크립트의 **불변**과 관련된 다양한 개념을 알아보자

---

# 0. 변수의 유효범위

- 자바스크립트는 변수를 불러올 때 `Scope - Script`와 `Scope - Global`에서 찾아옴
- Scope은 `Local`, `Glocal`, `Script`로 구분함

## Global

- 변수명 앞에 `var`이나 아무것도 붙이지 않는다면 해당 변수는 `Scope - Global`에 저장
- 어디서 실행하든 global에는 접근이 가능
- window 객체
- 단, **함수 내에 var 키워드를 붙여 선언한 변수**는 `Scope - Local`에 저장

## Script

- `let`, `const`를 붙이면 해당 변수는 Score-> Script에 저장

### 1. **global execute context** 에서 선언될 때

|                 |        |
| --------------- | ------ |
| a = 1           | Global |
| **var** a = 1   | Global |
| **let** a = 1   | Script |
| **const** a = 1 | Script |

### 2. **function execute context** 에서 선언될 때

|                 |        |
| --------------- | ------ |
| a = 1           | Global |
| **var** a = 1   | Local  |
| **let** a = 1   | Local  |
| **const** a = 1 | Local  |

## 정리

|                      | var | let | const |
| -------------------- | --- | --- | ----- |
| global scope         | yes | no  | no    |
| script scope         | no  | yes | yes   |
| function local scope | yes | yes | yes   |
| block scope          | no  | yes | yes   |
| 재선언               | yes | no  | no    |
| 재할당               | yes | yes | no    |

---

# 1. 데이터 타입

## Primitive Type (원시/원자 타입)

- 한번에 하나의 값만 가질 수 있음
- 하나의 고정된 저장공간 이용
- **변수에 할당된 메모리 공간**에는 **실제 값**이 저장됨
- `pass by value` : 변수를 다른 변수에 할당하면 **원본의 원시 값이 복사**되어 전달

  `number`, `String`, `Boolean`, `Undefined`, `Null`

- `immutable` : 메모리에 생성된 값들은 그 자체가 변경될 수 없음
- **재할당**은 **변수가 가리키는 메모리 공간을 바꾸는 것**이지, 메모리 공간의 값 자체를 바꾸는 것이 아님

## Object Type (참조 타입))

- 한 번에 여러 개의 값을 가질 수 있음
- 여러 개의 고정되지 않은 동적 공간 사용
- **변수**에 **메모리 주소(참조값)**가 들어가 있음
- `pass by reference` : 변수를 다른 변수에 할당하면 **원본의 참조 값이 복사**되어 전달

```
// 참조에 의한 전달
var o1 = { name: "kim" };
var o2 = o1;
console.log(o1 === o2); // true
```

`Object`, `Array`, `Function`

- **mutable**

## 참고 예시

```
// p1과 p2는 다른 메모리 공간에 저장된 동일한 값을 가짐
// 데이터 타입과 값 자체는 동일함
var p1 = 1;
var p2 = 1;
console.log(p1, p2, p1 === p2); // 1 1 true

// 객체타입은 값이 같더라도 서로 다른 객체를 생성
// 이는 각각 다른 주소로 참조됨
var o1 = { name: "kim" };
var o2 = { name: "kim" };
console.log(o1, o2, o1 === o2); // { name: 'kim' } { name: 'kim' } false
```

---

# 2. 객체의 immutability

자바스크립트의 객체가 가지는 단점 중 하나는, **여러개의 식별자가 하나의 객체를 공유**할 수 있다는 것이다. 객체 타입 변수는 객체의 메모리 주소를 가리키고 있기 때문에, 이 변수를 복사하여 전달(참조에 의한 전달)하면 동일한 메모리 공간의 객체를 가리키는 변수가 하나 더 생성된다.
<br/>

**원본 데이터의 불변성을 유지하고, 복제본에 가변성을 부여하는 방법이 있을까?**

### 1. `Object.assign(리턴될 객체, 병합할 객체)` 사용하기

```
var o1 = {name:'kim'}
var o2 = Object.assign({},o1)
console.log(o1, o2, o1 === o2); // { name: 'kim' } { name: 'kim' } false
```

### 2. `스프레드 연산자 ...` 활용하기

```
var o1 = { name: "kim", score: [1, 2] };
var o2 = { ...o1 };
console.log(o1, o2, o1 === o2); // { name: 'kim', score: [ 1, 2 ] } { name: 'kim', score: [ 1, 2 ] } false
```

### Nested object

다음과 같이 객체 안에 **객체타입의 프로퍼티**가 있는 경우를 보자

```
var o1 = { name: "kim", score: [1, 2] };
var o2 = Object.assign({}, o1);
o2.score.push(3);
console.log(o1, o2); //{ name: 'kim', score: [ 1, 2, 3 ] } { name: 'kim', score: [ 1, 2, 3 ] }
```

o2 객체의 score 멤버변수에 3을 추가했을 때 o1의 score에도 추가된 것을 확인할 수 있다. 이는 배열객체인 **score 프로퍼티를 복사**할 때 **위치 정보**를 복제하기 때문이다.

이를 방지하려면, 복제할 객체 안의 **객체 프로퍼티**는 따로 `concat`이나 `slice`와 같은 별도의 복제 작업을 수행해야 한다.

```
var o1 = { name: "kim", score: [1, 2] };
var o2 = Object.assign({}, o1);
o2.score = o2.score.concat() // 추가적인 복제자겁
o2.score.push(3);
console.log(o1, o2); // { name: 'kim', score: [ 1, 2 ] } { name: 'kim', score: [ 1, 2, 3 ] }
```

이렇게 원본의 **불변함**을 유지할 수 있다!

---

# 3. 가변과 불변 API

### push : 원본을 바꿈(원본을 mutable)

```
var score = [1,2,3]
score.push(4)
console.log(score); // [1,2,3,4]
```

### concat : 복제된 객체 리턴(원본을 immutable)

```
var score = [1,2,3]
var score2 = score.concat(4)
console.log(score) // [1,2,3]
```

---

# 4. Object freeze : 불변의 객체 만들기

```
var o1 = { name: "kim", score: [1, 2] };
Object.freeze(o1);
o1.name = "lee"; // 불가능
console.log(o1); // { name: 'kim', score: [ 1, 2 ] }

// nested object 객체 프로퍼티
o1.score.push(3); // 가능
console.log(o1); // { name: 'kim', score: [ 1, 2, 3 ] }

// 객체 프로퍼티도 불변으로 만드려면
Object.freeze(o1.score);
// o1.score.push(4); // 에러발생 ; 불가능

```

## Const vs Object freeze

### `const`

- 변수가 가리키는 객체(메모리 주소)를 바꾸지 못하도록 강제
- **이름을 규제**하는 것

### `freeze`

- 변수의 프로퍼티(값) 자체를 바꾸지 못하도록 강제
- **값**을 규제하는 것

```
const o1 = { name: "kim" };
Object.freeze(o1);

const o2 = { name: "lee" };
// o1 = o2; // error: const 변수가 가리키는 객체 자체(주소)를 바꿀 수 없음

o1.name = "park"; // 적용 X : o1의 값이 freeze 되어버렸기 때문에 수정불가능함

```
