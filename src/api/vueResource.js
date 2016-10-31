/**
 * Created by Bruce.Liu on 2016-09-07.
 */
import Vue from "vue";
import VueResource from "vue-resource";

Vue.use(VueResource);
// HTTP相关
Vue.http.options.crossOrigin = true;
// Vue.http.options.credentials = true;

Vue.http.interceptors.push(function(request,next){
  // let headers = request.headers || (request.headers = {});
  // let token = "adas";
  // if (token !== null && token !== 'undefined') {
  //   headers.Authorization = token
  let ls = window.localStorage;
  request.headers['Authorization'] = ls.getItem('token');
  request.headers['SM_USER'] = ls.getItem('username');

  // }
  next(function (response) {
    // console.log(this);
    // this.showLoading = false;  //此处的this是正确的
  })
});

const xhr = ({ url, body, method = 'get' }) => {
    // 引入了ES6的Promise实现
    return new Promise((resolve, reject) => {
        Vue.http[method.toLowerCase()](url, body)
            .then(({ data }) => { // 从封装体中解构出data字段
                if (!data) // 读取undefined/null的属性会报错
                    return resolve(null);

                if (data._code)
                    return errHandler(data._msg);
                if(data.data)
                  return resolve(data.data);
                if(typeof(data) === 'string')
                  return resolve(JSON.parse(data));

                return resolve(data);
            }, errHandler)
    })
};

var errHandler = (e) => {
    //alert('[ XHR:Failed ] 详情请看控制台');
    console.error(e);
};
export default xhr;


