import Link from "next/link";

export default function Header() {
	return (
		<div className='flex justify-center w-full bg-slate-950'>
			<Link className='ml-2 text-white' href='/'>
				Home |{" "}
			</Link>
			<Link className='ml-2 text-white' href='/example1'>
				Example 1 |{" "}
			</Link>
			<Link className='ml-2 text-white' href='/example2'>
				Example 2 |{" "}
			</Link>
			<Link className='ml-2 text-white' href='/example3'>
				Example 3 |{" "}
			</Link>
			<Link className='ml-2 text-white' href='/example4'>
				Example 4
			</Link>
		</div>
	);
}
