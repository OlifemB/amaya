import LogAmaya from '@/assets/images/logo.png'
import Cloud from '@/assets/vectors/cloud.svg?react'

export function Main() {
    return (
        <main className={'flex flex-col flex-1 futuraRoundDemi'}>
            <div id={'carousel'} className={'flex flex-col flex-1 items-center justify-center bg-orange-500'}>
                carousel
            </div>

            <div className={'relative flex flex-col flex-1 items-center justify-between bg-white px-[50px] gap-[15px]'}>
                <div className={'w-full h-auto absolute mt-[-10%]'}>
                    <Cloud />
                </div>

                <div id={'description_header'} className={'flex flex-col gap-2 items-center justify-center'}>
                    <img src={LogAmaya} alt={''} className={'w-[160px] h-auto z-[1]'} />

                    <span className={'text-center text-[#28333D] text-[16px]'}>
                        Get 20+ amazing apps <br /> with ONE subscription
                    </span>
                </div>

                <div id={'description_body'} className={'flex flex-col gap-3'}>
                    <button
                        className={
                            'flex flex-col items-center justify-center h-[66px] rounded-2xl border border-2 border-solid border-[#BCC9D2]'
                        }
                    >
                        <span className={'text-[16px] futurabb text-[#F47E12]'}>Monthly</span>
                        <span className={'text-[12px]  text-[#28333D]'}>$9.99/month</span>
                    </button>

                    <button
                        className={
                            'flex flex-col items-center justify-center h-[66px] rounded-2xl border border-2 border-solid border-[#F48131]'
                        }
                    >
                        <span className={'text-[16px] futurabb text-[#F47E12]'}>Annual</span>
                        <span className={'text-[12px] text-[#28333D]'}>$29.99/first year</span>
                        <span className={'text-[10px] text-[#8E9698]'}>Renews for $59.99 per year.</span>
                    </button>

                    <div className={'flex flex-col items-center justify-center'}>
                        <div className={'flex flex-col items-center justify-center gap-1.5'}>
                            <button
                                className={
                                    'flex flex-col w-full items-center justify-center flex-1 rounded-2xl bg-[#F48131] text-white py-[9px] futurabb text-[16px]'
                                }
                            >
                                Get unlimited access
                            </button>

                            <div className={'text-[10px] text-[#8E9698] text-center'}>
                                Your subscription renews automatically unless you cancel it at least 24 hours before the
                                current subscription period ends.
                            </div>

                            <div className={'text-[#28333D] text-[10px]'}>Cancel Anytime</div>
                        </div>
                    </div>
                </div>

                <div id={'description_footer'} className={'flex flex-row gap-8 pt-[14px] pb-[20px]'}>
                    <a className={'text-[12px] text-[#8E9698] underline'}>Terms of Use</a>
                    <a className={'text-[12px] text-[#8E9698] underline'}>Privacy Policy</a>
                </div>
            </div>
        </main>
    )
}
