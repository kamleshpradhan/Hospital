import Link from 'next/link'
export default function Home(){
    return(
        <div>
            This is the home Page
            <Link href="/products">Products Page</Link>
            <p>Data to be added</p>
        </div>
    )
}