"use client";
import React, {useState} from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SignIn.module.css";
import Axios from 'axios'

export function SignIn({ as: _Component = _Builtin.Section }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (event) => {
    event.preventDefault();
    Axios.post('http://localhost:3001/sign-in', {email, password}, { withCredentials: true }).then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("There was an error signing in!", error);
      });
    }
  return (
    <_Component
      className={_utils.cx(_styles, "signup")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Heading
        className={_utils.cx(_styles, "section-header")}
        tag="h2"
      >
        {"Sign In"}
        <br />
      </_Builtin.Heading>
      <form className="SignIn_guest-form__YV6jh">
          <_Builtin.FormTextInput
            className={_utils.cx(_styles, "text-field")}
            name="email"
            maxLength={256}
            data-name="email"
            placeholder="Email"
            disabled={false}
            type="text"
            required={true}
            autoFocus={false}
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <_Builtin.FormTextInput
            className={_utils.cx(_styles, "text-field")}
            name="password"
            maxLength={256}
            data-name="password"
            placeholder="Password"
            disabled={false}
            type="password"
            required={true}
            autoFocus={false}
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="SignIn_gradient-button__g4sPk w-button" onClick={signIn}> Sign In</button>
      </form>
    </_Component>
  );
}
