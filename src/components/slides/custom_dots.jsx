import { useCarousel } from 'nuka-carousel'
import { clsx } from '@/assets/utils/clsx.js'
import React from 'react'

export const CustomDots = () => {
    const { totalPages, currentPage, goToPage } = useCarousel()

    return (
        <div
            className={'absolute w-full min-[540px]:bottom-[60px] bottom-[12vw] flex items-center justify-center gap-1'}
        >
            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={'CustomDots' + index}
                    onClick={() => goToPage(index)}
                    className={clsx(
                        'w-2 h-2 p-0 rounded-full bg-gray-200 border-none cursor-pointer hover:bg-white',
                        currentPage === index && 'bg-white',
                    )}
                />
            ))}
        </div>
    )
}
