import FruitsList from "@/components/FruitsList/FruitsList";
import Home from "@/components/Home/Home";
import HomePageSideBar from "@/components/Home/HomePageSidebar/HomePageSideBar";


export default function Main() {
  return (
    <main className="bg-[#EEF0F2]">
      <div>
        <HomePageSideBar></HomePageSideBar>
      </div>
      <div>
        <Home></Home>
      </div>
    </main>
  )
}
