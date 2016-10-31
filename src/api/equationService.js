/**
 * Created by Bruce.Liu on 2016-09-12.
 */
import xhr from './index'
import {work_api} from "./apiConfig";

class EquationService {
  queryByTFCode(pageNum,pageSize,tfCode) {
    return xhr({
      url : work_api + "/example/equation/queryByTFCode?pageNum="+pageNum+"&pageSize="+pageSize + "&tfCode="+ tfCode
    })
  }
}

// 单例模式
export default new EquationService();
