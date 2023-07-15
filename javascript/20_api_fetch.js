// api : 응용 프로그램 프로그래밍 인터페이스
// 응용 프로그램에서 사용할 수 있도록,
// OS나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스

/**
 * <WEB BROWSER> = request 데이터 요청 => <SERVER> = query 데이터 검색 => <DATABASE>
 * <DATABASE> = query result 데이터 찾기 => <SERVER> = response 요청 데이터 전달 => <BROWSER>
 *
 * API 호출 ?
 * 클라이언트(WEB BROWSER)가 서버에게 데이터를 요청(reques)하고,
 * 서버가 요청받은 데이터를 전달(response)하는 클라이언트에게 과정
 */

// fetch :
// api 호출을 해주는 내장함수
// api의 response 성공객체 자체를 반환
async function getData() {
  let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  let jsonResponse = await rawResponse.json();
  console.log(jsonResponse);
}

getData();
