import { connect } from "react-redux";
import { getUsers, resetUsers, addOneUser } from "../redux/modules/users";

const Home = (props) => {
  const { getUsers, resetUsers, addOneUser } = props;

  const handleLoad = () => {
    getUsers();
  };
  const handleReset = () => {
    resetUsers();
  };
  const handleAddOneUser = () => {
    addOneUser();
  };

  return (
    <div className="home">
      <h2 className="home--h2">Strona główna</h2>
      <p className="home--p">Zadania z tygodnia jedenastego - REDUX (1-4)</p>
      <button onClick={handleLoad} type="button" className="home--button">
        Load
      </button>
      <button onClick={handleReset} type="button" className="home--button">
        Reset
      </button>
      <button onClick={handleAddOneUser} type="button" className="home--button">
        Add
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsers()),
  addOneUser: () => dispatch(addOneUser()),
  resetUsers: () => dispatch(resetUsers()),
});

export default connect(null, mapDispatchToProps)(Home);
