import React from 'react'
import { useTranslation } from 'react-i18next'

export const BtnMonth = () => {
    const { t } = useTranslation()

    const handleClick = () => {
        console.log('Button month clicked')
    }

    return (
        // <button
        //     onClick={handleClick}
        //     className={
        //         'flex flex-col items-center justify-center h-[70px] rounded-2xl border border-2 border-solid py-1 border-gray-300'
        //     }
        // >
        //     <span className={'text-[18px] futurabb text-main'}>{t('btnMonth.title')}</span>
        //     <span className={'text-[14px] text-primary'}>{t('btnMonth.subtitle')}</span>
        // </button>

        <button onClick={handleClick} className={'btn btn_big border-gray-300'}>
            <span className={'title futurabb text-main'}>{t('btnMonth.title')}</span>
            <span className={'subtitle text-primary'}>{t('btnMonth.subtitle')}</span>
        </button>
    )
}
