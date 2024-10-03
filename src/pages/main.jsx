import LogAmaya from '@/assets/images/logo.png'
import background from '@/assets/images/bg1.png'
import Cloud from '@/assets/vectors/cloud.svg?react'
import { Slides } from '@/components/slides/slides.jsx'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { BtnClose } from '@/components/btn_close.jsx'
import { BtnAnnual } from '@/components/btn_annual.jsx'
import { BtnMonth } from '@/components/btn_month'
import { BtnUnlim } from '@/components/btn_unlim.jsx'
import { BtnLink } from '@/components/btn_link.jsx'

export function Main() {
    const { t } = useTranslation()

    return (
        <main id={'main'}>
            <section id={'carousel'} style={{ backgroundImage: `url(${background})` }}>
                <Slides />
            </section>

            <section id={'description'}>
                <Cloud className={'w-full max-w-[540px] h-auto absolute top-1 -translate-y-full z-[1]'} />

                <div id={'description_header'}>
                    <img src={LogAmaya} alt={''} id={'logo'} />

                    <span className={'text-center text-primary text'}>{t('header.title')}</span>
                </div>

                <div id={'description_body'}>
                    <BtnMonth />
                    <BtnAnnual />

                    <div id={'description_info'}>
                        <BtnUnlim />

                        <div className={'description text-secondary text-center'}>{t('info')}</div>

                        <div className={'description text-primary'}>{t('cancelAnytime')}</div>
                    </div>
                </div>

                <div id={'description_footer'}>
                    {[{ title: 'termsOfUse.title' }, { title: 'privacyPolicy.title' }].map(item => (
                        <BtnLink key={item.title} {...item} />
                    ))}
                </div>
            </section>

            <BtnClose />
        </main>
    )
}
