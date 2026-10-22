import Banner from "../../Components/Banner/Banner";
import Brand from "../../Components/Brand/Brand";
import Categories from "../../Components/Categories/Categories";
import Delivery from "../../Components/Delivery/Delivery";
import Features from "../../Components/Features/Features";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#28342e] text-[#1D3B29] font-sans antialiased overflow-hidden">
      {/* banner component */}
      <div className="w-full min-h-[550px] bg-[#1d3b29] flex items-center justify-center rounded-b-3xl">
        <Banner />
      </div>
      {/* delivery component */}
      <div className="delivery_component w-full min-h-[#150px]">
        <Delivery />
      </div>
      {/* brand component */}
      <div className="brand flex h-[171px] items-center justify-center w-full mt-8 mb-8 ">
        <Brand></Brand>
      </div>
      {/* features component */}
      <div className="w-full flex items-center justify-center mb-[80px]">
        <Features></Features>
      </div>
      {/* categories component */}
      <div className="w-full flex items-center justify-center mb-[80px]">
        <Categories></Categories>
      </div>
    </div>
  );
};

export default Home;
