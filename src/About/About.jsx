import "./About.scss"
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Swiper from "../Swiper/Swiper";

const About = () => {
  return (
    <div className="cont">
        <div className="cont__conts">
        <div className="cont__card">
            <img className="cont__rasm" src="https://fruteacorp-shop.vercel.app/assets/fruteabar-CDA0qYYd.jpg" alt="" />
            <div className="cont__two">
                <StorefrontRoundedIcon className="cont__icon"/>
                <div className="cont__one">
                <h3 className="cont__h3">Fruteacorp</h3>
                <p className="cont__p">"FRUTEACORP" MChJ 2019 yildan beri O'zbekiston bozorida faoliyat olib bormoqda. Ushbu kompaniya eng yaxshi ingredientlardan tayyorlangan premium darajadagi choy aralashmalarini ishlab chiqaruvchi sifatida tanilgan, shuningdek, "Choy kutubxonasi" TM eksklyuziv yetkazib beruvchisi sifatida mashhur-bu mualliflik meva va rezavorlardan tayyorlangan tabiiy choylar. Qisqa vaqt ichida jamoa O'zbekiston aholisida choy ichish madaniyatiga yangi trend olib kirdi. O'zining qisqa, lekin faol savdo faoliyati davomida kompaniya ishonchli hamkor sifatida o'zini namoyon etdi, birinchi navbatda iste'molchi e'tirofini qadrlab, bozorga yetkazib berilayotgan mahsulotlarning doimiy yuqori sifatini kafolatlaydi.</p>
                </div>
            </div>
          </div>
     <div className="cont__galereya">
        <h1 className="cont__h1">Bizning Galereyamiz</h1>
        <p className="cont__biz">Fruteacorp choylarining o'ziga xosligi va go'zalligini aks ettiruvchi maxsus rasm galereyasini kashf eting.</p>
    </div>
        <div className="cont__grid"> 
        <img className="cont__hamma" src="https://fruteacorp-shop.vercel.app/assets/4-DlBvDUMM.jpg" alt="" />
        <img className="cont__hamma" src="https://fruteacorp-shop.vercel.app/assets/1-CNPgBk94.jpg" alt="" />
        <img className="cont__hamma" src="https://fruteacorp-shop.vercel.app/assets/5-DO1IONce.jpg" alt="" />
        <img className="cont__hamma" src="https://fruteacorp-shop.vercel.app/assets/2-Drddluiy.jpg" alt="" />
        <img className="cont__hamma" src="https://fruteacorp-shop.vercel.app/assets/6-3t7yZsZD.jpg" alt="" />
        <img className="cont__hamma" src="https://fruteacorp-shop.vercel.app/assets/3-DAsQ7oeT.jpg" alt="" />
        </div>
        <div className="cont__image">
            <h2 className="cont__h2">Bizni Kuzatib Boring</h2>
            <h1 className="cont__savol">Savolingiz bormi?</h1>
            <h1 className="cont__savol">Yozing yoki qo`ng`iroq qiling</h1>
             <div className="cont__contact">
               <LocalPhoneRoundedIcon className="cont__phones"/>
               <p className="cont__phone">+998 99 883-58-88</p>
             </div>
             <div className="cont__contact">
                <EmailRoundedIcon className="cont__round"/>
                <p className="cont__pi">fruteacorp@gmail.com</p>
             </div>
             <div className="cont__icons">
                <TwitterIcon className="cont__ic"/>
                <FacebookRoundedIcon className="cont__ic"/>
                <InstagramIcon className="cont__ic"/>
                <LinkedInIcon className="cont__ic"/>
             </div>
        </div>
        <div className="cont__divs">
            <img className="cont__shop" src="https://fruteacorp-shop.vercel.app/assets/shopping-1-BE8q5Y9e.jpg" alt="" />
         <div className="cont__imgs">
            <img className="cont__alt" src="https://fruteacorp-shop.vercel.app/assets/shopping-2-B7BVtprS.jpg" alt="" />
            <img className="cont__shops" src="https://fruteacorp-shop.vercel.app/assets/shopping-3-8EZotp0u.jpg" alt="" />
         </div>
          <div className="cont__choy">
           <h3 className="cont__max">Maxsus Taklif</h3>
           <h1 className="cont__yangi">Choyni Yangi O'lchamda Kashf Etishingiz uchun</h1>
           <p className="cont__siz">Sizni hayratda qoldiradigan choylarimizni sinab ko'ring. Bizning mahsulotlarimiz sizning har qanday lazzatingizga mos keladi.</p>
           <button className="cont__btn">Xarid Qiling</button>
         </div>
        </div>
        </div>
    </div>
    
  )
}

export default About