import React from 'react';

export default function Artist(props: any) {
  const { artistName, artistLinkUrl, primaryGenreName } = props.recordInfo;

  return (
    <div>
      <hr />
      <p>artistName: {artistName} </p>
      <p>artistLinkUrl: {artistLinkUrl} </p>
      <p>primaryGenreName: {primaryGenreName} </p>
    </div>
  );
}
