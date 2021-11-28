import Link from 'next/link'
const NotFound=()=>{
    return(

        <div className="not-found">
            <h1> Ooops...</h1>
            <h2>That Page cannot be found.</h2>
            <p>Go back to the <Link href="/"><a>HomePage</a></Link></p>
        </div>
    );
}
export default NotFound;