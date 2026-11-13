export interface Section {
  id: string;
  title: string;
  sport: string;
  address: string;
  price: number;
  distance: number;
  trainer: string;
  schedule: string;
  description: string;
}

export const SECTIONS: Section[] = [
  { 
    id: '1', 
    title: 'Фитнес-клуб World Class LITE', 
    sport: 'Фитнес', 
    address: 'ул. Кубанская набережная, 39', 
    price: 3500, 
    distance: 9.5, 
    trainer: 'Алексей Смирнов', 
    schedule: 'Ежедневно 07:00 - 23:00', 
    description: 'Премиальный фитнес-клуб с сауной, массажем и тренажерным залом.' 
  },
  { 
    id: '2', 
    title: 'Зал бокса «Ринг»', 
    sport: 'Бокс', 
    address: 'ул. Московская, 83', 
    price: 2000, 
    distance: 4.4, 
    trainer: 'Денис Баландин', 
    schedule: 'Вт, Чт, Сб 19:00', 
    description: 'Бокс, тайский бокс. Групповые и персональные тренировки для детей и взрослых.' 
  },
  { 
    id: '3', 
    title: 'Бассейн ЦСКА', 
    sport: 'Плавание', 
    address: 'ул. Кореновская, 31', 
    price: 3000, 
    distance: 10.6, 
    trainer: 'Анна Смирнова', 
    schedule: 'Ежедневно 08:00 - 21:00', 
    description: 'Бассейн с профессиональными дорожками. Обучение плаванию.' 
  },
  { 
    id: '4', 
    title: 'Пространство йоги «Аэротория»', 
    sport: 'Йога', 
    address: 'ул. Домбайская, 10/1', 
    price: 2200, 
    distance: 1.1, 
    trainer: 'Елена Дмитриева', 
    schedule: 'Ежедневно 09:00 - 22:00', 
    description: 'Групповые уроки, индивидуальные занятия, здоровя спина, йога в гамаках.' 
  },
  { 
    id: '5', 
    title: 'DARKFIT GYM', 
    sport: 'Кроссфит', 
    address: 'ул. Уральская, 75/1', 
    price: 3500, 
    distance: 7.0, 
    trainer: 'Дмитрий Сила', 
    schedule: 'Ежедневно 07:00 - 23:00', 
    description: 'Кроссфит, аэробика, зумба, бокс, йога, пилатес. Всё в одном месте.' 
  },
  { 
    id: '6', 
    title: 'Студия танцев Palladium', 
    sport: 'Танцы', 
    address: 'ул. Водопьянова, 274', 
    price: 1900, 
    distance: 7.9, 
    trainer: 'Ольга Красина', 
    schedule: 'Ежедневно 10:00 - 22:00', 
    description: 'Занятия для молодежи, начинающих и продвинутых. Хип-хоп, латина, contemporary.' 
  },
  { 
    id: '7', 
    title: 'Black Dragon MMA', 
    sport: 'Бокс', 
    address: 'ул. Северная, 319', 
    price: 2200, 
    distance: 7.1, 
    trainer: 'Олег Гром', 
    schedule: 'Пн, Ср, Пт 18:30', 
    description: 'Клуб единоборств и фитнеса. ММА, бокс, борьба.' 
  },
  { 
    id: '8', 
    title: 'Центр олимпийской подготовки', 
    sport: 'Плавание', 
    address: 'ул. Переходная, 10', 
    price: 2800, 
    distance: 8.5, 
    trainer: 'Мария Вода', 
    schedule: 'Ежедневно 08:00 - 21:00', 
    description: 'Профессиональный бассейн для подготовки спортсменов.' 
  },
  { 
    id: '9', 
    title: 'Flexton | Студия растяжки', 
    sport: 'Йога', 
    address: 'ул. Буденного, 129', 
    price: 1700, 
    distance: 8.6, 
    trainer: 'Алина Гибкая', 
    schedule: 'Ежедневно 09:00 - 22:00', 
    description: 'Стретчинг, растяжка, шпагат. Занятия в мини-группах.' 
  },
  { 
    id: '10', 
    title: '50 GYM', 
    sport: 'Фитнес', 
    address: 'ул. Стасова, 178/1', 
    price: 4000, 
    distance: 7.6, 
    trainer: 'Петр Качок', 
    schedule: 'Круглосуточно', 
    description: 'Фитнес-клуб с бассейном, сауной, тренажерным залом.' 
  },
];
