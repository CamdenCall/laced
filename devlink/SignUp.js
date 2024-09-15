"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SignUp.module.css";

export function SignUp({ as: _Component = _Builtin.Section }) {
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
            />
          </_Builtin.Block>
          <_Builtin.Link
            className={_utils.cx(_styles, "gradient-button")}
            button={true}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Sign Up"}
          </_Builtin.Link>
          <_Builtin.Block className={_utils.cx(_styles, "alert")} tag="div">
            <_Builtin.Block className={_utils.cx(_styles, "_16-reg")} tag="div">
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
