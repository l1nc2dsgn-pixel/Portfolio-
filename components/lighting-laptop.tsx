'use client';
import {useEffect,useRef} from 'react';
import {choose,useLanguage} from '../lib/i18n';

export function LightingLaptop({animate=true}:{animate?:boolean}){
  const {language}=useLanguage();const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{const node=ref.current;if(!node||!animate)return;const reduce=matchMedia('(prefers-reduced-motion: reduce)');let frame=0;const update=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{const rect=node.getBoundingClientRect();const progress=reduce.matches?1:Math.min(1,Math.max(0,(innerHeight-rect.top)/(innerHeight*.8)));const eased=progress*progress*(3-2*progress);node.style.setProperty('--lid-angle',`${-88*(1-eased)}deg`);node.style.setProperty('--screen-opacity',String(Math.min(1,Math.max(0,(progress-.12)/.5))))})};update();window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);reduce.addEventListener('change',update);return()=>{cancelAnimationFrame(frame);window.removeEventListener('scroll',update);window.removeEventListener('resize',update);reduce.removeEventListener('change',update)}},[animate]);
  return <div ref={ref} className={'lighting-laptop '+(animate?'is-animated':'')} role="img" aria-label={choose(language,'Проект освещения — оформление сообщества VK на экране открывающегося макбука','Lighting project — VK community design on an opening MacBook screen')}><div className="laptop-scene"><div className="laptop-lid"><div className="laptop-camera"/><div className="laptop-display"><img src="/images/lighting-macbook.png" width={1450} height={859} alt="" loading="lazy" decoding="async"/></div><span className="laptop-wordmark">MacBook</span></div><div className="laptop-base"><span/></div><div className="laptop-shadow"/></div></div>
}
