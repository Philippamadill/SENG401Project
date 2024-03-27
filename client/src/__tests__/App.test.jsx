import * as React from 'react';
import { useContext } from "react";
import {getByTestId, render, RenderOptions, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom'
import { AuthenticationContext } from "../context/UserContext";
import useLocalStorage from "use-local-storage";
import App from '../app/App.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

test('TC18: renders login button', async () => {
    const {findByText} = render(<BrowserRouter>
      <Routes>
        <Route {...<App />} />
      </Routes>
    </BrowserRouter>);
    await waitFor(()=> expect(findByText("Login")).toBeTruthy());
});

test('TC19: renders guest button', async () => {
  const {findByText} = render(<BrowserRouter>
    <Routes>
      <Route {...<App />} />
    </Routes>
  </BrowserRouter>);
  await waitFor(()=> expect(findByText("Continue as Guest")).toBeTruthy());
});

test('TC20: renders reviews link', async () => {
  const {findByText} = render(<BrowserRouter>
    <Routes>
      <Route {...<App />} />
    </Routes>
  </BrowserRouter>);
  await waitFor(()=> expect(findByText("Reviews")).toBeTruthy());
});

test('TC21: renders currently reading link', async () => {
  const {findByText} = render(<BrowserRouter>
    <Routes>
      <Route {...<App />} />
    </Routes>
  </BrowserRouter>);
  await waitFor(()=> expect(findByText("Currently reading")).toBeTruthy());
});

test('TC22: renders want to read link', async () => {
  const {findByText} = render(<BrowserRouter>
    <Routes>
      <Route {...<App />} />
    </Routes>
  </BrowserRouter>);
  await waitFor(()=> expect(findByText("Want to read")).toBeTruthy());
});

test('TC23: renders search link', async () => {
  const {findByText} = render(<BrowserRouter>
    <Routes>
      <Route {...<App />} />
    </Routes>
  </BrowserRouter>);
  await waitFor(()=> expect(findByText("Search")).toBeTruthy());
});
