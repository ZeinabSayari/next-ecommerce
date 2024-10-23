'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";



const SearchBar = ()=>{

const router = useRouter();
const SearchHandler = (e :React.FormEvent<HTMLFormElement>)=>{
e.preventDefault();
const formData = new FormData(e.currentTarget);
const name = formData.get('name') as string ; 

if(name){
router.push(`/list?name=${name}`)
}

}

    return (
       <form className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1" onSubmit={SearchHandler}>
        <input type="text" placeholder="Search" name="name" className="flex-1 bg-transparent outline-none"/>
        <button>
            <Image src="/search.png" alt="search" width={16} height={16}/>
        </button>
       </form>
    )
}
export default SearchBar;