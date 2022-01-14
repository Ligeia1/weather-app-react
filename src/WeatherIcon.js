import React from "react";
import {
  WiDaySunny,
  WiDayCloudy,
  WiCloudy,
  WiDayShowers,
  WiDayRain,
  WiDayThunderstorm,
  WiDaySnow,
  WiDayFog,
  WiNightAltCloudy,
  WiNightClear,
  WiNightAltPartlyCloudy,
  WiNightAltSnow,
  WiNightAltThunderstorm,
  WiNightAltSprinkle,
  WiNightFog,
  WiNightCloudy,
  WiNightPartlyCloudy,
  WiNightSnow,
  WiNightThunderstorm,
  WiRain,
  WiSnow,
} from "weather-icons-react";
import "./WeatherIcon.css";

export default function WeatherIcon(props) {
  return <WiSnow size={50} color="#000" />;
}
