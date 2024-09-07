import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center mx-auto w-4/5 bg-slate-700 p-4 rounded-md my-2 ">
            <Link className="mx-5 text-cyan-300  text-3xl font-bold underline decoration-dotted" href={"/"}>TH<span className="text-white">tech</span></Link>
            <Link className="mx-5 text-white p-2 rounded-md bg-cyan-400 shadow-lg shadow-cyan-400/50" href={"/addTopic"}>Add Topic</Link>
        </nav>
    );
}