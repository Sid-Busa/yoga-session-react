import EventInfo from "./components/EventInfo";
import EventCalendar from "./components/EventCalendar/EventCalendar";
import "./App.css";
window.console.log = () => {}
function App() {
  return (
    <div className="App">
      <div className="container_event_list">
        <div className="box_1">
          <EventInfo />
        </div>
        <div className="box_2">
          <EventCalendar />
        </div>
      </div>
    </div>
  );
}

export default App;
