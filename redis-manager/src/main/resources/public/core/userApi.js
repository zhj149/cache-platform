/******************************** com.newegg.ec.cache.app.controller.MonitorController ********************************/
<<<<<<< HEAD
=======
/**
 * @type GET 
 * @param  int 
 * @param  int 
 * @param  int 
 * @param  String 
 * @param  String
 */
function  monitorGetAvgField(clusterId,startTime,endTime,host,key,callback){
   ajax.async_get("/monitor/getAvgField?clusterId="+clusterId+"&startTime="+startTime+"&endTime="+endTime+"&host="+host+"&key="+key+"",callback);
}
>>>>>>> 1782c076676c99bec7e5c085b767dead0e2d5c17
/**
 * @type GET 
 * @param  int 
 * @param  int 
 * @param  int 
 * @param  String 
<<<<<<< HEAD
 * @param  String 
 * @param  String
 */
function  monitorGetGroupNodeInfo(clusterId,startTime,endTime,host,type,date,callback){
   ajax.async_get("/monitor/getGroupNodeInfo?clusterId="+clusterId+"&startTime="+startTime+"&endTime="+endTime+"&host="+host+"&type="+type+"&date="+date+"",callback);
=======
 * @param  int
 */
function  monitorGetMinField(clusterId,startTime,endTime,key,limit,callback){
   ajax.async_get("/monitor/getMinField?clusterId="+clusterId+"&startTime="+startTime+"&endTime="+endTime+"&key="+key+"&limit="+limit+"",callback);
}
/**
 * @type POST 
 * @param  SlowLogParam{hostList=null, logLimit=0}
 */
function  monitorSlowLogs(logParam,callback){
   ajax.async_post("/monitor/slowLogs",logParam,callback);
>>>>>>> 1782c076676c99bec7e5c085b767dead0e2d5c17
}
/**
 * @type GET 
 * @param  int 
 * @param  int 
 * @param  int 
<<<<<<< HEAD
 * @param  String 
 * @param  int
 */
=======
 * @param  String
 */
function  monitorGetLastNodeInfo(clusterId,startTime,endTime,host,callback){
   ajax.async_get("/monitor/getLastNodeInfo?clusterId="+clusterId+"&startTime="+startTime+"&endTime="+endTime+"&host="+host+"",callback);
}
/**
 * @type GET 
 * @param  int 
 * @param  int 
 * @param  int 
 * @param  String 
 * @param  int
 */
>>>>>>> 1782c076676c99bec7e5c085b767dead0e2d5c17
function  monitorGetMaxField(clusterId,startTime,endTime,key,limit,callback){
   ajax.async_get("/monitor/getMaxField?clusterId="+clusterId+"&startTime="+startTime+"&endTime="+endTime+"&key="+key+"&limit="+limit+"",callback);
}
/**
 * @type GET 
 * @param  int 
 * @param  int 
 * @param  int 
<<<<<<< HEAD
 * @param  String 
 * @param  int
 */
function  monitorGetMinField(clusterId,startTime,endTime,key,limit,callback){
   ajax.async_get("/monitor/getMinField?clusterId="+clusterId+"&startTime="+startTime+"&endTime="+endTime+"&key="+key+"&limit="+limit+"",callback);
=======
 * @param  String
 */
function  monitorGetAllField(clusterId,startTime,endTime,key,callback){
   ajax.async_get("/monitor/getAllField?clusterId="+clusterId+"&startTime="+startTime+"&endTime="+endTime+"&key="+key+"",callback);
>>>>>>> 1782c076676c99bec7e5c085b767dead0e2d5c17
}
/**
 * @type GET 
 * @param  int 
 * @param  int 
 * @param  int 
<<<<<<< HEAD
 * @param  String 
 * @param  String
 */
function  monitorGetAvgField(clusterId,startTime,endTime,host,key,callback){
   ajax.async_get("/monitor/getAvgField?clusterId="+clusterId+"&startTime="+startTime+"&endTime="+endTime+"&host="+host+"&key="+key+"",callback);
}
/**
 * @type GET 
 * @param  int 
 * @param  int 
 * @param  int 
 * @param  String
 */
function  monitorGetAllField(clusterId,startTime,endTime,key,callback){
   ajax.async_get("/monitor/getAllField?clusterId="+clusterId+"&startTime="+startTime+"&endTime="+endTime+"&key="+key+"",callback);
=======
 * @param  String 
 * @param  String 
 * @param  String
 */
function  monitorGetGroupNodeInfo(clusterId,startTime,endTime,host,type,date,callback){
   ajax.async_get("/monitor/getGroupNodeInfo?clusterId="+clusterId+"&startTime="+startTime+"&endTime="+endTime+"&host="+host+"&type="+type+"&date="+date+"",callback);
}
/******************************** com.newegg.ec.cache.app.controller.ClusterController ********************************/
/**
 * @type GET 
 * @param  int
 */
function  getCluster(id,callback){
   ajax.async_get("/cluster/getCluster?id="+id+"",callback);
}
/**
 * @type GET 
 * @param  String 
 * @param  int
 */
function  getClusterInfo(ip,port,callback){
   ajax.async_get("/cluster/getClusterInfo?ip="+ip+"&port="+port+"",callback);
>>>>>>> 1782c076676c99bec7e5c085b767dead0e2d5c17
}
/**
 * @type GET 
 * @param  int 
 * @param  int 
 * @param  int 
 * @param  String
 */
<<<<<<< HEAD
function  monitorGetLastNodeInfo(clusterId,startTime,endTime,host,callback){
   ajax.async_get("/monitor/getLastNodeInfo?clusterId="+clusterId+"&startTime="+startTime+"&endTime="+endTime+"&host="+host+"",callback);
}
/**
 * @type POST 
 * @param  SlowLogParam{hostList=null, logLimit=0}
 */
function  monitorSlowLogs(logParam,callback){
   ajax.async_post("/monitor/slowLogs",logParam,callback);
=======
function  nodeList(address,callback){
   ajax.async_get("/cluster/nodeList?address="+address+"",callback);
}
/**
 * @type GET 
 * @param  String
 */
function  getRedisConfig(address,callback){
   ajax.async_get("/cluster/getRedisConfig?address="+address+"",callback);
>>>>>>> 1782c076676c99bec7e5c085b767dead0e2d5c17
}
/******************************** com.newegg.ec.cache.app.controller.ClusterController ********************************/
/**
 * @type GET 
 * @param  int
 */
function  getCluster(id,callback){
   ajax.async_get("/cluster/getCluster?id="+id+"",callback);
}
/**
 * @type GET 
 * @param  String
 */
<<<<<<< HEAD
function  getRedisConfig(address,callback){
   ajax.async_get("/cluster/getRedisConfig?address="+address+"",callback);
=======
function  removeCluster(clusterId,callback){
   ajax.async_get("/cluster/removeCluster?clusterId="+clusterId+"",callback);
>>>>>>> 1782c076676c99bec7e5c085b767dead0e2d5c17
}
/**
 * @type GET 
 * @param  String 
 * @param  int
 */
<<<<<<< HEAD
function  getClusterInfo(ip,port,callback){
   ajax.async_get("/cluster/getClusterInfo?ip="+ip+"&port="+port+"",callback);
=======
function  getNodeInfo(address,callback){
   ajax.async_get("/cluster/getNodeInfo?address="+address+"",callback);
>>>>>>> 1782c076676c99bec7e5c085b767dead0e2d5c17
}
/**
 * @type GET 
 * @param  String
 */
function  nodeList(address,callback){
   ajax.async_get("/cluster/nodeList?address="+address+"",callback);
}
/**
 * @type GET 
 * @param  String
 */
<<<<<<< HEAD
function  getNodeInfo(address,callback){
   ajax.async_get("/cluster/getNodeInfo?address="+address+"",callback);
=======
function  detailNodeList(address,callback){
   ajax.async_get("/cluster/detailNodeList?address="+address+"",callback);
}
/**
 * @type GET 
 * @param  int
 */
function  getClusterHost(id,callback){
   ajax.async_get("/cluster/getClusterHost?id="+id+"",callback);
}
/**
 * @type POST 
 * @param  com.newegg.ec.cache.app.model.RedisQueryParam@3b353651
 */
function  redisQuery(redisQueryParam,callback){
   ajax.async_post("/cluster/redisQuery",redisQueryParam,callback);
}
/**
 * @type POST 
 * @param  Cluster{id=0, clusterName='null', userGroup='null', address='null', sslUsername='null', sslPassword='null', clusterType='null'}
 */
function  addCluster(cluster,callback){
   ajax.async_post("/cluster/addCluster",cluster,callback);
>>>>>>> 1782c076676c99bec7e5c085b767dead0e2d5c17
}
/**
 * @type POST 
 * @param  com.newegg.ec.cache.app.model.RedisQueryParam@b7d2d51
 */
function  redisQuery(redisQueryParam,callback){
   ajax.async_post("/cluster/redisQuery",redisQueryParam,callback);
}
/**
 * @type GET 
 * @param  String
 */
function  redisDbList(address,callback){
   ajax.async_get("/cluster/redisDbList?address="+address+"",callback);
}
<<<<<<< HEAD
/**
 * @type POST 
 * @param  Cluster{id=0, clusterName='null', userGroup='null', address='null', sslUsername='null', sslPassword='null', clusterType='null'}
 */
function  addCluster(cluster,callback){
   ajax.async_post("/cluster/addCluster",cluster,callback);
=======
/******************************** com.newegg.ec.cache.app.controller.AlarmController ********************************/
/**
 * @type POST 
 * @param  ClusterCheckRule{id=null, clusterId='null', limitName='null', formula='null', description='null', updateTime='0'}
 */
function  addRule(rule,callback){
   ajax.async_post("/alarm/addRule",rule,callback);
>>>>>>> 1782c076676c99bec7e5c085b767dead0e2d5c17
}
/**
 * @type GET 
 * @param  String
 */
<<<<<<< HEAD
function  detailNodeList(address,callback){
   ajax.async_get("/cluster/detailNodeList?address="+address+"",callback);
}
/**
 * @type GET 
 * @param  int
 */
function  getClusterHost(id,callback){
   ajax.async_get("/cluster/getClusterHost?id="+id+"",callback);
}
/**
 * @type GET 
 * @param  User{id=0, username='null', password='null', userGroup='null'}
 */
function  listCluster(callback){
   ajax.async_get("/cluster/listCluster",callback);
=======
function  getCaseList(clusterId,callback){
   ajax.async_get("/alarm/getCaseLogs?clusterId="+clusterId+"",callback);
}
/**
 * @type POST 
 * @param  ClusterCheckRule{id=null, clusterId='null', limitName='null', formula='null', description='null', updateTime='0'}
 */
function  checkRule(rule,callback){
   ajax.async_post("/alarm/checkRule",rule,callback);
}
/**
 * @type POST 
 * @param  java.util.List
 */
function  countTotalAlarm(clusterIds,callback){
   ajax.async_post("/alarm/countTotal",clusterIds,callback);
>>>>>>> 1782c076676c99bec7e5c085b767dead0e2d5c17
}
/**
 * @type GET 
 * @param  String
 */
<<<<<<< HEAD
function  removeCluster(clusterId,callback){
   ajax.async_get("/cluster/removeCluster?clusterId="+clusterId+"",callback);
=======
function  getRuleList(clusterId,callback){
   ajax.async_get("/alarm/getRuleList?clusterId="+clusterId+"",callback);
>>>>>>> 1782c076676c99bec7e5c085b767dead0e2d5c17
}
/**
 * @type GET 
 * @param  String
 */
<<<<<<< HEAD
function  getClusterInfoByAddress(address,callback){
   ajax.async_get("/cluster/getClusterInfoByAddress?address="+address+"",callback);
}
/**
 * @type GET 
 * @param  User{id=0, username='null', password='null', userGroup='null'}
 */
function  getClusterListInfo(callback){
   ajax.async_get("/cluster/getClusterListInfo",callback);
=======
function  deleteCaseLog(logId,callback){
   ajax.async_get("/alarm/deleteCaseLog?logId="+logId+"",callback);
}
/**
 * @type GET 
 * @param  String
 */
function  deleteRule(ruleId,callback){
   ajax.async_get("/alarm/deleteRule?ruleId="+ruleId+"",callback);
>>>>>>> 1782c076676c99bec7e5c085b767dead0e2d5c17
}
/******************************** com.newegg.ec.cache.app.controller.UserController ********************************/
/**
 * @type GET
 */
function  list(callback){
   ajax.async_get("/user/listUser",callback);
}
/**
 * @type GET 
 * @param  int
 */
function  removeUser(id,callback){
   ajax.async_get("/user/removeUser?id="+id+"",callback);
}
/**
 * @type GET 
 * @param  int
 */
function  getUser(id,callback){
   ajax.async_get("/user/getUser?id="+id+"",callback);
}
/**
 * @type GET 
 * @param  int
 */
function  removeUser(id,callback){
   ajax.async_get("/user/removeUser?id="+id+"",callback);
}
/**
 * @type POST 
 * @param  User{id=0, username='null', password='null', userGroup='null'} 
 * @param  Cluster{id=0, clusterName='null', userGroup='null', address='null', sslUsername='null', sslPassword='null', clusterType='null'}
 */
<<<<<<< HEAD
function  addUser(user,cluster,callback){
   ajax.async_post("/user/addUser",user,cluster,callback);
=======
function  listGroup(id,callback){
   ajax.async_get("/user/listGroup?id="+id+"",callback);
>>>>>>> 1782c076676c99bec7e5c085b767dead0e2d5c17
}
