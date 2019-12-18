import React, { useState, useEffect, Fragment } from 'react';
import { AppBar, Typography } from '@material-ui/core'
import { Area } from './styled'
import WeatherIcon from 'react-icons-weather'
import { PageContainer } from '../../MainComponents';
import useApi from '../../../helpers/APIs';
const Header = () => {

    const api = useApi()

    const [blumenau, setBlumenau] = useState([])

    useEffect(() => {
        const lat = -26.91944
        const lng = -49.06611
        const getWeatherCity = async (lat, lng) => {
            const cityW = await api.getWeatherCity(lat, lng)
            setBlumenau(cityW)
        }
        getWeatherCity(lat, lng)

    }, [])

    const formatDate = (date) => {
        let cDate = new Date(date * 1000)

        let months = ['janeiro', 'fevereiro', 'março',
            'abril', 'maio', 'junho', 'julho',
            'agosto', 'setembro', 'outubro',
            'novembro', 'dezembro']

        let dayWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']

        let cDay = cDate.getDate()
        let cDayWeek = cDate.getDay()
        let cMonth = cDate.getMonth()
        let cYear = cDate.getFullYear()

        return `${dayWeek[cDayWeek]}, ${cDay} de ${months[cMonth]} de ${cYear}`
    }
    if (blumenau.length === 0) {
        return (
            <Fragment>
                Carregando...
            </Fragment>
        )
    }
    else {
        return (
            <Area>
                <AppBar position="static">
                    <PageContainer>
                        <Typography className="city--blumenau" variant="h4" align="center">
                            Blumenau
                        </Typography>
                        <Typography className="date--blumenau" variant="subtitle2" align="center">
                            {formatDate(blumenau.currently.time)}
                        </Typography>
                        <div className="teste">
                            <Typography variant="h3" align="center">
                                <WeatherIcon className="icon" name="darksky" iconId={blumenau.currently.icon} flip="horizontal" rotate="90" />
                                <span className="temp--blumenau">{parseInt(blumenau.currently.temperature)} ºC</span>
                            </Typography>
                            <Typography className="summary--blumenau" variant="h6" align="center">
                                {blumenau.currently.summary}
                            </Typography>
                        </div>
                        <ul>
                            <li>Sensação {parseInt(blumenau.currently.apparentTemperature)}</li>
                            <li>Umidade {parseInt(blumenau.currently.humidity * 100)}%</li>
                            <li>Vento {parseInt(blumenau.currently.windSpeed)} km/h</li>
                            <li>Chuva {(parseInt(blumenau.currently.precipProbability * 100))}%</li>
                        </ul>
                    </PageContainer>
                </AppBar>
            </Area>
        )
    }
}

export default Header