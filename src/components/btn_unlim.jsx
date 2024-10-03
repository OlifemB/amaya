import React from 'react'
import { useTranslation } from 'react-i18next'

export const BtnUnlim = () => {
    const { t } = useTranslation()

    const handleClick = () => {
        console.log('Button unlim clicked')
    }
    return (
        <button onClick={handleClick} className={'btn btn_small title bg-main text-white futurabb border-0'}>
            {t('btnUnlim.title')}
        </button>
    )
}
