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
      <h2 className="home--h2">Strona główna</h2>
      <p className="home--p">Zadania z tygodnia jedenastego - REDUX (1-4)</p>
      <Button handleClick={buttonLoad}>Load</Button>
      <Button handleClick={buttonReset}>Reset</Button>
      <Button handleClick={buttonAdd}>Add</Button>
    </div>
  );
};

export default Home;
