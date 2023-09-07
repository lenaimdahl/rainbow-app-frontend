function ControlButtons(props) {
  const StartButton = (
    <button className="btn-one btn-start" onClick={props.handleStart}>
      Start
    </button>
  );

  const ActiveButtons = (
    <div className="btn-grp">
      <button className="btn-reset" onClick={props.handleReset}>
        Reset
      </button>
      <button className="btn-pause" onClick={props.handlePauseResume}>
        {props.isPaused ? "Resume" : "Pause"}
      </button>
    </div>
  );

  const StopButton = props.active && (
    <div className="btn-grp">
      <button className="btn-stop" onClick={props.handleStop}>
        Stop
      </button>
    </div>
  );

  return (
    <div className="Control-Buttons">
      <div>{props.active ? ActiveButtons : StartButton}</div>
      <div>{StopButton}</div>
    </div>
  );
}

export default ControlButtons;
