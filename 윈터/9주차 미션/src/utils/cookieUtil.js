import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, option) => {
	cookies.set(name, value, option);
};

// util이라는 별도의 파일을 생성하는 이유? 서비스가 커지면 저장하는 cookie들이 많아질 것.
// 유효기간, cookie 사용 범위 등 설정할 수 있는 옵션이 있음.
// cookie를 생성할때 각 옵션값 별로 필요한 설정들을 반복 설정하게 되는 것을 방지.
// singletone 패턴
