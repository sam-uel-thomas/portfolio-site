import Link from "next/link"

const NavbarItem = ({ href, title }) => {
    return (
        <Link href={href} className='group block font-sans font-bold py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0'>
            <span className="bg-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out pb-1">
                {title}
            </span>
        </Link>
    );
};

export default NavbarItem;