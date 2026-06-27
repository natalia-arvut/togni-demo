const http=require('http'),fs=require('fs'),path=require('path');
const root=__dirname, port=4330;
const types={'.html':'text/html','.jpg':'image/jpeg','.png':'image/png','.css':'text/css','.js':'text/javascript','.svg':'image/svg+xml','.ico':'image/x-icon','.webp':'image/webp'};
http.createServer((req,res)=>{
  let p=decodeURIComponent(req.url.split('?')[0]); if(p==='/')p='/index.html';
  const fp=path.join(root,p);
  fs.readFile(fp,(e,d)=>{ if(e){res.writeHead(404);res.end('404');return;}
    res.writeHead(200,{'Content-Type':types[path.extname(fp)]||'application/octet-stream'}); res.end(d);});
}).listen(port,()=>console.log('up '+port));
