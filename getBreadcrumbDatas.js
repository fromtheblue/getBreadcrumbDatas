/**
 * Created by Wangqiong on 2017/2/26.
 * 获取用于生成面包屑导航的数据
 * note:
 *      判断leafData与datas中的某个数据相等的方法是:
 *      1.若是拥有id则通过id判断
 *      2.若是没有id则直接比较是否相等(相同)
 * params:
 *   leafData 生成面包屑最低路径的数据
 *   datas 使用的原始数据
 * */
function getBreadcrumbDatas(leafData,datas,preRender){
    var currentDatas=[leafData];
    extractData(datas);
    return currentDatas.reverse();
    function extractData(datas){
        return datas.some(function(currentData){
            if(currentData.id===leafData.id||currentData===leafData){
                return true;
            }
            if(currentData.children){
                if(extractData(currentData.children)){
                    currentDatas.push(currentData);
                    return true;
                }
            }
            return false;
        })
    }
}
