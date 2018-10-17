
var parseUrl = function (url) {
  var Obj = {};
  var host = "";
  var path = "";
  var query = {};
  var hash = "";
  if (url.indexOf('://') > -1) {
    var str = url.split('://');
    Obj['protocol'] = str[0];

    if (str[1].indexOf('?') > -1) {
      var str2 = str[1].split('?');
      host = str2[0].split('/',1);
      Obj['host'] = host[0];
      path = str2[0].replace(host[0],'');
      Obj['path'] = path;

      if (str2[1] && str2[1].indexOf('#') > -1) {
        var str3 = str2[1].split('#');

        if (str3[0].indexOf('&') > -1) {
          var str4 = str3[0].split('&');
          str4.forEach(function (item, index) {
            var arr = item.split('=');
            query[arr[0]] = arr[1]
          });
          Obj['query'] = query;
          Obj['hash'] = str3[1];
        } else if (str3[0].indexOf('&') == -1) {
          var arr = str3[0].split('=');
          query[arr[0]] = arr[1];
          Obj['query'] = query;
          Obj['hash'] = str3[1];
        }
      } else if (str2[1].indexOf('#') == -1) {
        var str3 = str2[1];

        if (str3.indexOf('&') > -1) {
          var str4 = str3.split('&');
          str4.forEach(function (item, index) {
            var arr = item.split('=');
            query[arr[0]] = arr[1]
          });
          Obj['query'] = query;
        } else if (str3.indexOf('&') == -1) {
          var arr = str3.split('=');
          query[arr[0]] = arr[1];
          Obj['query'] = query;
        }
      }
    } else if (str[1].indexOf('?') == -1) {

      if (str[1].indexOf('/') == -1) {
        host = str[1];
        Obj['host'] = host[0];
      }
      host = str[1].split('/',1);
      Obj['host'] = host[0];

      if (str[1].split('/').length > 0) {
        path = str[1].replace(host[0],'');
        Obj['path'] = path;
      }
    }
  } else {
    return "请正确输入url"
  }
  return Obj;
};

var url = "http://www.xiyanghui.com/product/list?id=123456&sort=discount#title"

console.log(parseUrl(url));