import {spawnSync} from 'node:child_process';
import {readdirSync,readFileSync,writeFileSync} from 'node:fs';
import {join} from 'node:path';
const base=(process.env.NEXT_PUBLIC_BASE_PATH||'').replace(/\/$/,'');
if(base&&!/^\/[a-zA-Z0-9._-]+$/.test(base))throw Error('BASE_PATH must be empty or /repository-name');
process.env.NEXT_PUBLIC_BASE_PATH=base;
const changed=[];
function visit(dir){for(const item of readdirSync(dir,{withFileTypes:true})){const p=join(dir,item.name);if(item.isDirectory())visit(p);else if(/\.(tsx?|css|mjs)$/.test(p)){const original=readFileSync(p,'utf8');const updated=original.replaceAll('/images/',base+'/images/').replaceAll('/files/',base+'/files/');if(original!==updated){changed.push([p,original]);writeFileSync(p,updated)}}}}
let result;
try{for(const dir of ['app','components','lib'])visit(dir);result=spawnSync(process.execPath,['node_modules/next/dist/bin/next','build','--webpack'],{stdio:'inherit',env:process.env});if(result.error)throw result.error;}finally{for(const [p,original] of changed)writeFileSync(p,original)}
if(result.status!==0)process.exit(result.status||1);
writeFileSync('out/.nojekyll','');
