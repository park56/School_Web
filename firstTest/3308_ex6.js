/**
 * 다음과 같은 기능을 하는 함수 smaller를 화살표 함수를 이용해 작성하라.
 * 정수 두 개를 받아서 둘 중 작은 수를 반환한다.
 * 아래 코드를 실행했을 때 콘솔에 정상적으로 5와 7이 출력되도록 코드를 완성하라.
 */

// 함수를 이곳에 화살표 함수를 이용해 작성
function smaller(one, two) {
    if(one < two){
        return one
    }
    else{
        return two
    }
}
// 아래 코드는 수정하지 말 것.
console.log(smaller(7, 5));
console.log(smaller(7, 7));