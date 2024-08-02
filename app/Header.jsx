import Link from "next/link"


export default function Header(){
    return(
        <>
           <div className="w-3/4 mx-auto flex py-[25px]">
                <img src="/sneakers.png" alt="" />
                <div className="flex ml-[20px]">
                    <Link href="/urunler">Products</Link>
                </div>
           </div>
        </>
    )
}