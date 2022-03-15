import CarbonCalculator from '../src/components/carbon-footprint-calculator/carbonFootprint';
import Navbar from '../src/components/navbar/Navbar';
import { navLinks } from '../src/components/utils/data';

export default function carbonCalculator() {
  // async function calculateFootprint(values){
  //   const response =await fetch('/api/footprint-calculator',{
  //     method:'POST',
  //     body:JSON.stringify(values),
  //     headers:{
  //         'Content-Type' :'application/json'
  //     }    
  //   })
  // }

  return (
    <>
  <Navbar
        action1=""
        action2={navLinks[0].name}
        href2={navLinks[0].link}
        buttonText2=""
        buttonText1=""
        buttonText3=""
        buttonText4=""
      />

      <CarbonCalculator />
      {/* <CarbonCalculator onCalculation={calculateFootprint}/> */}
    </>
  )
}