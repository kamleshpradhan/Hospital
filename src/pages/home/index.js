import Link from 'next/link'
export default function Home(){
    return(
        <div>
            This is the home Page
            <Link href="/products">Products Page</Link>
        </div>
    )
}