'use client';
import Link from './site-link';
import {Reveal} from './site';
import {WorkCatalogCard} from './work-catalog-card';
import {VelosopApplications} from './print-media';
import {projects} from '../lib/projects';
import {caseProfiles} from '../lib/case-profiles';
import {choose,useLanguage} from '../lib/i18n';
export function PrintProjectIndex(){const {language}=useLanguage();return <div className="case-story wrap print-project-index">
  <Reveal className="story-section applied-material-group" id="print-projects"><div className="applied-group-heading"><h2>{choose(language,'Проекты и носители','Projects & materials')}</h2></div><div className="catalog-grid catalog-grid-applied">{projects.filter(p=>caseProfiles[p.slug]&&p.disciplines.includes('PRINT')).map(p=><WorkCatalogCard key={p.slug} project={p}/>)}</div></Reveal>
  <Reveal className="story-section applied-material-group" id="velosop-print"><div className="applied-group-heading"><h2>{choose(language,'ВелоСОП — печать и мерч','VeloSOP — print & merch')}</h2><Link className="profile-related-link" href="/work/velosop">{choose(language,'Открыть проект ВелоСОП','View the VeloSOP project')}</Link></div><VelosopApplications/></Reveal>
</div>}
