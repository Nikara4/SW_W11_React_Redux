import Button from "../components/Button";

const Home = () => {
  const buttonLoad = (e) => {
    e.preventDefault();
  };
  const buttonReset = (e) => {
    e.preventDefault();
  };
  const buttonAdd = (e) => {
    e.preventDefault();
  };

  return (
    <div className="home">
      <Button handleClick={buttonLoad}>Load</Button>
      <Button handleClick={buttonReset}>Reset</Button>
      <Button handleClick={buttonAdd}>Add</Button>
      <p>Hello, why the fuck you not work?</p>
    </div>
  );
};

export default Home;
