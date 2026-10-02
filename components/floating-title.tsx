'use client';
import {useEffect,useRef} from 'react';
import {choose,useLanguage} from '../lib/i18n';
export function FloatingTitle(){
 const {language}=useLanguage();const box=useRef<HTMLDivElement>(null);const word=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const host=box.current,node=word.current;if(!host||!node)return;
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');let frame=0,last=0,x=0,y=0,vx=20,vy=13,visible=true,bx=0,by=0;
  let pointer:{x:number;y:number}|null=null;
  const measure=()=>{bx=Math.max(0,(host.clientWidth-node.offsetWidth)/2-5);by=Math.max(0,(host.clientHeight-node.offsetHeight)/2-8);x=Math.max(-bx,Math.min(bx,x));y=Math.max(-by,Math.min(by,y))};
  const move=(e:PointerEvent)=>{if(e.pointerType==='touch')return;const r=host.getBoundingClientRect();pointer={x:e.clientX-r.left-host.clientWidth/2,y:e.clientY-r.top-host.clientHeight/2}};
  const leave=()=>{pointer=null};
  const tick=(now:number)=>{
   const dt=Math.min((now-last)/1000||0,.032);last=now;
   if(visible&&!document.hidden&&!reduce.matches){
    let squeeze=0;
    if(pointer){
     // Distance to the whole word, so hovering near any letter pushes it away.
     const px=pointer.x-x,py=pointer.y-y;const halfW=node.offsetWidth/2,halfH=node.offsetHeight/2;
     const dx=Math.max(Math.abs(px)-halfW,0),dy=Math.max(Math.abs(py)-halfH,0);const distance=Math.hypot(dx,dy);
     if(distance<110){const strength=1-distance/110;const directionX=-px/Math.max(halfW,1),directionY=Math.abs(py)<6?-.35:-py/Math.max(halfH,1);const length=Math.hypot(directionX,directionY)||1;vx+=directionX/length*140*strength*dt;vy+=directionY/length*140*strength*dt;squeeze=strength*.012}
    }
    vx+=(Math.sign(vx||1)*20-vx)*dt*.65;vy+=(Math.sign(vy||1)*13-vy)*dt*.65;
    const wall=(position:number,bound:number,velocity:number)=>{if(bound<1)return 0;const zone=Math.min(28,bound*.45);const gap=bound-Math.abs(position);if(gap<zone){const side=Math.sign(position);const compression=1-gap/zone;return velocity-side*compression*130*dt-(side*velocity>0?velocity*compression*dt*3:0)}return velocity};
    vx=wall(x,bx,vx);vy=wall(y,by,vy);vx=Math.max(-48,Math.min(48,vx));vy=Math.max(-38,Math.min(38,vy));x+=vx*dt;y+=vy*dt;
    if(Math.abs(x)>bx){x=Math.sign(x)*bx;vx=-Math.sign(x||vx)*Math.abs(vx)*.7}if(Math.abs(y)>by){y=Math.sign(y)*by;vy=-Math.sign(y||vy)*Math.abs(vy)*.7}
    const sx=1-squeeze-(bx>0?.016*Math.max(0,1-(bx-Math.abs(x))/18):0);const sy=1-(by>0?.022*Math.max(0,1-(by-Math.abs(y))/18):0);
    node.style.transform=`translate3d(${x}px,${y}px,0) scale(${sx},${sy})`;
   }
   frame=requestAnimationFrame(tick);
  };
  const reset=()=>{if(reduce.matches){x=y=0;node.style.transform='none'}};
  const resize=new ResizeObserver(measure);resize.observe(host);resize.observe(node);const io=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting});io.observe(host);
  host.addEventListener('pointermove',move);host.addEventListener('pointerleave',leave);reduce.addEventListener('change',reset);measure();frame=requestAnimationFrame(tick);
  return()=>{cancelAnimationFrame(frame);resize.disconnect();io.disconnect();host.removeEventListener('pointermove',move);host.removeEventListener('pointerleave',leave);reduce.removeEventListener('change',reset)};
 },[language]);
 return <div ref={box} className="hero-title-mask floating-title"><div ref={word} className="floating-word"><h1>{choose(language,'ПОРТФОЛИО','PORTFOLIO')}<span className="hero-star">*</span></h1></div></div>
}
