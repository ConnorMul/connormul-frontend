import Link from "next/link";

export default function Contact() {
    return (
        <>
            <div>
                <h1 className='pageTitle'>Contact Connor</h1>
                <p>Here's how to reach me</p>
            </div>
            <div>
                <p>My email is <Link href="mailto:mulhollandconnor@icloud.com">mulhollandconnor@icloud.com</Link></p>
                </div>
        </>
    )
}