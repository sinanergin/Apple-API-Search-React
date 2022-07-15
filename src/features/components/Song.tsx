import React from 'react';

export default function Song(props: any) {
  const { artistName, trackName, primaryGenreName, artworkUrl100 } =
    props.recordInfo;

  return (
    <div>
      <hr />
      <p>artistName: {artistName} </p>
      <p>trackName: {trackName} </p>
      <p>primaryGenreName: {primaryGenreName} </p>
      <p>artworkUrl100: {artworkUrl100} </p>
    </div>
  );
}
