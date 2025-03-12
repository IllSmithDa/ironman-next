/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";
// import HomeAds from "../Ads/HomeAds";
// import Ads from "../Ads/Ads";
// import MobileAds1 from "../Ads/MobileAds1";

export default function Footer(/*{ adname }: {adname : string} */) {
  /*
  const renderAds = () =>  {
    switch(adname) {
      case 'HomeAds':
        return (
          <section
            className='flex justify-center w-[100%] px-[5px]'
          >
            <HomeAds />
          </section>   
        )
      case 'hrefpicAds':
        return (
          <>
            <section
              className='xl:flex justify-center py-[2rem] w-[100%] hidden'
            >
              <Ads />
            </section>
            <section
              className='flex justify-center w-[100%] mt-[2rem] xl:hidden'
            >
              <MobileAds1 />
            </section>
          </>
        )
      case 'LangaugeAds':
        return (
          <>
            <section
              className='xl:hidden flex justify-center w-[100%] my-[2rem]'
            >
              <MobileAds1 />
            </section>
            <section
              className='lg:flex justify-center w-[100%] mb-[4rem] hidden' 
            >
              <Ads />
            </section>
          </>
        )
      default:
        return (
          <section
            className='flex justify-center w-[100%] px-[5px]'
          >
            <HomeAds />
          </section>   
        )    
    } 
  }
  */
  return (
    <>
    <section className={`
      absolute mt-[200px] pb-[3rem] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[100%] bg-[#AAA] dark:bg-[#111]
    `}>

      <ul 
        className="flex gap-[2rem] justify-center my-[2rem]"
      >
        <li>
          <Link 
            className={`
              sm:text-[1.5rem]
              text-[9px]
            `}
            href='/about'>
            
            About
          </Link>
        </li>
        <li>
          <Link 
            className={`
              sm:text-[1.5rem]
              text-[9px]
            `}
            href='/terms'>
            
            Terms
          </Link>
        </li>
        <li>
          <Link 
            className={`
              sm:text-[1.5rem]
              text-[9px]
            `}
            href='/privacy'>
            
            Privacy
          </Link>
        </li>
        <li>
         <Link 
           className={`
             sm:text-[1.5rem]
             text-[9px]
           `}
           href='/cookies'>
           
            Cookies
          </Link>
        </li>
      </ul>
      <p
        className={`
          text-center
        `}
      > 
        Copyright
        {' '}
        {new Date().getFullYear()}
        . All Rights Reserved. IronCodeMan.
      </p>
    </section>
    </>
  )
}
