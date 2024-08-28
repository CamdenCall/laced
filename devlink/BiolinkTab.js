"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BiolinkTab.module.css";

export function BiolinkTab({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "biolinktab")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block className={_utils.cx(_styles, "tab-top")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "tab-info")} tag="div">
          <_Builtin.Heading
            className={_utils.cx(_styles, "tab-heading")}
            tag="h1"
          >
            {"Manage Link"}
          </_Builtin.Heading>
          <_Builtin.Block className={_utils.cx(_styles, "line")} tag="div" />
          <_Builtin.Block
            className={_utils.cx(_styles, "_16-reg")}
            tag="div"
            id="linkName"
          >
            {"laced.bio/name"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Link
          className={_utils.cx(_styles, "open-link")}
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Block className={_utils.cx(_styles, "_16-reg")} tag="div">
            {"Open Link"}
          </_Builtin.Block>
          <_Builtin.Image
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/65cac36d42b7fd39d61e0220/6650d8d7d89a1114e17d33d7_open-link.svg"
          />
        </_Builtin.Link>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "biolink-main")} tag="div">
        <_Builtin.FormWrapper className={_utils.cx(_styles, "biolink-form")}>
          <_Builtin.FormForm
            className={_utils.cx(_styles, "form")}
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
                {"Link Tag"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "link-slug")}
                tag="div"
              >
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
                  autoFocus={false}
                  maxLength={256}
                  name="slug"
                  data-name="slug"
                  placeholder="name"
                  type="text"
                  disabled={false}
                  required={false}
                  id="slug"
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "form-field")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "form-label")}
                tag="div"
              >
                {"Username"}
              </_Builtin.Block>
              <_Builtin.FormTextInput
                className={_utils.cx(_styles, "text-field")}
                autoFocus={false}
                maxLength={256}
                name="username"
                data-name="username"
                placeholder="Name"
                type="text"
                disabled={false}
                required={false}
                id="username-3"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "form-field")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "form-label")}
                tag="div"
              >
                {"Bio"}
              </_Builtin.Block>
              <_Builtin.FormTextarea
                className={_utils.cx(_styles, "text-field", "bio")}
                required={false}
                autoFocus={false}
                placeholder="About You"
                maxLength={5000}
                name="bio"
                data-name="bio"
                id="bio"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "form-field")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "form-label")}
                tag="div"
              >
                {"Profile Picture"}
              </_Builtin.Block>
              <_Builtin.FormTextInput
                className={_utils.cx(_styles, "text-field")}
                autoFocus={false}
                maxLength={256}
                name="profileImage"
                data-name="profileImage"
                placeholder="Image URL"
                type="text"
                disabled={false}
                required={false}
                id="profileImage"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "form-field")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "form-label")}
                tag="div"
              >
                {"Background Image"}
              </_Builtin.Block>
              <_Builtin.FormTextInput
                className={_utils.cx(_styles, "text-field")}
                autoFocus={false}
                maxLength={256}
                name="backgroundImage"
                data-name="backgroundImage"
                placeholder="Image URL"
                type="text"
                disabled={false}
                required={false}
                id="backgroundImage"
              />
            </_Builtin.Block>
          </_Builtin.FormForm>
          <_Builtin.Link
            className={_utils.cx(_styles, "submit")}
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
