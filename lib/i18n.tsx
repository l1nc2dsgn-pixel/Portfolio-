'use client';
import {createContext,useContext,useEffect,useState} from 'react';
import type {Project} from './projects';

export type Language='ru'|'en';
const LanguageContext=createContext<{language:Language;setLanguage:(language:Language)=>void}>({language:'ru',setLanguage:()=>{}});
export function LanguageProvider({children,initialLanguage='ru'}:{children:React.ReactNode;initialLanguage?:Language}){const [language,setState]=useState<Language>(initialLanguage);useEffect(()=>{try{const saved=localStorage.getItem('andrey-portfolio-language');if(saved==='en')setState('en')}catch{}},[]);useEffect(()=>{document.documentElement.lang=language;document.documentElement.dataset.lang=language;let saved:string|null=null;try{saved=localStorage.getItem('andrey-portfolio-language')}catch{}if(saved!=='en'||language==='en')document.documentElement.classList.remove('language-loading')},[language]);function setLanguage(next:Language){setState(next);try{localStorage.setItem('andrey-portfolio-language',next);document.cookie='andrey-portfolio-language='+next+'; Path=/; Max-Age=31536000; SameSite=Lax; Secure'}catch{}}return <LanguageContext.Provider value={{language,setLanguage}}>{children}</LanguageContext.Provider>}
export function useLanguage(){return useContext(LanguageContext)}
export function choose<T>(language:Language,ru:T,en:T){return language==='ru'?ru:en}
const descriptions:Record<string,string>={
'velosop':'A long-running visual system for a cycling project, from identity and digital communication to merchandise, print and event design.',
'lisya-nora':'Identity for a countryside cottage rental brand: logo, printed materials, merchandise and guest communication concepts.',
'lighting':'Identity for a natural lighting and insolation project: logo, VK design concepts, mobile covers and implementation guides.',
'print-production':'A selection of projects taken from digital artwork through to physical production.'};
const disciplinesRu:Record<string,string>={'VISUAL IDENTITY':'АЙДЕНТИКА','ART DIRECTION':'АРТ-ДИРЕКШН','BRAND IDENTITY':'АЙДЕНТИКА','GRAPHIC DESIGN':'ГРАФИЧЕСКИЙ ДИЗАЙН','LOGO':'ЛОГОТИП','PRINT':'ПЕЧАТЬ','DIGITAL':'DIGITAL','AI':'ИИ','SOCIAL MEDIA':'СОЦСЕТИ','PREPRESS':'ПРЕПРЕСС','PRODUCTION':'ПРОИЗВОДСТВО','MERCH':'МЕРЧ'};
const typesRu:Record<string,string>={'BRANDING':'БРЕНДИНГ','PRINT':'ПЕЧАТЬ','DIGITAL':'DIGITAL'};
export function localizeProject(project:Project,language:Language):Project{return language==='en'?{...project,title:project.titleEn??project.title,description:project.descriptionEn??descriptions[project.slug]??project.description}:{...project,disciplines:project.disciplines.map(x=>disciplinesRu[x]??x),type:typesRu[project.type]??project.type}}
