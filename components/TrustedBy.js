import Image from "next/image"

export default function TrustedBy() {
    return (
        <>
            <div className='trusted-by-title-container'>
                <h2 className='trusted-by-title'>Trusted By These Employers</h2>
            </div>
            <div className='trusted-by-container'>
                <a href='https://www.invisr.com' target='_blank'>
                    <Image className='trusted-by-logo' src='/invisr-icon.svg' alt='Invisr Logo' width={100} height={60} />
                </a>
                <a href='https://www.capgemini.com' target='_blank'>
                    <Image className='trusted-by-logo' src='/Capgemini-logo.svg' alt='Capgemini Logo' width={100} height={60} />
                </a>
                <a href='https://www.aa.com' target='_blank'>
                    <Image className='trusted-by-logo' src='/aa-logo.svg' alt='American Airlines Logo' width={100} height={60}  />
                </a>
                <a href='https://www.bestbuy.com' target='_blank'>
                    <Image className='trusted-by-logo' src='/best-buy-logo.svg' alt='Best Buy Logo' width={100} height={60}  />
                </a>
            </div>
        </>
    )
}