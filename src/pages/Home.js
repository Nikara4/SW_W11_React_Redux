const Home = (props) => {
  return (
    <div className="home">
      <h2 className="home--h2">Strona główna</h2>
      <p className="home--p">Zadania z tygodnia jedenastego - REDUX (1-4)</p>
      <button
        onClick={props.handleLoadButton}
        type="button"
        className="home--button"
      >
        Load
      </button>
      <button
        onClick={props.handleResetButton}
        type="button"
        className="home--button"
      >
        Reset
      </button>
      <button
        onClick={props.handleAddButton}
        type="button"
        className="home--button"
      >
        Add
      </button>
    </div>
  );
};

export default Home;
