import ListGroup from "react-bootstrap/ListGroup";

function ActivityList({ fetchActivities, activities, onActivityClick }) {
  return (
    <>
      <h3>Activities</h3>
      <ListGroup>
        {activities.map((activity, index) => (
          <ListGroup.Item
            key={index}
            style={{
              backgroundColor: activity.color,
              cursor: "pointer",
              margin: 5,
            }}
            onClick={() => onActivityClick(activity)}
          >
            {activity.type}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default ActivityList;
