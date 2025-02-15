import React from "react";
import clsx from "clsx";
import css from "../components/Friend.module.css";

const FriendListItem = ({ friend }) => {
  return (
    <div className={css.item}>
      <img src={friend.avatar} alt="Avatar" width="48" />
      <p>{friend.name}</p>
      <p className={clsx(friend.isOnline ? css.online : css.offline)}>
        {friend.isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
