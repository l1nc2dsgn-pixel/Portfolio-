'use client';
import type {CaseProfile} from '../lib/case-profiles';
import {choose,useLanguage} from '../lib/i18n';
import {DesignDetails} from './case-profile';
import {PrintMedia} from './print-media';
import {Reveal} from './site';

export function AppliedCaseStory({profile}:{profile:CaseProfile}){const {language}=useLanguage();return <div className="case-story wrap applied-case-story">
  {profile.groups.map(group=><Reveal key={group.id} id={group.id} className="story-section applied-material-group">
    <div className="applied-group-heading"><h2>{choose(language,group.title.ru,group.title.en)}</h2>{group.notes&&<DesignDetails notes={group.notes}/>}</div>
    <div className={'applied-media-grid '+(group.items.length===1?'single':'')}>{group.items.map(item=><PrintMedia key={item} item={item}/>)}</div>
  </Reveal>)}
</div>}
