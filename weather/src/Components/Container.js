import React from "react";
import First from "../İmages/First.jpg";
import Yagmurlu from "../İmages/Yagmurlu.jpg";
import Gunesli from "../İmages/Gunesli.jpg";
import Bulutlu from "../İmages/Bulutlu.jpg";
import Orta from "../İmages/Orta.jpg";
import { useWheather } from "../Context/WheatherContext";

function Container() {
  const { hour, days, icons, temps } = useWheather();

  

  return (
    <div className="Container">
      
      
          <div className="dailyWheather today">
            <p>{days[0]}</p>
            <p>{hour}</p>
            <img
              src= {First}
              alt=""
            />
            <div>
              <span>{temps[0].temp_max}º</span>
              <span>{temps[0].temp_min}º</span>
            </div>
          </div>
          <div className="dailyWheather">
            <p>{days[1]}</p>
            <p>{hour}</p>
            <img
              src={Orta}
              alt=""
            />
            <div>
              <span>{temps[1].temp_max}º</span>
              <span>{temps[1].temp_min}º</span>
            </div>
          </div>
          <div className="dailyWheather">
            <p>{days[2]}</p>
            <p>{hour}</p>
            <img
              src={Bulutlu}
              alt=""
            />
            <div>
              <span>{temps[2].temp_max}º</span>
              <span>{temps[2].temp_min}º</span>
            </div>
          </div>
          <div className="dailyWheather">
            <p>{days[3]}</p>
            <p>{hour}</p>
            <img
              src={Gunesli}
              alt=""
            />
            <div>
              <span>{temps[3].temp_max}º</span>
              <span>{temps[3].temp_min}º</span>
            </div>
          </div>
          <div className="dailyWheather">
            <p>{days[4]}</p>
            <p>{hour}</p>
            <img
             src= {Yagmurlu}
              
            />
            <div>
              <span>{temps[4].temp_max}º</span>
              <span>{temps[4].temp_min}º</span>
            </div>
          </div>
        
      
    </div>
  );
}

export default Container;