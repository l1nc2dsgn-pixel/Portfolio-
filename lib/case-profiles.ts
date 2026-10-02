import type {MediaKey} from '../components/print-media';
export type Copy={ru:string;en:string};
export type DesignNotes={colors:string[];type:Copy};
export type CaseGroup={id:string;title:Copy;items:MediaKey[];notes?:DesignNotes};
export type CaseProfile={context:Copy;outputs:Copy[];notes:DesignNotes;groups:CaseGroup[];preview:MediaKey};
const text=(ru:string,en:string):Copy=>({ru,en});
export const caseProfiles:Record<string,CaseProfile>={
  wedding:{
    context:text('Свадебное оформление в единой системе: от приглашения до небольших деталей на столе гостей. Светлая бумага, растительная графика и мягкий лавандовый акцент связывают носители между собой.','A shared wedding design system, from the invitation to small details on the guests’ tables. Light paper, botanical graphics and a soft lavender accent connect the materials.'),
    outputs:[text('Приглашение','Invitation'),text('Меню','Menu'),text('Карточка гостя','Place card')],
    notes:{colors:['#F2F0EC','#CFC5DB','#D2D9CF','#252523'],type:text('Заголовки с засечками, контраст размеров и лёгкий набор основного текста.','Serif headlines, contrasting sizes and light body text.')},
    preview:'weddingMenu',groups:[{id:'table',title:text('На столе гостей','On the guests’ tables'),items:['weddingMenu','weddingGuest']},{id:'invitation',title:text('Приглашение — два разворота','Invitation — two spreads'),items:['weddingInside','weddingOutside']}]
  },
  kontrofors:{
    context:text('Печатные материалы Контрфорса. Геометрический знак, зелёная графика и сдержанная типографика объединяют календарь и деловые карточки.','Printed materials for Kontrofors. A geometric mark, green graphics and restrained typography connect the calendar and business cards.'),
    outputs:[text('Квартальный календарь','Quarterly calendar'),text('Деловые карточки','Business cards')],
    notes:{colors:['#F1F2ED','#A6C197','#5E8553','#242827'],type:text('Геометрический гротеск, разрядка в знаке и компактная календарная сетка.','Geometric sans serif, spaced lettering in the mark and a compact calendar grid.')},
    preview:'calendar',groups:[{id:'materials',title:text('Календарь и карточки','Calendar and cards'),items:['calendar','cards']}]
  },
  'barber-academy':{
    context:text('Рабочие тетради и оформление входа для академии барберов. Учебные материалы и навигация решают разные задачи, сохраняя заметный знак и ясную иерархию.','Workbooks and entrance signage for a barber academy. Learning materials and signage serve different purposes, with a prominent mark and clear hierarchy.'),
    outputs:[text('Рабочая тетрадь','Workbook'),text('Наклейка на дверь','Door decal')],
    notes:{colors:['#CFBED7','#D3DDC9','#E1CAB3','#171B20'],type:text('Крупный монограммный знак и простой гротеск. На двери — контрастный набор режима работы.','A large monogram and simple sans serif. The door uses contrasting type for opening hours.')},
    preview:'workbook',groups:[{id:'learning',title:text('Учебные материалы','Learning materials'),items:['workbook']},{id:'entrance',title:text('Оформление входа','Entrance signage'),items:['door']}]
  },
  'restaurant-menus':{
    context:text('Работа с меню двух ресторанных сетей. У каждого бренда свой визуальный язык: материалы показаны отдельно, чтобы не смешивать характеры и цветовые системы.','Menu work for two restaurant networks. Each brand has its own visual language; the materials are presented separately to keep their characters and color systems distinct.'),
    outputs:[text('Старик-Хинкалыч','Staryk Khinkalych'),text('Мама Токио','Mama Tokio')],
    notes:{colors:[],type:text('Две самостоятельные системы: характерная надпись «Старик-Хинкалыч» и лаконичный заголовок меню «Мама Токио».','Two separate systems: distinctive Staryk Khinkalych lettering and a concise Mama Tokio menu heading.')},
    preview:'staryk',groups:[
      {id:'staryk',title:text('Старик-Хинкалыч','Staryk Khinkalych'),items:['staryk'],notes:{colors:['#39241B','#C8692C','#F5E9CB'],type:text('Характерные заголовки и иллюстративная подача.','Distinctive headlines and an illustrative approach.')}},
      {id:'tokio',title:text('Мама Токио','Mama Tokio'),items:['tokio'],notes:{colors:['#353535','#C74335','#D9D4CA'],type:text('Простой гротеск и фотографии блюд как главный акцент.','Simple sans serif, with food photography as the main focus.')}}]
  },
  posters:{
    context:text('Печатные материалы для OKKO и «Балета на льду». Здесь показаны фотографии из производства и готовые тиражи; каждый проект представлен со своей визуальной системой.','Printed materials for OKKO and Ice Ballet. Production photographs and finished print runs show each project in its own visual system.'),
    outputs:[text('OKKO','OKKO'),text('Балет на льду','Ice Ballet')],
    notes:{colors:[],type:text('Афишная иерархия: название события, ключевой образ и дата. Цвета и набор различаются между проектами.','Poster hierarchy: the event title, key image and date. Color and typography differ between the projects.')},
    preview:'ballet',groups:[
      {id:'okko',title:text('OKKO — плакаты','OKKO — posters'),items:['okko'],notes:{colors:['#4D294F','#DEDA4B','#171C27'],type:text('Плотный контрастный набор для названия события и даты.','Bold, contrasting type for the event title and date.')}},
      {id:'ballet',title:text('Балет на льду — тираж','Ice Ballet — print run'),items:['ballet'],notes:{colors:['#254873','#C74541','#F1F1EB'],type:text('Контрастные информационные блоки и крупные даты.','Contrasting information panels and prominent dates.')}}]
  },
  'nevskaya-usadba':{
    context:text('Буклеты для «Невской усадьбы». Фотографии объекта, знак и информационные блоки собраны в компактный печатный формат; в кейсе — готовые материалы.','Brochures for Nevskaya Usadba. Property photographs, the mark and information panels are brought into a compact printed format. The case shows finished materials.'),
    outputs:[text('Буклеты','Brochures'),text('Готовый тираж','Finished print run')],
    notes:{colors:['#24374A','#B8BD8F','#EFECE2'],type:text('Сдержанный набор: название и подпись рядом со знаком, отдельные уровни для информации.','Restrained type: a name and tagline beside the mark, with separate levels for information.')},
    preview:'brochures',groups:[{id:'brochures',title:text('Буклеты в печати','Printed brochures'),items:['brochures']}]
  },
  'health-notebooks':{
    context:text('Блокноты для компании в сфере заботы о здоровье. Белая обложка и аккуратная типографика оставляют пространство для записей и делают название главным визуальным элементом.','Notebooks for a company in the health care sector. White covers and careful typography give the name visual focus and leave room for notes.'),
    outputs:[text('Блокноты','Notebooks'),text('Печатные материалы','Printed materials')],
    notes:{colors:['#F3F3EE','#B6BFC4','#343A3D'],type:text('Тонкие буквы с засечками, разрядка в названии и небольшой подзаголовок.','Thin serif lettering, a spaced name and a small subtitle.')},
    preview:'notebooks',groups:[{id:'notebooks',title:text('Готовые блокноты','Finished notebooks'),items:['notebooks']}]
  },
  'event-invitation':{
    context:text('Приглашение на Pre-Party для рассылки в мессенджерах. По ТЗ — неформальное настроение, природная палитра и понятная подача даты, места, дресс-кода и пожеланий к подаркам.','A Pre-Party invitation for messenger distribution. The brief calls for an informal mood, a natural palette and clear event, dress-code and gift information.'),
    outputs:[text('Вертикальный JPG','Vertical JPG'),text('Варианты оформления','Design variations'),text('Презентация на телефоне','Phone presentation')],
    notes:{colors:['#D5BF90','#69734F','#463721','#607D85'],type:text('Акцентные афишные заголовки и компактные информационные блоки. Варианты отличаются рамками, иерархией и плотностью графики.','Expressive poster headlines and compact information panels. The variations differ in frames, hierarchy and graphic density.')},
    preview:'invitation',groups:[]
  },
  'business-card':{
    context:text('Визитка Контрфорса: геометрический знак и зелёная графика перенесены на небольшой деловой носитель. Мокап показывает лицевую и оборотную стороны.','A Kontrofors business card brings the geometric mark and green graphics to a small business format. The mockup shows both sides.'),
    outputs:[text('Лицевая сторона','Front'),text('Оборотная сторона','Back')],
    notes:{colors:['#EFF1EB','#AEC79E','#638853','#252A27'],type:text('Геометрическая надпись в знаке и компактный гротеск для вспомогательной информации.','Geometric lettering in the mark and compact sans serif for supporting information.')},
    preview:'business',groups:[{id:'business-card',title:text('Две стороны визитки','Both sides of the card'),items:['business']}]
  }
};
