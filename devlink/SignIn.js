"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SignIn.module.css";

export function SignIn({ as: _Component = _Builtin.Section }) {
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
      <_Builtin.FormWrapper className={_utils.cx(_styles, "sign-in")}>
        <_Builtin.FormForm
          className={_utils.cx(_styles, "guest-form")}
          name="wf-form-signIn"
          data-name="signIn"
          method="get"
          id="wf-form-signIn"
        >
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
            id="signinEmail"
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
            id="signinPassword"
          />
          <_Builtin.Link
            className={_utils.cx(_styles, "gradient-button")}
            button={true}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Sign In"}
          </_Builtin.Link>
          <_Builtin.Block className={_utils.cx(_styles, "alert")} tag="div">
            <_Builtin.Block className={_utils.cx(_styles, "_14-reg")} tag="div">
              {"Link name is not available, please choose another"}
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
