import { CarModelFilter } from "@/components/modules";
import { CarBackground } from "@/components/modules/CarsHomeLayout";

const NewCars = () => {
  return (
    <>
      <CarBackground
        title='Shop the nation’s largest'
        subtitle='New car inventory'
      />
      <CarModelFilter />
    </>
  );
};

export default NewCars;
