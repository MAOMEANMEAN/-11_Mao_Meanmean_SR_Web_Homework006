import CustomerHomepageCardComponent from "@/components/CustomerHomepageCardComponent";
import ProductHomepageCardComponent from "@/components/ProductHomepageCardComponent";

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-10 justify-center ml-10">
      <CustomerHomepageCardComponent />
      <ProductHomepageCardComponent/>
    </div>
  );
}
