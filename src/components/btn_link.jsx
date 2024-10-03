import React from 'react'
import { useTranslation } from 'react-i18next'

export const BtnLink = ({ title }) => {
    const { t } = useTranslation()

    const handleClick = () => {
        console.log('btn ' + title + ' clicked')
    }
    return (
        <button className={'subtitle text-secondary underline'} onClick={handleClick}>
            {t(title)}
        </button>
    )
}
