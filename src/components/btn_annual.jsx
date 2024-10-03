import React from 'react'
import { useTranslation } from 'react-i18next'
import Sale from '@/assets/vectors/sale.svg?react'

export const BtnAnnual = () => {
    const { t } = useTranslation()

    const handleClock = () => {
        console.log('Button annual clicked')
    }

    return (
        <button onClick={handleClock} className={'btn btn_big border-main'}>
            <span className={'title futurabb text-main'}>{t('btnAnnual.title')}</span>
            <span className={'subtitle text-primary'}>{t('btnAnnual.subtitle')}</span>
            <span className={'description text-secondary'}>{t('btnAnnual.description')}</span>
            <Sale id={'sale'} className={'absolute -right-4 w-14 h-auto'} />
        </button>
    )
}
