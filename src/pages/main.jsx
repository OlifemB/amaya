import LogAmaya from '@/assets/images/logo.png'
import background from '@/assets/images/bg1.png'
import Cloud from '@/assets/vectors/cloud.svg?react'
import Sale from '@/assets/vectors/sale.svg?react'
import IconClose from '@/assets/icons/close.svg?react'
import { Slides } from '@/components/slides/slides.jsx'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BtnClose } from '@/components/btn_close.jsx'
import { BtnAnnual } from '@/components/btn_annual.jsx'
import { BtnMonth } from '@/components/btn_month'
import { BtnUnlim } from '@/components/btn_unlim.jsx'
import { BtnLink } from '@/components/btn_link.jsx'

export function Main() {
    const { t } = useTranslation()

    return (
        <main className={'flex flex-col flex-1 futuraRoundDemi '}>
            <section
                style={{ backgroundImage: `url(${background})` }}
                className={' flex flex-1 flex-col w-full h-full relative bg-cover bg-no-repeat'}
            >
                <Slides />
            </section>

            <section className={'relative flex flex-col flex-1 items-center justify-between bg-white px-[50px] gap-4'}>
                <Cloud className={'w-full h-auto absolute mt-1 translate-y-[-100%] z-[1] max-w-[540px]'} />

                <div
                    id={'description_header'}
                    className={'flex flex-col gap-2 items-center justify-center max-w-[540px]'}
                >
                    <img src={LogAmaya} alt={''} className={'w-[160px] h-auto z-[100]'} />

                    <span className={'text-center text-primary text-[16px] max-w-48'}>{t('header.title')}</span>
                </div>

                <div id={'description_body'} className={'flex flex-col gap-3 max-w-80'}>
                    <BtnMonth />
                    <BtnAnnual />

                    <div className={'flex flex-col items-center justify-center gap-1'}>
                        <BtnUnlim />

                        <div className={'text-[10px] text-secondary text-center'}>{t('info')}</div>

                        <div className={'text-primary text-[10px]'}>{t('cancelAnytime')}</div>
                    </div>
                </div>

                <div id={'description_footer'} className={'flex flex-row gap-8 pt-[14px] pb-[20px]'}>
                    {[{ title: 'termsOfUse.title' }, { title: 'privacyPolicy.title' }].map(item => (
                        <BtnLink key={item.title} {...item} />
                    ))}
                </div>
            </section>

            <BtnClose />
        </main>
    )
}
