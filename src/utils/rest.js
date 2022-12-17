import { IconBowl, IconBuilding, IconClock, IconPhone } from '@tabler/icons';
import image4 from './images/image4.jpg';
import image1 from './images/image1.jpg';
import image3 from './images/image3.jpg';
import image2 from './images/index5.jpeg';
import video1 from './images/video1.mp4';
import video2 from './images/video2.mp4';
import video3 from './images/video3.mp4';
export default [
    {
        id:"1",
        image_path: image4,
        image_path2:image1,
        tube:video1,
        title:'Nandu на  ул. Достык 40,г. Алматы',
        description:'',
        time:[<IconClock />,` Время работы: Круглосуточно`],
        address:[<IconBuilding/>,'Адрес: ул. Достык 40'],
        phone:[<IconPhone/>,'Контакты: +7 (777) 122-16-12'],
        
    },
    {
        id:"2",
        image_path:image3,
        image_path2:image2,
        title:'Nandu ул. 5 микрорайон, 16 дом,г. Алматы',
        description:' ',
        time:[<IconClock/>,' Время работы: Круглосуточно'],
        address:[<IconBuilding/>,' Адрес: ул. 5 микрорайон '],
        phone:[<IconPhone/>,' Контакты: +7 (775) 272-85-68'],
        tube:video2
    },
  
]