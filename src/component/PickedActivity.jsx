function PickedActivity(props) {
  return (
    <div>
      <td
        style={{
          backgroundColor: props.selectedActivity.color,
          width: 15,
          height: 15,
          cursor: "pointer",
        }}
      ></td>
      <td>{props.selectedActivity.type}</td>
    </div>
  );
}

export default PickedActivity;
