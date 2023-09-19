import ListGroup from "react-bootstrap/ListGroup";

function ActivityList({ activities, onActivityClick }) {
  return (
    <>
      <h3>Activities</h3>
      <ListGroup>
        {activities.map((activity, index) => (
          <div
            style={{
              backgroundColor: activity.color,
              cursor: "pointer",
              margin: 5,
              width: 150,
            }}
          >
            <ListGroup.Item
              style={{
                backgroundColor: activity.color,
              }}
              key={index}
              className="activity-list"
              onClick={() => onActivityClick(activity)}
            >
              {activity.type}
            </ListGroup.Item>
          </div>
        ))}
      </ListGroup>
    </>
  );
}

export default ActivityList;
