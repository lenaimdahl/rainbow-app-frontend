import ListGroup from "react-bootstrap/ListGroup";

function ActivityList({ activities, onActivityClick }) {
  return (
    <>
      <h3>Activities</h3>
      <ListGroup>
        {activities.map((activity, index) => (
          <div
            style={{
              cursor: "pointer",
              margin: 5,
              width: 120,
            }}
          >
            <ListGroup.Item
              key={index}
              className="activity-list"
              onClick={() => onActivityClick(activity)}
            >
              {activity.points}
              {activity.name}
            </ListGroup.Item>
          </div>
        ))}
      </ListGroup>
    </>
  );
}

export default ActivityList;
