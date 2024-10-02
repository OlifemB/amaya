import React from 'react'
import IconClose from '@/assets/icons/close.svg?react'
import { useEffect, useState } from 'react'

export const BtnClose = () => {
    const [close, setClose] = useState(false)

    const handleClickClose = () => {
        setClose(!close)
    }

    useEffect(() => {
        console.log('window closed ' + close)
    }, [close])

    return (
        <button className={'fixed top-4 right-4 z-[100]'}>
            <IconClose onClick={handleClickClose} />
        </button>
    )
}
