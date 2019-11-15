// @flow

import React, { useState } from 'react';

import Link from 'next/link';

import 'normalize.css';
import { useAuth } from '../imports/deepcase/auth/react';
import { wrapPage } from '../imports/project/wrap-page';
import { makeStyles } from '@material-ui/styles';
import { useGql } from '../imports/deepcase/hasura/use';

export const ExampleAuth = () => {
  const auth = useAuth();
  const [result, setResult] = useState({});
  
  const local = async (username, password) => setResult(await auth.local({ username, password }));
  const logout = async () => setResult(await auth.logout());

  return <>
    <h4>auth</h4>
    <div>loading: {auth.loading ? 1 : 0}</div>
    <div>token: {auth.token}</div>
    <div>id: {auth.id}</div>
    <div>
      result
      <div>{JSON.stringify(result, null, 2)}</div>
    </div>
    <div>
      <button onClick={() => local('a', 'a')}>local('a', 'a')</button>
    </div>
    <div>
      <button onClick={() => local('a', 'b')}>local('a', 'b')</button>
      !password
    </div>
    <div>
      <button onClick={() => local('b', 'a')}>local('b', 'a')</button>
      !username
    </div>
    <Link href="/api/auth/google"><a>/api/auth/google</a></Link>
    <div>
      <button onClick={() => logout()}>logout()</button>
    </div>
  </>;
};

// $flowignore
const deepcaseImage = require('../images/deepcase.png?sizes[]=1800,sizes[]=1280,sizes[]=960,sizes[]=600,sizes[]=300,sizes[]=100');

export const ExampleResponsiveImage = () => (<>
  <h4>responsive-image</h4>
  <picture>
    {deepcaseImage.images.map((image, i) => <source
      key={i}
      srcSet={image.path}
      media={`(min-width: ${image.width}px)`}
      type={image.type || 'image/jpeg'}
    />)}
    <img src={deepcaseImage.src} style={{ width: '100%' }} />
  </picture>
</>);

const useStyles = makeStyles(() => ({
  root: {
    background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)',
    width: 100,
    height: 100,
  },
}));

export const ExampleMui = () => {
  const classes = useStyles();
  return <>
    <h4>mui</h4>
    <div className={classes.root}/>
  </>;
};

export const ExampleHasura = () => {
  const { data, loading, error } = useGql('{ links { id } }');
  return <>
    <h4>hasura</h4>
    <div>loading: {loading}</div>
    <pre>{JSON.stringify(error, null, 2)}</pre>
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </>;
};

export default wrapPage(() => (<>
  <h1>react-web-app</h1>
  <ExampleAuth/>
  <ExampleHasura/>
  <ExampleResponsiveImage/>
  <ExampleMui/>
</>));
