"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SettingsTab.module.css";

export function SettingsTab({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "settingstab")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Heading className={_utils.cx(_styles, "tab-heading")} tag="h1">
        {"Settings"}
      </_Builtin.Heading>
      <_Builtin.Block className={_utils.cx(_styles, "settings-main")} tag="div">
        <_Builtin.FormWrapper className={_utils.cx(_styles, "biolink-form")}>
          <_Builtin.FormForm
            className={_utils.cx(_styles, "update-form")}
            name="email-form"
            data-name="Email Form"
            method="get"
            id="email-form"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "form-field")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "form-label")}
                tag="div"
              >
                {"Update Email"}
              </_Builtin.Block>
              <_Builtin.FormTextInput
                className={_utils.cx(_styles, "text-field")}
                autoFocus={false}
                maxLength={256}
                name="currentEmail"
                data-name="currentEmail"
                placeholder="Current Email"
                type="email"
                disabled={false}
                required={true}
                id="currentEmail-3"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "form-field")}
              tag="div"
            >
              <_Builtin.FormTextInput
                className={_utils.cx(_styles, "text-field")}
                autoFocus={false}
                maxLength={256}
                name="newEmail"
                data-name="newEmail"
                placeholder="New Email"
                type="email"
                disabled={false}
                required={true}
                id="newEmail-3"
              />
            </_Builtin.Block>
          </_Builtin.FormForm>
          <_Builtin.Link
            className={_utils.cx(_styles, "save")}
            button={true}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Save Changes"}
          </_Builtin.Link>
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
        <_Builtin.FormWrapper className={_utils.cx(_styles, "biolink-form")}>
          <_Builtin.FormForm
            className={_utils.cx(_styles, "update-form")}
            name="email-form"
            data-name="Email Form"
            method="get"
            id="email-form"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "form-field")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "form-label")}
                tag="div"
              >
                {"Update Password"}
              </_Builtin.Block>
              <_Builtin.FormTextInput
                className={_utils.cx(_styles, "text-field")}
                autoFocus={false}
                maxLength={256}
                name="currentPassword"
                data-name="currentPassword"
                placeholder="Current Password"
                type="password"
                disabled={false}
                required={true}
                id="currentPassword-3"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "form-field")}
              tag="div"
            >
              <_Builtin.FormTextInput
                className={_utils.cx(_styles, "text-field")}
                autoFocus={false}
                maxLength={256}
                name="newPassword"
                data-name="newPassword"
                placeholder="New Password"
                type="password"
                disabled={false}
                required={true}
                id="newPassword-3"
              />
            </_Builtin.Block>
          </_Builtin.FormForm>
          <_Builtin.Link
            className={_utils.cx(_styles, "save")}
            button={true}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Save Changes"}
          </_Builtin.Link>
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
      </_Builtin.Block>
    </_Component>
  );
}
