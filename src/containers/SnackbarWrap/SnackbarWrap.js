import { connect } from "react-redux";
import { Snackbar } from "../../components/Snackbar";

const SnackbarWrapper = ({ snackbars }) => {
  return (
    <div className="snackbar--wrapper">
      {snackbars.map((snackbar) => (
        <Snackbar
          key={snackbar.id}
          id={snackbar.id}
          message={snackbar.message}
          open={true}
          severity={snackbar.severity}
          autoHideTime={snackbar.autoHideTime}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  snackbars: state.snackbar.snackbars,
});

export default connect(mapStateToProps)(SnackbarWrapper);
