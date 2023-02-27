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


export const changeURLArg = (url, arg, arg_val) => {
  var pattern = arg + '=([^&]*)';
  var replaceText = arg + '=' + arg_val;
  if (url.match(pattern)) {
    var tmp = '/(' + arg + '=)([^&]*)/gi';
    tmp = url.replace(eval(tmp), replaceText);
    return tmp;
  } else {
    if (url.match('[?]')) {
      return url + '&' + replaceText;
    } else {
      return url + '?' + replaceText;
    }
  }
};