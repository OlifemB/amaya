import React from 'react'

export const Slide = ({ item, title }) => {
    return (
        <div className={'min-w-full min-h-full flex flex-col items-center justify-center gap-4 px-12 pb-12 pt-8'}>
            <img src={item.img} alt={item.title} className={'min-w-48 max-w-60 w-max h-auto'} />
            <p className={'text-center text text-white drop-shadow-[0_0_5px_#000] max-w-[460px] leading-tight'}>
                {title}
            </p>
        </div>
    )
}
