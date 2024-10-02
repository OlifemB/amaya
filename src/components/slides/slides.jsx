import React from 'react'
import { Carousel, useCarousel } from 'nuka-carousel'
import { slides } from '@/components/slides/data.js'
import { useTranslation } from 'react-i18next'
import { Slide } from '@/components/slides/slide.jsx'
import { CustomDots } from '@/components/slides/custom_dots.jsx'

export const Slides = () => {
    const { t } = useTranslation()

    return (
        <Carousel
            showDots
            speed={500}
            wrapAround={true}
            autoplay={true}
            autoplayInterval={3000}
            wrapMode={'wrap'}
            swiping={true}
            dots={<CustomDots />}
        >
            {slides.map((item, index) => (
                <Slide item={item} key={'slide' + index} title={t('slider.slide' + index)} />
            ))}
        </Carousel>
    )
}
