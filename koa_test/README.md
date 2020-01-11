Url {
  <!-- 协议 ：如http tcp -->
  protocol: 'https:',
  <!-- 是否使用 //作为分隔符 -->
  slashes: true,
  <!-- 与授权相关，绝大部分不会用到 -->
  auth: null,
  <!-- 由hostname和port组成 -->
  host: '127.0.0.1:8080',
  <!--  端口号-->
  port: 8080,
  <!-- ip 地址 -->
  hostname: '127.0.0.1',
  <!-- hash 字符串，URL的锚部分(#开始的部分) 对应DOM中的location.hash -->
  hash: '#abc',
  <!-- 搜索部分 参数"&"分割 -->
  search: '?a=1&b=2',
  <!-- 查询字符串 -->
  query: 'a=1&b=2',
  <!-- 从域名最后一个"/"开始 到"？"为止 -->
  pathname: '/site/test.htm',
  <!-- 由pathname和search 组成 -->
  path: '/site/test.htm?a=1&b=2',
  <!-- 完整的URL 上面所有都包含 -->
  href: 'https://127.0.0.1;8080/site/test.htm?a=1&b=2#abc',
  _raw: 'https://127.0.0.1；8080/site/test.htm?a=1&b=2#abc'
}