import { useEffect, useState } from 'react';
import styles from '../page.module.css'
import { useSelector } from 'react-redux';

const Forecast = () => {
    const foreCastData = useSelector((store: any) => store.foreCast);
    const { isLoading, isSuccess, error } = foreCastData?.foreCastData;
    const selectedDay = foreCastData?.foreCastData?.Data?.data?.selectedDayForecast;
    const [tempToday, setTempTody] = useState<number>(0);

    // use to set current temp
    useEffect(() => {
        let tempvalue = selectedDay?.temp?.temp_max;
        setTempTody(Math.trunc((tempvalue)))
    }, [selectedDay?.temp?.temp_max])

    // Method to get icon according to weather condation.
    const getIcon = (iconCode: string) => {
        let icon = `https://openweathermap.org/img/w/${iconCode}.png`
        return icon;
    }

    return (
        <>
            {isLoading ? <p className="Loader">Loading...</p> : error?.status ? <p className={styles.errorRespone}>{error?.msg}</p> : isSuccess ? <>
                <div className="row foreCastRow">
                    <div className="col-md-12">
                        <span className={styles.cityTitle}>{selectedDay?.city?.name},{selectedDay?.city?.country}</span>
                        <p className="daystatus">{selectedDay?.day}</p>
                        <p className="weatherStatus">{selectedDay?.weather?.main}</p>
                    </div>
                </div>

                <div className="row foreCastSubTitleinfo">
                    <div className="col-md-4">
                        <div className="weathericonTemp">
                            <img src={getIcon(selectedDay?.weather?.icon)} alt="weatherstatus" />
                            <span>{tempToday}</span>&nbsp;<span className="degreeTemp"><sup><span className="celiusDegree">&#8451;</span></sup></span>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <p>Pressure:&nbsp;{selectedDay?.main?.pressure}&nbsp;hPa</p>
                        <p className="preHumspeedInfo">Humidity:&nbsp;{selectedDay?.main?.humidity}&nbsp;%</p>
                        <p className="preHumspeedInfo">Wind speed:&nbsp;{selectedDay?.wind?.speed}&nbsp;m/s</p>
                    </div>
                </div>
            </> : ""}
        </>
    )
}
export default Forecast