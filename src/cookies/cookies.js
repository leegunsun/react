import Cookies from "universal-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, option = {}) => {
  // 만료 시간을 1시간 후로 설정
  const expires = new Date();
  expires.setMinutes(expires.getMinutes() + 75);

  return cookies.set(name, value, { ...option, expires });
};

export const getCookie = (name) => {
  return cookies.get(name);
};
