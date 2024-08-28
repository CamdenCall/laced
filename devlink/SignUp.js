"use client";
import React, {useState} from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SignUp.module.css";
import Axios from 'axios'

export function SignUp({ as: _Component = _Builtin.Section }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [link, setLink] = useState('');
  const [error, setError] = useState('');

  const signUp = (event) => {
    event.preventDefault();
    if (!email.includes("@")) {
      setError("Please Use A Valid Email")
      document.getElementById("alert").style.display = "block"
    } else if (password.length == 0) {
      setError("Please Input A Password")
      document.getElementById("alert").style.display = "block"
    } else if (password.length < 4) {
      setError("Password Must Be At Least 4 Characters")
      document.getElementById("alert").style.display = "block"
    } else if (link.length == 0) {
      setError("Please Input Link Name")
      document.getElementById("alert").style.display = "block"
    }
    else {
      Axios.post('http://localhost:3001/sign-up', {email, password, link}).then((response) => {
          console.log(email, password);
          console.log(response);
        })
        .catch((error) => {
          console.error("There was an error signing in!", error);
          if (error.response && error.response.status === 400) {
            setError(error.response.data.message);
            document.getElementById("alert").style.display = "block";
          }
        });
      }
    }
  return (
    <_Component
      className={_utils.cx(_styles, "signup")}
      tag="section"
      grid={{
        type: "section",
      }}
    >
      <_Builtin.Heading
        className={_utils.cx(_styles, "section-header")}
        tag="h2"
      >
        {"Sign Up"}
        <br />
      </_Builtin.Heading>
      <_Builtin.FormWrapper className={_utils.cx(_styles, "sign-in")}>
        <_Builtin.FormForm
          className={_utils.cx(_styles, "guest-form")}
          name="wf-form-signUp"
          data-name="signUp"
          method="get"
          id="wf-form-signUp"
        >
          <_Builtin.FormTextInput
            className={_utils.cx(_styles, "text-field")}
            name="email"
            maxLength={256}
            data-name="email"
            placeholder="Email"
            disabled={false}
            type="email"
            required={true}
            autoFocus={false}
            id="signupEmail"
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
            id="signupPassword"
            onChange={(e) => setPassword(e.target.value)}
          />
          <_Builtin.Block className={_utils.cx(_styles, "link-slug")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "slug-holder")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "form-label")}
                tag="div"
              >
                {"Laced.bio/"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.FormTextInput
              className={_utils.cx(_styles, "text-field", "link-tag")}
              name="slug"
              maxLength={256}
              data-name="slug"
              placeholder="name"
              disabled={false}
              type="text"
              required={true}
              autoFocus={false}
              id="signupSlug"
              onChange={(e) => setLink(e.target.value)}
            />
          </_Builtin.Block>
          <button className="SignUp_gradient-button__LteER w-button" onClick={signUp}> Sign Up</button>
          <_Builtin.Block className={_utils.cx(_styles, "alert")} tag="div" id="alert">
            <_Builtin.Block className={_utils.cx(_styles, "_14-reg")} tag="div">
              {error}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.FormForm>
        <_Builtin.FormSuccessMessage>
          <_Builtin.Block tag="div">
            {"Thank you! Your submission has been received!"}
          </_Builtin.Block>
        </_Builtin.FormSuccessMessage>
        <_Builtin.FormErrorMessage>
          <_Builtin.Block tag="div">
            {"Oops! Something went wrong while submitting the form."}
          </_Builtin.Block>
        </_Builtin.FormErrorMessage>
      </_Builtin.FormWrapper>
    </_Component>
  );
}
