const flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
export default {
    // baseUrl:"https://mall.ixhow.com/",
    baseUrl:"http://39.103.138.164:8081/",
    baseImage:"https://qiniu.ixhow.com",
    uploadUrl:"https://https://up-z0.qiniup.com",
    isMobile:flag
}