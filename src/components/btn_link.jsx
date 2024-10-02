import React from 'react'
import { useTranslation } from 'react-i18next'

export const BtnLink = ({ title }) => {
    const { t } = useTranslation()
    return <button className={'text-[12px] text-secondary underline'}>{t(title)}</button>
}
