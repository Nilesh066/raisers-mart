import React from "react";

export default function Lists({ selectedAlbumPhotos }) {
  return (
    <div className="lists-container">
      {selectedAlbumPhotos.map((item, index) => (
        <span key={index}>{item.title}</span>
      ))}
    </div>
  );
}
