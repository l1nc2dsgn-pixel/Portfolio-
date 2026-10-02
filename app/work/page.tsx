'use client';
import {useEffect,useRef,useState} from 'react';
import {ContactCTA} from '../../components/site';
import {WorkCatalogCard} from '../../components/work-catalog-card';
import {caseProfiles} from '../../lib/case-profiles';
import {projects} from '../../lib/projects';
import {choose,useLanguage} from '../../lib/i18n';
const filters=['ALL','BRANDING','PRINT','DIGITAL','AI'];
export default function Work(){
  const {language}=useLanguage();const [filter,setFilter]=useState('ALL');const [exiting,setExiting]=useState(false);const timers=useRef<ReturnType<typeof setTimeout>[]>([]);
  useEffect(()=>()=>timers.current.forEach(clearTimeout),[]);
  function chooseFilter(next:string){if(next===filter||exiting)return;if(matchMedia('(prefers-reduced-motion: reduce)').matches){setFilter(next);return}setExiting(true);timers.current.push(setTimeout(()=>{setFilter(next);setExiting(false)},200))}
  const shown=projects.filter(p=>filter==='ALL'||p.type===filter||p.disciplines.includes(filter)||(filter==='BRANDING'&&p.disciplines.some(d=>d==='BRAND IDENTITY'||d==='VISUAL IDENTITY')));
  const groups=[{key:'systems',title:choose(language,'Системные проекты и подборки','Visual systems & collections'),items:shown.filter(p=>!caseProfiles[p.slug])},{key:'applied',title:choose(language,'Прикладные работы','Applied projects'),items:shown.filter(p=>caseProfiles[p.slug])}];
  const namesRu=['Все','Айдентика','Печать','Digital','ИИ'];
  return <main className="catalog-page"><section className="page-hero wrap"><span className="eyebrow">{choose(language,'РЕЗЮМЕ / 2021—2026','RESUME / 2021—2026')}</span><div className="title-mask"><h1>{choose(language,'РАБОТЫ','WORK')}<span className="period">.</span></h1></div></section>
    <section className="work-index wrap"><div className="filters" role="group" aria-label={choose(language,'Фильтр проектов','Filter projects')}>{filters.map((f,i)=><button type="button" key={f} className={filter===f?'selected-filter':''} aria-pressed={filter===f} onClick={()=>chooseFilter(f)}>{choose(language,namesRu[i],f==='ALL'?'All':f==='BRANDING'?'Identity':f==='PRINT'?'Print':f==='DIGITAL'?'Digital':'AI')}</button>)}</div>
      <p className="catalog-result-count" role="status">{choose(language,'Проектов: ','Projects: ')+shown.length}</p>
      <div className={'catalog-results '+(exiting?'is-exiting':'')}>
        {groups.filter(group=>group.items.length).map(group=><section className="catalog-group" key={group.key} aria-labelledby={'catalog-'+group.key}><div className="catalog-group-title"><h2 id={'catalog-'+group.key}>{group.title}</h2><span>{group.items.length}</span></div><div className={'catalog-grid catalog-grid-'+group.key}>{group.items.map(project=><WorkCatalogCard project={project} key={project.slug}/>)}</div></section>)}
      </div>
      {!shown.length&&<p>{choose(language,'Пока нет проектов в этой категории.','No projects in this category yet.')}</p>}
    </section><ContactCTA/>
  </main>
}
