import Link from "next/link"

export default function Header(){
    return(
        <div className="flex justify-center w-full bg-slate-950">
            <Link className="ml-2 text-white" href='/'>Home | </Link>
            <Link className="ml-2 text-white" href='/Page1'>Page Components | </Link>
            <Link className="ml-2 text-white" href='/Page2'>Importing Components</Link>
        </div>
    )
}