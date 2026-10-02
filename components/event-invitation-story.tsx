'use client';
import {Reveal} from './site';
import {ZoomImage} from './zoom-image';
import {PrintMedia} from './print-media';
import {choose,useLanguage} from '../lib/i18n';

const variations=[
  {number:2,titleRu:'ВИНТАЖНАЯ АФИША',titleEn:'VINTAGE POSTER',textRu:'Бежевая фактура, декоративная рамка и тёмно-зелёная графика. Гитара, хвоя и компас поддерживают природную тему.',textEn:'A beige texture, ornamental frame and dark green graphics form a cohesive vintage poster. A guitar, pine branches and a compass reinforce the outdoor theme.'},
  {number:3,titleRu:'ЧЁТКАЯ СТРУКТУРА',titleEn:'CLEAR STRUCTURE',textRu:'Дата, место, дресс-код и пожелания к подаркам разделены на самостоятельные блоки. Оливковые акценты подчёркивают иерархию.',textEn:'Separate panels organize the date and location, dress code and gift request. Olive accents and frames guide the reader through the invitation on a phone.'},
  {number:4,titleRu:'ПРИРОДНЫЙ КОЛЛАЖ',titleEn:'OUTDOOR COLLAGE',textRu:'Многослойная композиция с картой, компасом, гитарой и костром. Цветовые пятна и наклейки добавляют настроение встречи на природе.',textEn:'A richer, layered composition combines a map, compass, guitar and campfire. Color accents and stickers suggest a relaxed outdoor gathering.'}
];

export function EventInvitationStory(){const {language}=useLanguage();return <div className="case-story wrap invitation-story">
  <Reveal className="story-section invitation-brief" id="brief">
    <span className="eyebrow">{choose(language,'ТРЕБОВАНИЯ ТЗ','BRIEF REQUIREMENTS')}</span>
    <h2>{choose(language,'Неформальное приглашение','An informal invitation')}</h2>
    <ul className="invitation-requirements"><li>{choose(language,'Природный дресс-код и палитра','Natural dress code and palette')}</li><li>NOT GLAMOROUS / NO LUXURY</li><li>No flowers, just charity</li><li>{choose(language,'Гитара, костёр, хвоя и компас — без палатки','Guitar, campfire, pine and compass — no tent')}</li></ul>
  </Reveal>
  <Reveal className="story-section invitation-original" id="original"><span className="eyebrow">{choose(language,'ИСХОДНЫЙ МАКЕТ','ORIGINAL ARTWORK')} / 01</span><h2>{choose(language,'Афишный характер','Poster character')}</h2><div className="invitation-original-art"><PrintMedia item="invitation"/></div></Reveal>
  {variations.map(v=><Reveal key={v.number} className="story-section invitation-variation" id={'variation-'+v.number}>
    <span className="eyebrow">{choose(language,'ВАРИАНТ','VARIATION')} / 0{v.number}</span>
    <h2>{choose(language,v.titleRu,v.titleEn)}</h2>
    <div className="invitation-variation-grid">
      <figure className="invitation-artwork"><ZoomImage src={'/images/pre-party-variant-'+v.number+'-artwork.webp'} srcSet={'/images/pre-party-variant-'+v.number+'-artwork-small.webp 800w, /images/pre-party-variant-'+v.number+'-artwork.webp 1001w'} sizes="(max-width:650px) calc(100vw - 40px), 420px" width={1001} height={1600} alt={choose(language,'Приглашение Pre-Party — '+v.titleRu.toLocaleLowerCase('ru'),'Pre-Party invitation — '+v.titleEn.toLowerCase())} loading="lazy" decoding="async"/><figcaption>{choose(language,'ВЕРТИКАЛЬНЫЙ МАКЕТ / JPG','VERTICAL ARTWORK / JPG')}</figcaption></figure>
      <figure className="invitation-phone"><ZoomImage src={'/images/pre-party-variant-'+v.number+'-phone.webp'} srcSet={'/images/pre-party-variant-'+v.number+'-phone-small.webp 800w, /images/pre-party-variant-'+v.number+'-phone.webp 2048w'} sizes="(max-width:650px) calc(100vw - 40px), 60vw" width={2048} height={1367} alt={choose(language,'Вариант '+v.number+' приглашения Pre-Party на экране телефона и рядом в развёрнутом виде','Pre-Party variation '+v.number+' shown on a phone and as full artwork')} loading="lazy" decoding="async"/><figcaption>{choose(language,'ПРЕЗЕНТАЦИЯ / ЭКРАН ТЕЛЕФОНА','PRESENTATION / PHONE SCREEN')}</figcaption></figure>
    </div>
    <p>{choose(language,v.textRu,v.textEn)}</p>
  </Reveal>)}
  <div className="invitation-gallery-note">{choose(language,'Нажмите на изображение, чтобы рассмотреть детали крупнее.','Select an image to view the details at full size.')}</div>
</div>}
