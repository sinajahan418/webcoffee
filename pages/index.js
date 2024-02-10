import About from "@/component/templates/index/About";
import Services from "@/component/templates/index/Services";
import Slider from "@/component/templates/index/Slider";
import Head from "next/head";
import Image from "next/image";



export default function Home({data}) {
  return (
   <>
   <Slider/>
   <About/>
   <Services  serveces= {data.serveces}/>
   </>
  );

}
   export async function getStaticProps(){
     const res = await fetch ("http://localhost:4000/sevece")
     const serveces = await res.json()

      return {
        props: {
          data: {
            serveces,
          },
        },
        revalidate: 60 * 60 * 12
      }

   }

