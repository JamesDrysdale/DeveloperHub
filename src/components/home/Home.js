import Hero from "../hero/Hero";

const Home = ({resources}) => {
  return (
    <div>
        Welcome
        <Hero resources = {resources} />
    </div>
  )
}

export default Home