'use client';
import Link from './site-link';
import {Visual} from './site';
import {PrintImage} from './print-media';
import {ColorStrip} from './case-profile';
import {caseProfiles} from '../lib/case-profiles';
import type {Project} from '../lib/projects';
import {choose,localizeProject,useLanguage} from '../lib/i18n';

export function WorkCatalogCard({project}:{project:Project}){const {language}=useLanguage();const p=localizeProject(project,language);const profile=caseProfiles[p.slug];return <article className="catalog-card"><Link href={'/work/'+p.slug} className="catalog-card-link" aria-label={choose(language,'Открыть кейс: ','View case: ')+p.title}>
  <div className="catalog-card-copy"><div className="catalog-card-kicker"><span>{choose(language,profile?'ПРИКЛАДНАЯ РАБОТА':p.slug==='print-production'?'ПОДБОРКА':'АЙДЕНТИКА И DIGITAL',profile?'APPLIED WORK':p.slug==='print-production'?'COLLECTION':'IDENTITY & DIGITAL')}</span>{p.year!=='—'&&<span>{p.year}</span>}</div><h3>{p.title}</h3><p>{p.description}</p><div className="catalog-card-bottom"><span>{choose(language,'Смотреть проект','View project')}</span>{profile?.notes.colors.length?<ColorStrip colors={profile.notes.colors} compact/>:<span className="catalog-card-format">{p.disciplines.slice(0,2).join(' / ')}</span>}</div></div>
  <div className={'catalog-card-media '+(profile?'catalog-applied-media':'')}>{profile?<PrintImage item={profile.preview} sizes="(max-width: 650px) calc(100vw - 40px), (max-width: 1100px) 45vw, 30vw"/>:<Visual project={project}/>}</div>
</Link></article>}
