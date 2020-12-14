import Box from "@material-ui/core/Box";
import FirstSide from "./components/Firstside";
import SecondSide from "./components/Secondside";
import "./App.css";
window.console.log = () => {}
function App() {
  return (
    <div className="App">
      <Box
        display="flex"
        bgcolor="background.paper"
        className="main_container"
      >
        <Box
          bgcolor="#343e48"
          className="box_1"
        >
          <FirstSide />
        </Box>
        <Box  className="box_2"  bgcolor="#343e48">
          <SecondSide />
        </Box>
      </Box>
    </div>
  );
}

export default App;
