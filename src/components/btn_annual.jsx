import React from 'react'
import { useTranslation } from 'react-i18next'
import Sale from '@/assets/vectors/sale.svg?react'

export const BtnAnnual = () => {
    const { t } = useTranslation()

    const handleClock = () => {
        console.log('Button annual clicked')
    }

    return (
        // <button
        //     onClick={handleClock}
        //     className={
        //         'relative flex flex-col items-center justify-center h-[70px] rounded-2xl border border-2 border-solid py-1 border-main'
        //     }
        // >
        //     <span className={'text-[18px] lg:text-[40px] futurabb text-main'}>{t('btnAnnual.title')}</span>
        //     <span className={'text-[14px] text-primary'}>{t('btnAnnual.subtitle')}</span>
        //     <span className={'text-[10px] text-secondary'}>{t('btnAnnual.description')}</span>
        //     <Sale className={'absolute -right-4 w-14 h-auto'} />
        // </button>
        <button onClick={handleClock} className={'btn btn_big border-main'}>
            <span className={'title futurabb text-main'}>{t('btnAnnual.title')}</span>
            <span className={'subtitle text-primary'}>{t('btnAnnual.subtitle')}</span>
            <span className={'description text-secondary'}>{t('btnAnnual.description')}</span>
            <Sale id={'sale'} className={'absolute -right-4 w-14 h-auto'} />
        </button>
    )
}
