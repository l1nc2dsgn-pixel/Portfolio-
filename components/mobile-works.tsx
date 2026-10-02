'use client';
import {Children,useEffect,useState} from 'react';
import {Carousel,CarouselContent,CarouselItem,type CarouselApi} from './ui/carousel';
import {choose,useLanguage} from '../lib/i18n';
export function MobileWorks({children}:{children:React.ReactNode}){
 const {language}=useLanguage();const [api,setApi]=useState<CarouselApi>();const [index,setIndex]=useState(0);const slides=Children.toArray(children);
 useEffect(()=>{if(!api)return;const update=()=>setIndex(api.selectedScrollSnap());update();api.on('select',update);api.on('reInit',update);return()=>{api.off('select',update);api.off('reInit',update)}},[api]);
 return <Carousel className="selected-carousel" setApi={setApi} opts={{align:'start',loop:false,breakpoints:{'(min-width: 651px)':{active:false}}}} aria-label={choose(language,'Избранные проекты','Selected projects')}><div className="selected-controls"><span>{choose(language,'ЛИСТАЙТЕ КЕЙСЫ','SWIPE TO EXPLORE')}</span><div role="group" aria-label={choose(language,'Выбор проекта','Choose a project')}>{slides.map((_,i)=><button key={i} type="button" aria-label={choose(language,`Проект ${i+1}`,`Project ${i+1}`)} aria-current={index===i?'true':undefined} onClick={()=>api?.scrollTo(i,matchMedia('(prefers-reduced-motion: reduce)').matches)}><span className="case-indicator-line" aria-hidden="true"/></button>)}</div></div><CarouselContent className="selected-track">{slides.map((slide,i)=><CarouselItem className="selected-slide" key={i} aria-label={`${i+1} / ${slides.length}`}>{slide}</CarouselItem>)}</CarouselContent></Carousel>
}
