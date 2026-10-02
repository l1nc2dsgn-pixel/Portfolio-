'use client';
import Link from './site-link';
import {Reveal} from './site';
import {PrintImage} from './print-media';
import {contact} from '../lib/projects';
import {choose,useLanguage} from '../lib/i18n';

export function AboutContent() {
  const {language}=useLanguage();

  return <div id="about" className="about-editorial">
    <section className="about-opening wrap">
      <div className="about-opening-title">
        <h2 className="line-heading">{language==='ru'?<><span><span>ОБО</span></span><span><span>МНЕ<span className="period">.</span></span></span></>:<><span><span>ABOUT</span></span><span><span>ME<span className="period">.</span></span></span></>}</h2>
        <p>{choose(language,'ГРАФИЧЕСКИЙ ДИЗАЙНЕР, КОТОРЫЙ ЛЮБИТ, КОГДА ДИЗАЙН НЕ ЗАКАНЧИВАЕТСЯ НА МАКЕТЕ.','A GRAPHIC DESIGNER WHO LIKES DESIGN TO LIVE BEYOND THE MOCKUP.')}</p>
        <span className="about-small-rule" aria-hidden="true"/>
      </div>
      <div className="about-opening-intro">
        <span className="eyebrow">01 / 04</span>
        <div>
          <p>{choose(language,'Более 7 лет работаю с айдентикой, digital и полиграфией. Разбираюсь в задаче бизнеса, собираю визуальную систему и готовлю материалы для её использования.','I’ve worked across identity, digital and print for more than seven years. I study the business problem, build a visual system and prepare materials for its use.')}</p>
          <p>{choose(language,'Есть опыт полного цикла: от эскиза и общения с заказчиком до препресса, печати и готового продукта.','I’ve worked independently and within production processes, from the first sketch and client conversations to prepress, printing and the finished piece.')}</p>
        </div>
      </div>
      <div className="about-opening-facts">
        <div><strong>{choose(language,'АНДРЕЙ СЛЮТА','ANDREY SLIUTA')}</strong><br/>{choose(language,'ГРАФИЧЕСКИЙ ДИЗАЙНЕР','GRAPHIC DESIGNER')}</div>
        <div>{choose(language,'БОЛЕЕ 7 ЛЕТ ОПЫТА','OVER 7 YEARS EXPERIENCE')}<br/>{choose(language,'САНКТ-ПЕТЕРБУРГ','SAINT PETERSBURG')}<br/>{choose(language,'АЙДЕНТИКА / ПЕЧАТЬ / DIGITAL / ИИ','BRANDING / PRINT / DIGITAL / AI')}</div>
        <div>{choose(language,'ОТКРЫТ ДЛЯ','AVAILABLE FOR')}<br/>{choose(language,'ФРИЛАНСА / ПРОЕКТОВ / КОМАНДИРОВОК','FREELANCE / PROJECTS / BUSINESS TRIPS')}</div>
        <span className="about-lime-rule" aria-hidden="true"/>
      </div>
      <div className="about-portrait about-portrait-photo"><img src="/images/andrey-portrait.webp" srcSet="/images/andrey-portrait-small.webp 400w, /images/andrey-portrait.webp 682w" sizes="(max-width: 800px) calc(100vw - 40px), (max-width: 1200px) 45vw, 27vw" width={682} height={1024} alt={choose(language,'Портрет Андрея Слюты','Portrait of Andrey Sliuta')} loading="lazy" decoding="async"/></div>
    </section>

    <section className="about-middle about-middle-print-only wrap">

      <Reveal className="about-print-feature">
        <div className="about-print-placeholder about-print-photo"><PrintImage item="cards"/><span className="about-print-caption">{language==='ru'?<>ОТ ПИКСЕЛЯ<br/>К <span className="accent-word">ПЕЧАТИ</span></>:<>FROM PIXELS<br/>TO <span className="accent-word">PRINT</span></>}</span></div>
        <div className="about-print-meta"><span>{choose(language,'ПЕЧАТНОЕ ПРОИЗВОДСТВО','PRINT PRODUCTION')}</span><p>{language==='ru'?<>ПРЕПРЕСС<br/>CMYK / RGB<br/>ЦИФРОВАЯ ПЕЧАТЬ<br/>ШИРОКИЙ ФОРМАТ<br/>ПОСТПЕЧАТЬ</>:<>PREPRESS<br/>CMYK / RGB<br/>DIGITAL PRINT<br/>LARGE FORMAT<br/>POSTPRESS</>}</p></div>
      </Reveal>
    </section>

    <section className="about-lower wrap">
      <Reveal className="about-tools-panel">
        <div className="about-section-label"><span>{choose(language,'ИНСТРУМЕНТЫ','TOOLS')}</span><i aria-hidden="true"/></div>
        <div className="about-tool-columns">
          <div><span>{choose(language,'ДИЗАЙН / ПРОИЗВОДСТВО','DESIGN / PRODUCTION')}</span><p>ILLUSTRATOR<br/>PHOTOSHOP<br/>INDESIGN<br/>AFTER EFFECTS<br/>ACROBAT<br/>FIGMA<br/>CORELDRAW</p></div>
          <div><span>{choose(language,'ИИ','AI')}</span><p>CHATGPT<br/>FLUX<br/>{choose(language,'ГЕНЕРАТИВНЫЕ ИНСТРУМЕНТЫ','GENERATIVE AI TOOLS')}</p></div>
        </div>
      </Reveal>
      <Reveal className="about-project-panel"><Link href="/work/velosop" className="about-project-card" aria-label={choose(language,'Открыть проект ВелоСОП — более 7 лет, один проект','Open VeloSOP project — over 7 years, one project')}>
        <div><h2>{language==='ru'?<>БОЛЕЕ 7 ЛЕТ<br/>ОДИН ПРОЕКТ</>:<>OVER 7 YEARS<br/>ONE PROJECT</>}<span className="period">.</span></h2><p>{choose(language,'ВелоСОП — проект, который я развиваю более 7 лет. За это время я выстроил визуальную систему, занимался брендингом и коммуникацией, собирал команду, работал с партнёрами и участвовал в грантовой поддержке проекта.','VeloSOP is a project I’ve developed for more than seven years. I built its visual system, worked on branding and communication, assembled a team, collaborated with partners and helped secure grant support.')}</p></div>
        <div className="about-project-metrics"><span>{choose(language,'БОЛЕЕ 7 ЛЕТ','OVER 7 YEARS')}</span><span>{choose(language,'60 УЧАСТНИКОВ / 2026','60 PARTICIPANTS / 2026')}</span><span>{choose(language,'600K+ ₽ ГРАНТЫ','600K+ ₽ GRANTS')}</span></div>
        <span className="text-link about-case-link">{choose(language,'СМОТРЕТЬ КЕЙС VELOSOP','VIEW VELOSOP CASE')} <span>→</span></span>
      </Link></Reveal>
    </section>

    <section className="about-ending wrap">
      <Reveal className="about-landscape"><div className="about-landscape-photo"><img src="/images/enamel-pin.webp" srcSet="/images/enamel-pin-small.webp 800w, /images/enamel-pin.webp 1672w" sizes="(max-width:650px) calc(100vw - 40px), 25vw" width={1672} height={941} alt={choose(language,'Металлический эмалевый значок с башней и поездом','Metal enamel pin with a tower and a train')} loading="lazy" decoding="async"/></div></Reveal>
      <Reveal className="about-statement"><h2>{language==='ru'?<>Я не пытаюсь сделать дизайн <span className="accent-word">сложнее</span>, чем нужно</>:<>I don’t try to make design more <span className="accent-word">complicated</span> than it needs to be</>}</h2><p>{choose(language,'Мне нравится понятная визуальная система, хороший типографический ритм и работа, которую можно реально использовать.','I value a clear visual system, a strong typographic rhythm and work that people can actually use.')}</p><span className="about-lime-rule" aria-hidden="true"/></Reveal>
      <Reveal className="about-contact"><Link href="/contact">{language==='ru'?<>ДАВАЙТЕ<br/>РАБОТАТЬ <span className="accent-word">ВМЕСТЕ</span></>:<>LET’S WORK<br/><span className="accent-word">TOGETHER</span></>}<span className="about-contact-arrow">→</span></Link><div><a href={contact.telegram} target="_blank" rel="noreferrer">Telegram ↗</a><a href={'mailto:'+contact.email}>{choose(language,'Почта','Email')} ↗</a><a href={contact.resume} download="Andrey-Sliuta-Resume.doc">{choose(language,'Резюме','Resume')} ↗</a></div></Reveal>
    </section>
  </div>
}
