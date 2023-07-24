import React from "react";

function ActivityItem({ type, color }) {
  return (
    <div>
      <li
        style={{
          backgroundColor: color,
        }}
      >
        {type}
      </li>
    </div>
  );
}

export default ActivityItem;
