import React from "react";
import { comments } from "../libs/comments";

export default function Reply(props) {
  return (
    <div>
      {comments.map((x, i) => (
        <div className="d-flex gap-2 my-2 ps-5" key={x.replies.username}>
          <img
            src={x.replies.userImagePath}
            width="48"
            height="48"
            className="rounded-circle"
            style={{ objectFit: "cover" }}
          />
          <div
            className="rounded rounded-3 p-2"
            style={{ backgroundColor: "#E5E7EB" }}
          >
            <span className="fw-semibold">{x.replies.username}</span>
            <br />
            <span>{x.replies.replyText}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
