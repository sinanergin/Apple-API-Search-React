import React from 'react';

export default function Album(props: any) {
  const { artistName, collectionName, collectionViewUrl, primaryGenreName } =
    props.recordInfo;

  return (
    <div>
      <hr />
      <p>artistName: {artistName} </p>
      <p>collectionName: {collectionName} </p>
      <p>collectionViewUrl: {collectionViewUrl} </p>
      <p>primaryGenreName: {primaryGenreName} </p>
    </div>
  );
}
