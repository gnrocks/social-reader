define(["require","app/helpers/debugger","app/helpers/cookie"],function(e,t,n){var r={};return r.save=function(e,r,i,s){t.log("Saving "+r+" to the database cache",0);var o=this,u=JSON.stringify(i);return $.post(_sr_ajax.ajaxurl,{action:"_sr_ajax_hook",type:"save_cache",fb_id:e,field:r,data:u},function(e){t.log("Ajax request complete"),e=="1"?(t.log(r+" saved successfully"),n.set("sr_"+r,"true",null),t.log("Set cookie marking "+r+" as saved this session"),t.log("Finished"),s!==null&&s()):(t.log("Data failed to save"),t.log("Finished"),s!==null&&s())})},r.get=function(e,n,r){var i=this;return t.log("Getting the "+n),$.post(_sr_ajax.ajaxurl,{action:"_sr_ajax_hook",type:"get_cache",fb_id:e,field:n},function(e){t.log("Ajax request complete"),t.log("Converting data to json object");try{var n=JSON.parse(e);t.log("JSON parsed: SUCCESS"),t.log("Finished"),r!==null&&r(n)}catch(i){t.log("JSON parsed: FAILURE"),t.log("Finished"),r!==null&&r()}})},r});