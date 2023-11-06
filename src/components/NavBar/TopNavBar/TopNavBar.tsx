import Image from "next/image";
import logo from '../../../../public/assets/food-network-logo.png';
import SearchBar from "@/components/ReUseComponents/SearchBar/SearchBar";

const TopNavBar = () => {
    return (
        <div className="max-w-[1920px] flex justify-between items-center my-[10px] mx-[15px]">
            <div className="ml-[9px]">
                <Image
                 src={logo}
                  alt="Logo"
                  width="76.6"
                  height="38"
                />
            </div> 
            <div>
<SearchBar></SearchBar>
            </div>
            <div>
hello
            </div>
        </div>
    );
};

export default TopNavBar;