import React from 'react'
import { useTranslation } from 'react-i18next'

export const BtnUnlim = () => {
    const { t } = useTranslation()

    const handleClick = () => {
        console.log('Button unlim clicked')
    }
    return (
        <button
            onClick={handleClick}
            className={
                'flex flex-col w-full items-center justify-center flex-1 rounded-2xl bg-main text-white py-[9px] futurabb text-[18px]'
            }
        >
            {t('btnUnlim.title')}
        </button>
    )
}
