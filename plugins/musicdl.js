function _0x21b9(){const _0x3a2d3f=['Error\x20deleting\x20temp\x20file:','40MmsgLJ','4yqFDxy','exp','3582699vTRmFA','1007482KufmDV','reply','Error\x20in\x20music\x20download:','1468KCtIEW','7100401VhlhAw','\x20Heat\x20waves','5AXauBi','Toji\x20MD\x20MUSIC','chat','play','audio/mpeg','buffer','18yEUGAf','text','8144562rrbjkU','message','2278524ksuxGn','createWriteStream','Error\x20fetching\x20buffer:','videos','audioonly','Song/Video\x20not\x20found!','downloader','help','4113380kWEMKd','91PSSmOX','1466kEKETX','unlink','error','Error\x20shortening\x20URL:','tmpdir','limit','\x0aPlease\x20try\x20again\x20later','tags','delete','*Enter\x20a\x20song\x20name!*\x0a\x0a*Example:*\x0a','\x20<query>','*Downloading\x20your\x20song...*\x20🎵','https://tinyurl.com/api-create.php?url=','map','.mp3'];_0x21b9=function(){return _0x3a2d3f;};return _0x21b9();}const _0x26a57a=_0x3393;(function(_0x2903a7,_0x4b4382){const _0x20e790=_0x3393,_0x4d6174=_0x2903a7();while(!![]){try{const _0x344e68=-parseInt(_0x20e790(0x15e))/0x1*(-parseInt(_0x20e790(0x175))/0x2)+parseInt(_0x20e790(0x171))/0x3*(-parseInt(_0x20e790(0x16f))/0x4)+-parseInt(_0x20e790(0x178))/0x5*(parseInt(_0x20e790(0x180))/0x6)+-parseInt(_0x20e790(0x172))/0x7*(-parseInt(_0x20e790(0x16e))/0x8)+-parseInt(_0x20e790(0x17e))/0x9*(-parseInt(_0x20e790(0x15c))/0xa)+-parseInt(_0x20e790(0x176))/0xb+-parseInt(_0x20e790(0x154))/0xc*(-parseInt(_0x20e790(0x15d))/0xd);if(_0x344e68===_0x4b4382)break;else _0x4d6174['push'](_0x4d6174['shift']());}catch(_0x1a132b){_0x4d6174['push'](_0x4d6174['shift']());}}}(_0x21b9,0xb7302));import _0x46781e from'node-fetch';import _0x59a73c from'ytdl-core';import _0x4db19f from'yt-search';import _0x30545a from'fs';import{pipeline}from'stream';import{promisify}from'util';import _0x594f65 from'os';const streamPipeline=promisify(pipeline);let handler=async(_0xa6cf7f,{conn:_0x5a7d1f,command:_0x128013,text:_0x531944,usedPrefix:_0x1b48d5})=>{const _0x1a87a9=_0x3393;if(!_0x531944)throw _0x1a87a9(0x167)+(_0x1b48d5+_0x128013)+_0x1a87a9(0x177);try{let _0x9a9bd2=await _0x4db19f(_0x531944),_0x1b421d=_0x9a9bd2[_0x1a87a9(0x157)][0x0];if(!_0x1b421d)throw _0x1a87a9(0x159);let {title:_0x4eaa8c,thumbnail:_0x2e0fe9,timestamp:_0x1bc1c3,views:_0x1a0897,ago:_0x34cba0,url:_0x3e7fd1}=_0x1b421d,_0x91bf93=await _0xa6cf7f[_0x1a87a9(0x173)](_0x1a87a9(0x169)),_0x236d1a=_0x59a73c(_0x3e7fd1,{'filter':_0x1a87a9(0x158),'quality':'highestaudio'}),_0x392a21=_0x594f65[_0x1a87a9(0x162)](),_0x190d44=_0x392a21+'/'+_0x4eaa8c+_0x1a87a9(0x16c);await streamPipeline(_0x236d1a,_0x30545a[_0x1a87a9(0x155)](_0x190d44));let _0x31d692={'audio':{'url':_0x190d44},'mimetype':_0x1a87a9(0x17c),'fileName':_0x4eaa8c+'.mp3','contextInfo':{'externalAdReply':{'showAdAttribution':!![],'mediaType':0x2,'mediaUrl':_0x3e7fd1,'title':_0x4eaa8c,'body':_0x1a87a9(0x179),'sourceUrl':_0x3e7fd1,'thumbnail':await(await _0x46781e(_0x2e0fe9))[_0x1a87a9(0x17d)]()}}};await _0x5a7d1f['sendMessage'](_0xa6cf7f[_0x1a87a9(0x17a)],_0x31d692,{'quoted':_0xa6cf7f}),_0x30545a[_0x1a87a9(0x15f)](_0x190d44,_0x47b00a=>{const _0x3017aa=_0x1a87a9;if(_0x47b00a)console[_0x3017aa(0x160)](_0x3017aa(0x16d),_0x47b00a);}),await _0x91bf93[_0x1a87a9(0x166)]();}catch(_0xe8c49c){console[_0x1a87a9(0x160)](_0x1a87a9(0x174),_0xe8c49c),_0xa6cf7f[_0x1a87a9(0x173)]('An\x20error\x20occurred:\x20'+_0xe8c49c[_0x1a87a9(0x181)]+_0x1a87a9(0x164));}};handler[_0x26a57a(0x15b)]=[_0x26a57a(0x17b)][_0x26a57a(0x16b)](_0x1fc76f=>_0x1fc76f+_0x26a57a(0x168)),handler[_0x26a57a(0x165)]=[_0x26a57a(0x15a)],handler['command']=/^(play3|song3|music)$/i,handler[_0x26a57a(0x170)]=0x0,handler[_0x26a57a(0x163)]=![],handler['register']=![];export default handler;async function fetchBuffer(_0x8c0ca6){const _0xab2328=_0x26a57a;try{const _0x309fbd=await _0x46781e(_0x8c0ca6),_0x4011c3=await _0x309fbd[_0xab2328(0x17d)]();return _0x4011c3;}catch(_0x30abfa){console[_0xab2328(0x160)](_0xab2328(0x156),_0x30abfa);throw _0x30abfa;}}function _0x3393(_0x4c61f8,_0x12016c){const _0x21b976=_0x21b9();return _0x3393=function(_0x3393f7,_0x331c0c){_0x3393f7=_0x3393f7-0x154;let _0x425621=_0x21b976[_0x3393f7];return _0x425621;},_0x3393(_0x4c61f8,_0x12016c);}async function shortUrl(_0x295bc0){const _0x33c88c=_0x26a57a;try{const _0x2f5e4f=await _0x46781e(_0x33c88c(0x16a)+_0x295bc0);return await _0x2f5e4f[_0x33c88c(0x17f)]();}catch(_0x395e2d){return console[_0x33c88c(0x160)](_0x33c88c(0x161),_0x395e2d),_0x295bc0;}}