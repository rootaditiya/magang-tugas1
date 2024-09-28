import React, {useEffect, useRef, useState} from 'react'

export default function Card({children, className}){

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(()=>{
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting){
            setIsVisible(true);
          }
          else{
            setIsVisible(false);
          }
        });
      }, {threshold: 0.1,}
      );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if(ref.current){
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return(
    <div ref={ref}
    className={`${className ?? 'flex flex-col gap-4 w-full text-[1.25rem] shadow-2xl shadow-appskep-primary/15 rounded-xl p-10 bg-appskep-white'} ${
        isVisible ? 'animate-slide-fade-in' : 'opacity-0 translate-y-5'
      } transition-all duration-500`}>

      {children}
    </div>
    );
}