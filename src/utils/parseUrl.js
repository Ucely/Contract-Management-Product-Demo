export const getURLParams = (url) => {
  // 定义一个 parse url.search 的方法
  function parse(url) {
    const obj = {};
    url.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => (obj[k] = v));
    return obj;
  }
  url = url.split('#').shift();
  return parse(url);
};
// const paramObj = getURLParams3(document.URL);

// 返回的结果 paramObj：{file: "main.js", terminal: "dev"}
