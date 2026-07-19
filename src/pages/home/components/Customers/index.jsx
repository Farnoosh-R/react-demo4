import SliderCustomers from "../../../../components/shared/sliders/SliderCustomers"
import customer1 from "../../assets/images/customer1.jpg"
import customer2 from "../../assets/images/customer2.jpg"
import customer3 from "../../assets/images/customer3.jpg"
import customer4 from "../../assets/images/customer4.jpg"
import customer5 from "../../assets/images/customer5.jpg"
import customer6 from "../../assets/images/customer6.jpg"


const Customers = () => {
  const slides = [
    {
      id: 1,
      image: customer1,
    },
    {
      id: 2,
      image: customer2,
    },
    {
      id: 3,
      image: customer3,
    },
    {
      id: 4,
      image: customer4,
    },
    {
      id: 5,
      image: customer5,
    },
        {
      id: 6,
      image: customer6,
    }
  ];
  return (
    <section id="customers">
      <div className="app-container">
        <SliderCustomers items={slides}/>
      </div>
    </section>
  );
};
export default Customers;