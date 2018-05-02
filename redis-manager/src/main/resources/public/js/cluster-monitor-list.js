$(function(){
    // get slave number
    /*smarty.getSlaveNumber('cluster_slave', function(params){
        var nodes = parseInt(params['nodes']);
        var master = parseInt(params["master"]);
        var slave = nodesNum - master;
        return slave;
    });*/
})
smarty.get( "/user/listGroup?id=1", "monitor/monitor_list", "group-classify", function(){
   /* console.log("get...");*/
}, true );



$(document).on("click", ".list-active", function(res){
    var group = $(this).data("group");
    smarty.get( "/cluster/listCluster?group=" + group, "monitor/cluster_info_list", "group-id-" + group, function(obj){
        $(".cluster-info-detail").click();
    }, true );
});

$(document).on("click", ".cluster-info-detail", function(res){
    var clusterId = $(this).data("cluster-id");
    var address = $(this).data("cluster-address");
    smarty.get( "/cluster/getClusterInfoByAddress?address=" + address, "monitor/cluster_info", "cluster-info-" + clusterId, function(obj){
        /*console.log(obj);*/
    }, true );
});

