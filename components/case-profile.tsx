'use client';
import type {CaseProfile,DesignNotes} from '../lib/case-profiles';
import {choose,useLanguage} from '../lib/i18n';

export function ColorStrip({colors,compact=false}:{colors:string[];compact?:boolean}){const {language}=useLanguage();return colors.length?<ul className={"color-strip "+(compact?"compact":"")} aria-hidden={compact||undefined} aria-label={choose(language,'Цвета на макетах','Colors in the artwork')}>{colors.map(color=><li key={color}><span className="color-swatch" style={{backgroundColor:color}} aria-hidden="true"/><span className="color-code">{color}</span></li>)}</ul>:null}

export function DesignDetails({notes}:{notes:DesignNotes}){const {language}=useLanguage();return <div className="design-details">
  {notes.colors.length>0&&<div><span className="profile-label">{choose(language,'ЦВЕТА МАКЕТОВ','ARTWORK COLORS')}</span><ColorStrip colors={notes.colors}/></div>}
  <div className="design-type"><span className="profile-label">{choose(language,'ТИПОГРАФИКА','TYPOGRAPHY')}</span><p>{choose(language,notes.type.ru,notes.type.en)}</p></div>
</div>}

export function CaseProfileCard({profile}:{profile:CaseProfile}){const {language}=useLanguage();return <section className="case-profile-card wrap" aria-label={choose(language,'О проекте и визуальном решении','Project context and visual direction')}>
  <div className="case-profile-context"><span className="profile-label">{choose(language,'О ПРОЕКТЕ','CONTEXT')}</span><p>{choose(language,profile.context.ru,profile.context.en)}</p><ul className="profile-outputs" aria-label={choose(language,'Материалы проекта','Project deliverables')}>{profile.outputs.map(output=><li key={output.en}>{choose(language,output.ru,output.en)}</li>)}</ul></div>
  <DesignDetails notes={profile.notes}/>
</section>}
