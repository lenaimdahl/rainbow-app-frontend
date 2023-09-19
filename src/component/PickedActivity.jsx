function PickedActivity(props) {
  return (
    <div>
      <td
        style={{
          backgroundColor: props.selectedActivity.points,
          width: 15,
          height: 15,
          cursor: "pointer",
        }}
      ></td>
      <td>{props.selectedActivity.name}</td>
    </div>
  );
}

export default PickedActivity;
