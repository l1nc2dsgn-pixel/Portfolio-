'use client';
import {Reveal} from './site';
import {choose,useLanguage} from '../lib/i18n';

export function WorkProcess(){
  const {language}=useLanguage();
  const steps=language==='ru'?[['01','ЯСНЫЙ ПЛАН','До старта согласуем задачу, материалы, сроки и этапы. Вы понимаете объём работы и когда получите результат.'],['02','ДИЗАЙН С ПОНЯТНЫМ СМЫСЛОМ','Предлагаю направление и объясняю выбор. Показываю промежуточный результат, чтобы согласовать решения до финальной подготовки.'],['03','МАТЕРИАЛЫ, ГОТОВЫЕ К ЗАПУСКУ','Готовлю файлы под площадки и требования типографии. Проверяю размеры и цвет — материалы готовы к публикации и печати.']]:[['01','A CLEAR PLAN','We discuss your business, audience and the materials you need. We agree on scope, timing and stages before starting, so you know how the work will progress.'],['02','DESIGN WITH A CLEAR PURPOSE','I propose a direction and explain why it fits your business. You see the work as it develops and can shape it before final production.'],['03','MATERIALS READY TO LAUNCH','I prepare files for your platforms and printer. I check dimensions, colours and technical settings so the design is ready to publish and print.']];
  return (
      <Reveal className="about-process work-process">
        <div className="about-section-label"><span>{choose(language,'ОТ ЗАДАЧИ ДО РЕЗУЛЬТАТА','FROM BRIEF TO RESULT')}</span><i aria-hidden="true"/></div>
        <div className="about-process-steps">{steps.map(([number,title,description])=><div className="about-step" key={number}><span className="about-step-number">{number}</span><h2>{title}</h2><p>{description}</p></div>)}</div>
      </Reveal>
  );
}
