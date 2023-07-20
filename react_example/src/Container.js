// 컴포넌트 자체를 다른 함수의 props로 전달할 수 있음
const Container = ({ children }) => {
  return (
    <div
      style={{
        margin: 20,
        padding: 20,
        border: "1px solid grey",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
