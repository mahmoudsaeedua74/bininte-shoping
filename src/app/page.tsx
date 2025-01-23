import Banner from "@/Components/Banner/Iphone";
import SellerMenu from "@/Components/BestSeller/SellerMenu";
import Carousel from "@/Components/Carousel/Carousel";
import FeatureProducts from "@/Components/FeatureProducts/FeatureProducts";
import Group from "@/Components/Group/Group";
import News from "@/Components/News/News";
import SearchQuery from "@/Components/Search/SearchQuery";
export default function Home() {
  return (
    <main className="">
      <Carousel />
      <div className="container mb-20">
        <SellerMenu />
      </div>
        <Banner />
      <div className="container space-y-40 mb-40 mt-20">
        <Group />
        <News />
        <FeatureProducts />
        <SearchQuery />
      </div>
    </main>
  );
}
