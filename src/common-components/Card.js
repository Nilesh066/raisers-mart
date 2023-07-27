import React from "react";

export default function Card({ totalPhoto, userId, onClick, className }) {
  return (
    <div className={className} onClick={onClick}>
      <span>{userId}</span>
      <div>Title {userId}</div>
      <div className="card-items">{totalPhoto}</div>
    </div>
  );
}
