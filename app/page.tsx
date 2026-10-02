'use client';
import {useSyncExternalStore} from 'react';
import {MobileWorks} from '../components/mobile-works';
import {FloatingTitle} from '../components/floating-title';
import Link from '../components/site-link';
import {HeroScroll,HeroScatterText,ProjectRow,Reveal} from '../components/site';
import {AboutContent} from '../components/about-content';
import {WorkProcess} from '../components/work-process';
import {PrintImage} from '../components/print-media';
import {projects} from '../lib/projects';
import {choose,localizeProject,useLanguage} from '../lib/i18n';

const desktopQuery='(min-width: 651px)';
function subscribeLayout(onChange:()=>void){const media=window.matchMedia(desktopQuery);media.addEventListener('change',onChange);return()=>media.removeEventListener('change',onChange)}
function desktopSnapshot(){return window.matchMedia(desktopQuery).matches}
function serverSnapshot(){return false}

export default function Home(){const {language}=useLanguage();const print=localizeProject(projects[3],language);const desktop=useSyncExternalStore(subscribeLayout,desktopSnapshot,serverSnapshot);const about=<AboutContent key="about"/>;const works=<section key="selected" id="selected" className="selected wrap"><div className="section-head"><span className="eyebrow">{choose(language,'ИНДЕКС / 01—04','INDEX / 01—04')}</span><h2>{language==='ru'?<>ИЗБРАННЫЕ<br/>РАБОТЫ</>:<>SELECTED<br/>WORKS</>}<span className="period">.</span></h2><span className="section-side">{choose(language,<>Айдентика, печатные<br/>и digital-проекты.</>,<>A selection of identities,<br/>printed matter and digital work.</>)}</span></div><MobileWorks><ProjectRow project={projects[0]}/><ProjectRow project={projects[1]} reverse/><ProjectRow project={projects[2]}/><Reveal className="print-feature"><div className="print-heading"><span className="eyebrow">04 / {choose(language,'ПОЛИГРАФИЯ','PRINT DESIGN')}</span><h3>{language==='ru'?<>ПЕЧАТЬ<br/>И ПРОИЗВОДСТВО</>:<>PRINT<br/>PRODUCTION</>}</h3><p>{print.description}</p><Link className="text-link" href="/work/print-production">{choose(language,'СМОТРЕТЬ КЕЙС','VIEW CASE')} <span>→</span></Link></div><Link className="print-sheet" data-cursor={choose(language,'СМОТРЕТЬ','VIEW')} href="/work/print-production" aria-label={choose(language,'Открыть кейс Print Production','View Print Production case')}><PrintImage item="staryk" className="print-single-photo"/></Link></Reveal></MobileWorks><Link className="all-work" href="/work">{choose(language,'ВСЕ ПРОЕКТЫ','ALL PROJECTS')} <span>↗</span></Link>{desktop&&<WorkProcess/>}</section>;return <main><section className="hero wrap"><div className="hero-top"><span>{choose(language,'СПбГЭТУ ЛЭТИ','SPbGETU LETI')}<br/>{choose(language,'САНКТ-ПЕТЕРБУРГ','SAINT PETERSBURG')}</span></div><FloatingTitle/><HeroScroll/><div className="hero-bottom"><div><HeroScatterText text={choose(language,'АЙДЕНТИКА / ПЕЧАТЬ / DIGITAL / ИИ','BRANDING / PRINT / DIGITAL / AI')} group={0}/></div><div><HeroScatterText text="2026" group={1}/></div><a href={desktop?"#about":"#selected"} aria-label={choose(language,'ЛИСТАЙТЕ ВНИЗ ↓','SCROLL TO EXPLORE ↓')}><HeroScatterText text={choose(language,'ЛИСТАЙТЕ ВНИЗ ↓','SCROLL TO EXPLORE ↓')} group={2}/></a></div></section>{desktop?[about,works]:[works,about]}{!desktop&&<section className="wrap mobile-work-process"><WorkProcess/></section>}</main>}