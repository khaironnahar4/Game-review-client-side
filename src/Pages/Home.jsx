
// import { useEffect, useState } from "react";
import About from "../Components/About";
import Card from "../Components/Card";
import Genre from "../Components/Genre";
import Hero from "../Components/Hero"
import { Link, useLoaderData } from "react-router-dom";


function Home() {
  // const [reviewDatas, setReviewDatas] = useState([]);

  // useEffect(()=>{
  //   fetch('https://gameverse-server-side.vercel.app/reviews/highest-reated-six-data')
  //   .then(res=> res.json())
  //   .then(data => {
  //       // console.log(data);
  //       setReviewDatas(data);
  //   }
  //   )
  // } ,[])

  const reviewDatas = useLoaderData();



  return (
    <div>
      {/* hero section */}
      <Hero></Hero>

    {/* about section */}
    <About></About>

      <section className="mb-24">
        <h1 className="text-2xl font-bold">Reviews</h1>
        <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {
            reviewDatas.map(data => <Card key={data._id} review={data}></Card>)
          }
        </div>
        <div className="flex w-full justify-center mt-6">
          <Link to={`/all-reviews`} className="btn btn-primary">Explore more</Link>
          </div>
      </section>
      {/* genre section */}
      <Genre></Genre>
    </div>
  )
}

export default Home