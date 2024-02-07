import styles from "../style";
import { arrowUp } from "../assets/assets";

const GetStarted = () => (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer group`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full group-hover:-translate-y-1 group-hover:scale-110 hover:bg-sky-800 duration-3 active:bg-sky-500`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
            <img src={arrowUp} alt="arrowUp" className="h-[23px] w-[23px] object-contain" />
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>        
      </div>
    </div>
  )


export default GetStarted