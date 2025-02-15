import React from "react";
import FriendListItem from "./FriendListItem";
import FriendData from "./FriendData.json";
import css from "../components/Friend.module.css";
const FriendList = () => {
  return (
    <div className={css.main}>
      <ul className={css.list}>
        {FriendData.map((friend) => (
          <li key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
