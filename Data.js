import {HiHome} from 'react-icons/hi'
import {FaBusinessTime, FaUsers} from 'react-icons/fa'
import {MdLocalOffer,MdPages,MdSettings,MdNotifications} from 'react-icons/md'
import {RiAccountCircleFill} from 'react-icons/ri'

export const menuList = [
  {id:1,title:'الرئيسية',name:'Home',icon:<HiHome/>,text:'Home',link:'/'},
 
  {id:3,title:'المنتجات',name:'Offers',icon:<MdLocalOffer/>,text:'',link:'/products'},
  {id:4,title:'الطلبيات',name:'Home',icon:<HiHome/>,text:'Home',link:'/'},
  {id:5,title:'التقارير',name:'custumors',icon:<FaUsers/>,text:'',link:'/'},
  {id:7,title:'الأعدادات',name:'custumors',icon:<MdSettings/>,text:'',link:'/settings'},
  {id:8,title:'مركز المساعدة',name:'Offers',icon:<MdLocalOffer/>,text:'',link:'/'},
];

export const settingsList = [
  {id:1,title:'الحساب',name:'account',icon:<RiAccountCircleFill/>},
  {id:2,title:'الموارد',name:'resource',icon:<FaUsers/>},
  {id:3,title:'المدخلات',name:'incomes',icon:<FaBusinessTime/>},
  {id:4,title:'الاشعارات',name:'adminstration',icon:<MdNotifications/>},
  {id:5,title:'الارتباطات',name:'engagments',icon:<FaUsers/>},
  {id:6,title:'الادارة',name:'adminstration',icon:<FaUsers/>},
  {id:7,title:'المدخلات',name:'incomes',icon:<FaUsers/>},
  {id:8,title:'الاشعارات',name:'adminstration',icon:<MdNotifications/>},
  {id:9,title:'إعدادات اخرى',name:'engagments',icon:<FaUsers/>},



];