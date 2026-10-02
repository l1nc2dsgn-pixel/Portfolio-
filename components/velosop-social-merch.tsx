'use client';
import {ZoomImage} from './zoom-image';
import {Reveal} from './site';
import {choose,useLanguage} from '../lib/i18n';

const assets={
 '2024-poster':{ru:'2024 / АФИША',en:'2024 / POSTER',w:2048,h:2048},
 '2024-schedule':{ru:'2024 / РАСПИСАНИЕ МАРШРУТА',en:'2024 / ROUTE SCHEDULE',w:640,h:480},
 '2024-banner':{ru:'2024 / ВЕРТИКАЛЬНЫЙ БАННЕР',en:'2024 / VERTICAL BANNER',w:640,h:993},
 '2024-roadmap':{ru:'2024 / ДОРОЖНАЯ КАРТА МЕРОПРИЯТИЙ',en:'2024 / EVENT ROAD MAP',w:640,h:454},
  '2023-logo':{ru:'2023 / ЛОГОТИП',en:'2023 / LOGO',w:2048,h:851},
  '2023-schedule':{ru:'2023 / РАСПИСАНИЕ ПОДГОТОВКИ',en:'2023 / PREPARATION SCHEDULE',w:1000,h:800},
  '2023-registration':{ru:'2023 / РЕГИСТРАЦИЯ',en:'2023 / REGISTRATION',w:770,h:553},
  '2023-photos':{ru:'2023 / ФОТООТЧЁТЫ',en:'2023 / PHOTO REPORTS',w:770,h:553},
  '2023-extension':{ru:'2023 / ПРОДЛЕНИЕ ПРИЁМА ЗАЯВОК',en:'2023 / EXTENDED REGISTRATION',w:1000,h:800},
  '2023-event':{ru:'2023 / БАННЕР ПОЕЗДКИ',en:'2023 / EVENT BANNER',w:770,h:554},
  'jersey-photo':{ru:'ДЖЕРСИ / В ИСПОЛЬЗОВАНИИ',en:'JERSEY / IN USE',w:864,h:1536},
  'social-service':{ru:'ПОДГОТОВКА / ОБСЛУЖИВАНИЕ ВЕЛОСИПЕДА',en:'PREPARATION / BIKE MAINTENANCE',w:640,h:398},
  'social-training':{ru:'ПОДГОТОВКА / ФИЗИЧЕСКАЯ ФОРМА',en:'PREPARATION / FITNESS',w:640,h:427},
  'social-bike':{ru:'ПОДГОТОВКА / ВЫБОР ВЕЛОСИПЕДА',en:'PREPARATION / CHOOSING A BIKE',w:640,h:427},
  'social-helmet':{ru:'ПОДГОТОВКА / БЕЗОПАСНОСТЬ',en:'PREPARATION / SAFETY',w:640,h:427},
  'social-kit':{ru:'ПОДГОТОВКА / ЧТО ВЗЯТЬ С СОБОЙ',en:'PREPARATION / PACKING',w:640,h:427},
  'route':{ru:'ДОРОЖНАЯ КАРТА / МАРШРУТ',en:'ROAD MAP / ROUTE',w:1175,h:1536},
  'progress':{ru:'ИНФОГРАФИКА / РАЗВИТИЕ ПРОЕКТА',en:'INFOGRAPHIC / PROJECT DEVELOPMENT',w:1536,h:864},
  'jersey-system':{ru:'ДЖЕРСИ / КОНЦЕПЦИЯ И ДЕТАЛИ',en:'JERSEY / CONCEPT & DETAILS',w:1600,h:1066},
  'patch':{ru:'ВЕЛОСОП / МОКАП НАШИВКИ',en:'VELOSOP / PATCH MOCKUP',w:1600,h:1455},
  'registration':{ru:'АФИША / РЕГИСТРАЦИЯ',en:'POSTER / REGISTRATION',w:1289,h:1536},
  'meeting':{ru:'АФИША / ОТКРЫТАЯ ВСТРЕЧА',en:'POSTER / OPEN MEETING',w:1024,h:1536},
  'jersey-front':{ru:'ДЖЕРСИ / ВИД СПЕРЕДИ · МАКЕТ',en:'JERSEY / FRONT · DESIGN',w:1419,h:1536},
  'jersey-back':{ru:'ДЖЕРСИ / ВИД СЗАДИ · МАКЕТ',en:'JERSEY / BACK · DESIGN',w:1109,h:1536},
};
type AssetKey=keyof typeof assets;
function VeloAsset({item}:{item:AssetKey}){const {language}=useLanguage();const m=assets[item];return <figure className={'velo-asset velo-asset-'+item}><ZoomImage src={'/images/velosop-'+item+'.webp'} width={m.w} height={m.h} alt={choose(language,m.ru,m.en)} loading="lazy" decoding="async"/><figcaption>{choose(language,m.ru,m.en)}</figcaption></figure>}

