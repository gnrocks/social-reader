define(["require","app/models/fb","app/helpers/cookie","app/helpers/debugger"],function(e,t,n,r){var i=jQuery,s={};return s.init=function(e,n){var r=this;this.site={},this.user={},this.friends=[],this.activity={},this.get_client_details(function(){t.init(r.site.fb_app_id,function(){t.is_logged_in(function(i){if(i!==!0)return e();t.get_user(function(s){r.user=s,r.user.logged_in=i,r.is_auto_sharing(function(){e(),t.get_friend_users(function(e){r.friends=e,t.get_activity(function(e){r.activity=e,n()})})})})})})})},s.get_client_details=function(e){var t=this;return r.log("Getting client site details",0),i.post(_sr_ajax.ajaxurl,{action:"_sr_ajax_hook",type:"get_client_details"},function(n){return r.log("Ajax request complete"),t.site=JSON.parse(n),t.site?r.log("Read from ajax request data: SUCCESS"):r.log("Read from ajax request data: FAILURE"),r.log("Finished"),e()})},s.is_auto_sharing=function(e){var t=this;return r.log("See if we're auto sharing"),i.post(_sr_ajax.ajaxurl,{action:"_sr_ajax_hook",type:"is_auto_sharing",fb_id:this.user.id},function(n){return r.log("Ajax request complete"),n==1||n==0?(r.log("SUCCESS, set param"),n==1?n=!0:n=!1,t.user.auto_sharing=n,r.log("Finished")):(r.log("Data format is incorrect. FAILURE"),console.log(n)),e()})},s.set_auto_sharing=function(e){var t=this;return r.log("Setting auto sharing",0),r.log("Changing auto sharing to "+e),i.post(_sr_ajax.ajaxurl,{action:"_sr_ajax_hook",type:"set_auto_sharing",fb_id:this.user.id,is_auto_sharing:e},function(e){r.log("Ajax request complete"),e==1?r.log("Auto sharing change: SUCCESS"):r.log("Auto sharing change: FAILURE"),r.log("Finished")})},s.login=function(){t.login(function(){window.location.reload()})},s.logout=function(){t.logout(function(){n.remove("sr_activity_cache"),n.remove("sr_friends_cache"),window.location.reload()})},s});