export function VelosopSocialMerch(){const {language}=useLanguage();return <>
  <Reveal className="story-section velo-2023-section"><span className="eyebrow">04 / ВЕЛОСОП · 2023</span><h2>{language==='ru'?<>ВЕЛОСОП.<br/>ВЕРСИЯ 2023.</>:<>VELOSOP.<br/>2023 EDITION.</>}</h2><p>{choose(language,'Визуальные материалы сезона 2023: логотип, баннер поездки, расписание подготовки и публикации для регистрации и фотоотчётов. Жёлтая палитра, красно-синие акценты и велосипедные пиктограммы объединяют разные форматы.','Visual materials for the 2023 season: a logo, event banner, preparation schedule, registration and photo report graphics. A yellow palette, red and blue accents, and cycling icons connect the different formats.')}</p><div className="velo-2023-logo"><VeloAsset item="2023-logo"/></div><div className="velo-2023-posters"><VeloAsset item="2023-schedule"/><VeloAsset item="2023-extension"/></div><div className="velo-2023-menu"><VeloAsset item="2023-registration"/><VeloAsset item="2023-photos"/><VeloAsset item="2023-event"/></div></Reveal>

  <Reveal className="story-section velo-2024-section" id="velosop-2024"><span className="eyebrow">05 / ВЕЛОСОП · 2024</span><h2>{language==='ru'?<>ВЕЛОСОП.<br/>ВЕРСИЯ 2024.</>:<>VELOSOP.<br/>2024 EDITION.</>}</h2><p>{choose(language,'Бирюзовый и жёлтый, велосипедное колесо и дорожная графика: материалы сезона 2024. Афиша, вертикальный баннер, расписание маршрута и дорожная карта мероприятий показывают систему в разных форматах.','Turquoise and yellow, a bicycle wheel and road graphics: materials for the 2024 season. A poster, vertical banner, route schedule and event road map show the system across different formats.')}</p><div className="velo-2024-grid"><VeloAsset item="2024-poster"/><VeloAsset item="2024-banner"/><VeloAsset item="2024-schedule"/><VeloAsset item="2024-roadmap"/></div></Reveal>
<Reveal className="story-section velo-social-section"><span className="eyebrow">06 / {choose(language,'СОЦИАЛЬНЫЕ СЕТИ','SOCIAL MEDIA')}</span><h2>{language==='ru'?<>ПОДГОТОВКА<br/>НАЧИНАЕТСЯ В ЛЕНТЕ.</>:<>PREPARATION<br/>STARTS IN THE FEED.</>}</h2><p>{choose(language,'Серия публикаций перед поездкой: обслуживание велосипеда, физическая подготовка, выбор снаряжения и безопасность. Общая сетка, зелёно-бежевая палитра и пиксельная графика объединяют разные темы.','A pre-trip post series on bike maintenance, fitness, equipment and safety. A shared grid, green and beige palette, and pixel graphics connect the different topics.')}</p><div className="velo-social-grid">{(['social-service','social-training','social-bike','social-helmet','social-kit'] as AssetKey[]).map(item=><VeloAsset key={item} item={item}/>)}</div><div className="velo-poster-grid"><VeloAsset item="registration"/><VeloAsset item="meeting"/></div></Reveal>
  <Reveal className="story-section velo-social-section"><span className="eyebrow">07 / {choose(language,'МАРШРУТ И ИНФОГРАФИКА','ROUTE & INFOGRAPHICS')}</span><h2>{language==='ru'?<>МАРШРУТ.<br/>ИСТОРИЯ. ЦИФРЫ.</>:<>ROUTE.<br/>HISTORY. NUMBERS.</>}</h2><div className="velo-information-grid"><VeloAsset item="route"/><VeloAsset item="progress"/></div></Reveal>
  <Reveal className="story-section velo-merch-section"><span className="eyebrow">08 / {choose(language,'ОДЕЖДА И МЕРЧ','APPAREL & MERCHANDISE')}</span><h2>{language==='ru'?<>ГРАФИКА,<br/>КОТОРУЮ НОСЯТ.</>:<>GRAPHICS<br/>YOU CAN WEAR.</>}</h2><p>{choose(language,'Разработка велосипедного джерси: графика передней и задней стороны, размещение элементов и деталей. Пиксельные деревья, велосипедист и маршрут продолжают визуальный язык проекта на одежде и нашивке.','Cycling jersey design: front and back graphics, element placement and details. Pixel trees, a cyclist and the route carry the project’s visual language into apparel and a patch.')}</p><div className="velo-merch-overview"><VeloAsset item="jersey-system"/></div><div className="velo-merch-grid"><VeloAsset item="jersey-front"/><VeloAsset item="jersey-back"/></div><div className="velo-merch-grid velo-merch-finish"><VeloAsset item="patch"/><VeloAsset item="jersey-photo"/></div></Reveal>
</>}
